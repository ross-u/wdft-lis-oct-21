import logo from "./logo.svg";
import "./App.css";

import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";

import StudentCard from './components/StudentCard';
import StudentList from './components/StudentList';

import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Greeting firstName="Joana" />
      <hr />
      <Greeting firstName="Max" />
      <hr />
      <Greeting firstName="Telma" />
      <hr />
      <Greeting />

      <StudentList>

        <StudentCard name="Clara" week={7} info={ { city: 'LIS', course: 'WEB'} }  />
        <StudentCard name="David" week={8} info={{ city: 'BCN', course: 'DATA' }} />
        
      </StudentList>

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing />

      <ReactPlayer
        url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        playing  /*  or  playing={true}    */
        controls   /*  or  controls={true}    */
        volume="0.5"
      />
      
    </div>
  );
}

export default App;
