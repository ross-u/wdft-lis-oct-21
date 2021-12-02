import { useState } from "react";

// function longRunningCalculation(num) {/* do some long running operation */}

function Counter() {
  const [counter, setCounter] = useState(0);

  // If you need to run some expensive calculation to get the initial value
  // const [counter, setCounter] = useState(() => longRunningCalculation(123412341234));

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const increment = () => setCounter(counter + 1);

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {counter} times</p>

      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default Counter;
