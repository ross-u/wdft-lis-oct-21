import { useState } from "react";
import "./App.css";
// import Counter from "./components/01-use-state/Counter";
// import Timer from "./components/02-use-state-loop/Timer";
// import TimerTwo from "./components/03-use-effect-mounting/TimerTwo";
// import TimerThree from "./components/04-use-effect-unmounting/TimerThree";
// import TimerFour from "./components/05-use-effect-updating/TimerFour";

import ApartmentList from "./components/06-use-effect-fetch-data/ApartmentList";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show/hide</button>

      {/* {show && <Counter />} */}
      {/* {show && <Timer />} */}
      {/* {show && <TimerTwo />} */}
      {/* {show && <TimerThree />} */}
      {/* {show && <TimerFour />} */}

      <ApartmentList />
    </div>
  );
}

export default App;
