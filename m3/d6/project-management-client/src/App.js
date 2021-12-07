import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from './pages/ProjectDetailsPage';

import EditProjectPage from './pages/EditProjectPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects" element={<ProjectListPage />} />

        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />

        <Route path="/edit-project/:projectId" element={ <EditProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
