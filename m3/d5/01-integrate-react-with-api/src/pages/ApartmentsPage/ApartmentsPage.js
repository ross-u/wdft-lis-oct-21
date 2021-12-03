import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from 'react-router-dom';

const apiURL = "https://ironbnb-m3.herokuapp.com";

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  // This effect will run only once right after the initial render
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/apartments`); // https://ironbnb-m3.herokuapp.com/apartments
      const apartmentsData = response.data;

      // console.log("apartmentsData", apartmentsData);
      setApartments(apartmentsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>List of apartments</h3>
      {apartments &&
        apartments.map((oneApartment) => {
          return (
            <Link to={"/apartment/details/" + oneApartment._id } key={oneApartment._id} >
              <div className="card">
                <img src={oneApartment.img} alt="" />
                <h3>{oneApartment.title}</h3>
                <p>Price: {oneApartment.pricePerDay} $</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ApartmentsPage;
