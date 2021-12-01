// src/components/Summary.js

import React from "react";

function Summary({ tasksCompleted }) {
  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{ tasksCompleted }</p>
    </div>
  );
}

export default Summary;
