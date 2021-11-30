import { useState } from "react"; // Hook

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count === 0) {
      return; // return stops the execution, the next line of code doesn't run
    }
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);

    // Whenever your new state depends on the current state
    // use the following callback syntax to update it.
    // setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>

      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>

      {/* <button onClick={() => setCount(count - 1)}> - </button> */}
      {/* <button onClick={() => setCount(count + 1)}> + </button> */}
    </div>
  );
}

export default Counter;
