import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const handleDeleteTask = (text) => {
    setTasks(tasks.filter(task => task.text !== text));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const tasksToDisplay = category === "All" ? tasks : tasks.filter(task => task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} currentCategory={category} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

