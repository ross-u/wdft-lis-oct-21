import { useState, useEffect } from "react";

function TimerTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []); // <-- [] means, run this code only once
  //    during the initial render / mounting

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3> {count} </h3>
    </div>
  );
}

export default TimerTwo;
