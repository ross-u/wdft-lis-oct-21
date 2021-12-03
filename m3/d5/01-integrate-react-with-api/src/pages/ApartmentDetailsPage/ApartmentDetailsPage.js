import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';
const apiURL = "https://ironbnb-m3.herokuapp.com";

function ApartmentDetailsPage() {
  const [apartment, setApartment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { apartmentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/apartments/${apartmentId}`); // https://ironbnb-m3.herokuapp.com/apartments/123abc
      const oneApartmentData = response.data;

      setApartment(oneApartmentData);
      setIsLoading(false);
    };

    fetchData();
  }, [])


  if (isLoading) return <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner" />

  return (
    <div>
      <h2>Apartment Details</h2>

      <img src={apartment.img} alt="apartment" />
      <h3>{ apartment.title}</h3>
      <p>Price: {apartment.pricePerDay} </p>
      
      <button onClick={() => navigate(-1) }>Back</button>
    </div>
  );
}

export default ApartmentDetailsPage;
