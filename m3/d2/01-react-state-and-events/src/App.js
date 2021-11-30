import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (event) => {
    console.log("event.target.value", event.target.value);
    setTheme(event.target.value);
  };

  return (
    <div className={"App " + theme}>
      <Counter />

      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}

export default App;
