import logo from "./logo.svg";
import "./App.css";

const imageURL = "https://image.pitchbook.com/wNf89SR7pU2pN1cx2fzUDic6HsC1609755011994_200x200";

const heading = <h1> React is cool! 😀😀😀</h1>;

const student = {
  firstName: "chewie",
  lastName: "chewbacca",
};

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1); //  chewie
}

const myClassName = "first-name"

function App() {
  return (
    <div className="App">
      <h1>HELLO REACT</h1>
      {heading}
      <p>
        Welcome {student.firstName} {student.lastName}
      </p>

      <p>In uppercase {student.firstName.toUpperCase()}</p>

      <h4> {capitalizeFirstLetter("uros")} </h4>
      
      <h4 className="first-name"> { capitalizeFirstLetter(student.firstName) } </h4>
      <h4 className={myClassName}>
        {capitalizeFirstLetter(student.firstName)}
      </h4>

      <img src="https://image.pitchbook.com/wNf89SR7pU2pN1cx2fzUDic6HsC1609755011994_200x200" alt="logo"/>

      <img src={imageURL} alt="logo 1" />
      <br />
      <hr />

      <img src={logo} alt="logo 2" />


      {student}

      {/* Some comment goes here */}
     
      
    </div>
  );
}

export default App;
