import axios from "axios";

class FileService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  uploadImage = (file) => {
    // axios.post()
    return this.api.post("/api/upload", file);
  };
}

// Create one instance of the service
const fileService = new FileService();

export default fileService;
