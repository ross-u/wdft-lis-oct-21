import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

import CountryDetails from './components/CountryDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList />

          <Routes>
            <Route path="/:countryId" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

/* 
            <Route
              path="/"
              element={
                <div className="col-7">
                  <h2>Select a country</h2>
                </div>
              }
            />
*/
