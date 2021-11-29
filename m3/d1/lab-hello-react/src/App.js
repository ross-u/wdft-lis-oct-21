import logo from "./logo.svg";
import "./App.css";
import Headline from "./components/Headline";
import Button from "./components/Button";
import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";

function App() {
  return (
    <div className="App">
      <Headline />
      <p>
        You wil learn how to use the most popular front-end library and become a
        super Ninja developer.
      </p>

      <Button />

      <div className="icon-wrapper">
        <ImageOne />
        <ImageTwo />
      </div>
    </div>
  );
}

export default App;
