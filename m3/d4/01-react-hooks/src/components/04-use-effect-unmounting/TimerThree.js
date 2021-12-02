import { useState, useEffect } from "react";

function TimerThree() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("During mounting - initial render");

    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Return a clean up function - runs during the unmounting
    return () => {
      console.log("During unmounting - before the component is destroyed");
      clearInterval(id);
    };
  }, []);

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3> {count} </h3>
    </div>
  );
}

export default TimerThree;
