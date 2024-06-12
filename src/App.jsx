import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleRemoveTask = (index)=>{
    console.log(index);
    const removeTask = tasks.filter((item,i)=> i !== index);

    setTasks(removeTask)
    console.log(tasks);
  }

useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem("task"));
  if (Array.isArray(storedTasks) || tasks.length) {
    setTasks(storedTasks);
  }
  console.log(tasks);
  handleRemoveTask
}, []);

useEffect(() => {
  if (Array.isArray(tasks) && tasks.length) {
    localStorage.setItem("task", JSON.stringify(tasks));
  }
}, [tasks]); 

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
