import countriesData from './../countries.json';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function getCountryName(code) {
  const theCountry = countriesData.find((oneCountry) => {
    return oneCountry.alpha3Code === code;
  });

  return theCountry.name.common;
}

function CountryDetails() {
  const [foundCountry, setFoundCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries/' + countryId
      );

      setFoundCountry(response.data);
    };

    fetchData();
  }, [countryId]);

  if (!foundCountry) {
    return <p className="col-7"> Loading </p>;
  }

  return (
    <div className="col-7">
      <img
        src={`http://www.geognos.com/api/en/countries/flag/${foundCountry.alpha2Code}.png`}
        alt="country flag"
        style={{ width: '300px' }}
      />
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((alpha3) => {
                  return (
                    <li>
                      <Link to={'/' + alpha3}> {getCountryName(alpha3)} </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
