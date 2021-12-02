import { useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3> {count} </h3>
    </div>
  );
}

export default Timer;
