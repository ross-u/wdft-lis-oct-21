import { useState } from 'react';
import { Divider, Input } from "antd";

function AddFoodForm({addFood}) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();  // prevent the page from reloading

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings
    }

    // Add the food the list 
    addFood(newFood);
  }


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      
      <label>Name</label>
      <Input type="text" value={name} onChange={handleName} />

      <label>Image</label>
      <Input type="text" value={image} onChange={handleImage} />      

      <label>Calories</label>
      <Input type="number" value={calories} onChange={handleCalories} />      


      <label>Servings</label>
      <Input type="number" value={servings} onChange={handleServings} />      


      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;