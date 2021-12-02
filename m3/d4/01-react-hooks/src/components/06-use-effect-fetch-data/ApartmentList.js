import axios from "axios";
import { useState, useEffect } from "react";

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

function ApartmentList() {
  const [loading, setLoading] = useState(true);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiURL);
      const apartmentsData = response.data;

      setLoading(false);
      setApartments(apartmentsData);
    };

    fetchData();
  }, []); // <-- [] means, run this effect only once on initial render

  return (
    <div>
      <h3>List of apartments</h3>

      {loading && <p>Loading ...</p>}

      {apartments.map((oneApartment) => {
        return (
          <div className="card">
            <img src={oneApartment.img} alt="" />
            <h3>{oneApartment.title}</h3>
            <p>Price: {oneApartment.pricePerDay} $</p>
          </div>
        );
      })}
    </div>
  );
}

export default ApartmentList;
