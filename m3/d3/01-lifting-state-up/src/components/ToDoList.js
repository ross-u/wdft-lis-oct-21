// src/components/ToDoList.js

import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false,
  },
];



function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);


  const toggleTask = (taskId) => {
  // Iterate over the task list, and update the task property `isDone` by its id

  // Create a copy of tasks array
  const tasksCopy = [...tasks];

  // Update the specific task object
  tasksCopy.forEach((oneTask) => {
    // find the task by id and toggle the `isDone` property
    if (oneTask._id === taskId) {
      // oneTask.isDone = oneTask.isDone ? false : true;
      oneTask.isDone = !oneTask.isDone;

      if (oneTask.isDone) {
        setTasksCompleted(tasksCompleted + 1)
      }
      else if (!oneTask.isDone) {
        setTasksCompleted(tasksCompleted - 1)
      }
    }
  });

  // Set the new state
  setTasks(tasksCopy);
  };
  
  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />

      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
