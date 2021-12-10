import axios from 'axios';

class TasksService {
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

  // POST /api/tasks
  createTask = async (requestBody) => {
    return this.api.post('/api/tasks', requestBody);
  }

}

// Create one instance of the service
const tasksService = new TasksService();

export default tasksService;