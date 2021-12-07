// We are deconstructing the props object directly in the parentheses of the function
function TaskCard({ task }) {
  return (
    <div className="TaskCard card">
      <h3>{task.title}</h3>
      <h4>Description:</h4>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
