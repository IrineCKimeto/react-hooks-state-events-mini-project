function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <div key={task.text} className="task">
          <div className="label">{task.category}</div>
          <div className="text">{task.text}</div>
          <button className="delete" onClick={() => onDeleteTask(task.text)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
