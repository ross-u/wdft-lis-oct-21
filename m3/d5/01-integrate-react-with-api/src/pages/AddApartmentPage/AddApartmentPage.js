import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiURL = "https://ironbnb-m3.herokuapp.com";

function AddApartmentPage() {
  const [title, setTitle] = useState("");
  const [pricePerDay, setPricePerDay] = useState(1);
  const [img, setImg] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleTitle = (e) => setTitle(e.target.value);
  const handlePrice = (e) => setPricePerDay(e.target.value);
  const handleImg = (e) => setImg(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      // prevent page reload on submit
      e.preventDefault();

      const newApt = {
        title: title,
        pricePerDay: pricePerDay,
        img: img,
      };

      await axios.post(`${apiURL}/apartments`, newApt);

      // Clear the inputs
      setTitle("");
      setPricePerDay(1);
      setImg("");

      navigate("/"); // Navigate to the home page
    } catch (error) {
      setErrorMessage("Something went wrong. Try again");
      setTimeout(() => setErrorMessage(undefined), 2000);
    }
  };

  // if (errorMessage) return <p>{errorMessage}</p>;

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}

        <label>Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label>Price Per Day</label>
        <input
          type="number"
          name="pricePerDay"
          value={pricePerDay}
          onChange={handlePrice}
        />

        <label>Image</label>
        <input type="text" name="img" value={img} onChange={handleImg} />

        <button type="submit"> Create Apartment </button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
