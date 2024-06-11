import React from "react";
import "./App.css";
// import { tasks } from "./Data.js";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  
  return (
    <div className="container">
      <section className="warper">
        <h1>To Do App</h1>
        <TaskForm />
        <hr />

        <div className="task-container">
          <TaskList
            icon={"./target.png"}
            title={"To do"}
          />

          <TaskList
            icon={"./star.png"}
            title={"Doing"}
          />

          <TaskList
            icon={"./done.png"}
            title={"Done"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
