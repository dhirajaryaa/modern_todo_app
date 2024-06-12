import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

const handleRemoveTask = (index) => {
  const newTasks = tasks.filter((item, i) => i !== index);
  setTasks(newTasks);
};

useEffect(() => {
  // Get tasks from localStorage when the component mounts
  const storedTasks = JSON.parse(localStorage.getItem("task"));
  if (Array.isArray(storedTasks) && storedTasks.length) {
    setTasks(storedTasks);
  }
}, []); // Empty dependency array means this effect runs once on mount

useEffect(() => {
  // Store tasks in localStorage whenever they change
  if (Array.isArray(tasks) && tasks.length) {
    localStorage.setItem("task", JSON.stringify(tasks));
  } else {
    // If there are no tasks left, clear the 'task' item from localStorage
    localStorage.removeItem("task");
  }
}, [tasks]); // This effect runs whenever 'tasks' changes



  return (
    <div className="container">
      <section className="warper">
        <h1>To Do App</h1>
        <TaskForm setTasks={setTasks} />
        <hr />
        {/* ========= task container ========= */}
        <div className="task-container">
          <TaskList
            icon={"./target.png"}
            title={"To do"}
            tasks={tasks}
            status="todo"
            handleRemoveTask={handleRemoveTask}
          />

          <TaskList
            icon={"./star.png"}
            title={"Doing"}
            tasks={tasks}
            status="doing"
            handleRemoveTask={handleRemoveTask}
          />

          <TaskList
            icon={"./done.png"}
            title={"Done"}
            tasks={tasks}
            status="done"
            handleRemoveTask={handleRemoveTask}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
