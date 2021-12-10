import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import authService from "../services/auth.service";

const AuthContext = createContext();

function AuthProviderWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const verifyStoredToken = async () => {
    try {
      // Get the stored token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        const response = await axios.get(
          "http://localhost:5005/auth/verify",
          { headers: { Authorization: `Bearer ${storedToken}` } }
        );

        // or with a service
        // const response = await authService.verify();

        // If the token is valid, update the state variables
        const user = response.data; // coming from payload
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      // If the token is not validated, or there's another error
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const logInUser = (token) => {
    localStorage.setItem("authToken", token);
    verifyStoredToken();
  };

  const logOutUser = () => {
    localStorage.removeItem("authToken");

    // Update state variables
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    verifyStoredToken();
  }, []);


  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user, logInUser, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
