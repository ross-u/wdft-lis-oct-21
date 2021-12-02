import "./App.css";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

import { Routes, Route } from "react-router-dom";
import projectsData from './projects-data.json';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects" element={<ProjectsPage projectsData={projectsData} />} />

        <Route path="/projects/:projectId" element={ <ProjectDetailsPage /> } />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
