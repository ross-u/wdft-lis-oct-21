import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesList() {
  const [countries, setCountries] = useState([]); // Bonus Iteration

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiURL);

      setCountries(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((oneCountry) => (
          <Link
            key={oneCountry.alpha3Code}
            className="list-group-item list-group-item-action"
            to={'/' + oneCountry.alpha3Code}
          >
            <img
              width="50"
              src={`http://www.geognos.com/api/en/countries/flag/${oneCountry.alpha2Code}.png`}
              alt="flag"
            />
            <p>{oneCountry.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
