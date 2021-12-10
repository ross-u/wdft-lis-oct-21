import axios from 'axios';

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login = async (requestBody) => {
    return this.api.post('/auth/login', requestBody);
  }

  signup = async (requestBody) => {
    return this.api.post('/auth/signup', requestBody);
  }

  verify = async () => {
    return this.api.get('/auth/verify');
  }

}

// Create one instance of the service
const authService = new AuthService();

export default authService;