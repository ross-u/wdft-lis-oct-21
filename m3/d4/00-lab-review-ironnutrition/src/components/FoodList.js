import foodsJSON from "./../foods.json";
import { useState } from "react";
import FoodBox from './../components/FoodBox';
import AddFoodForm from './../components/AddFoodForm';

function FoodList() {
  const [foods, setFoods] = useState(foodsJSON); // Array that we render/show as a list
  
  const addFood = (foodObj) => {
    const updatedFoods = [foodObj, ...foods];

    setFoods(updatedFoods);
  }

  const deleteFood = (foodNameStr) => {
    const filteredFoods = foods.filter((oneFood) => {
      return oneFood.name !== foodNameStr; // exclude the food object we want to delete
    })

    setFoods(filteredFoods);
  }

  return (
    <div className="App">
      <AddFoodForm addFood={addFood}  />

      {foods.map((oneFood) => (
        <FoodBox food={oneFood} deleteFood={deleteFood}  />
      ))}
      
    </div>
  );
}

export default FoodList;
