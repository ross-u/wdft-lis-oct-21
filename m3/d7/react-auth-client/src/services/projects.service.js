import axios from 'axios';

class ProjectsService {
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

  // POST /api/projects
  createProject = async (requestBody) => {
    return this.api.post('/api/projects', requestBody);
  }

  // GET /api/projects
  getAllProjects = async () => {
    return this.api.get('/api/projects');
  }

  // GET /api/projects/:projectId
  getProject = async (projectId) => {
    return this.api.get(`/api/projects/${projectId}`);
  }

  // PUT /api/projects/:projectId
  updateProject = async (projectId, requestBody) => {
    return this.api.put(`/api/projects/${projectId}`, requestBody);
  }

  // DELETE /api/projects/:projectId
  deleteProject = async (projectId) => {
    return this.api.delete(`/api/projects/${projectId}`);
  } 


}

// Create one instance of the service
const projectsService = new ProjectsService();

export default projectsService;