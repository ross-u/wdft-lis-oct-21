import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ApartmentsPage from "./pages/ApartmentsPage/ApartmentsPage";
import AddApartmentPage from "./pages/AddApartmentPage/AddApartmentPage";

import ApartmentDetailsPage from "./pages/ApartmentDetailsPage/ApartmentDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<ApartmentsPage />} />
        <Route path="/apartments/new" element={<AddApartmentPage />} />

        <Route
          path="/apartment/details/:apartmentId"
          element={<ApartmentDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
