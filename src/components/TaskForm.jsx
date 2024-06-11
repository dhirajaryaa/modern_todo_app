import React from "react";
import Button from "./Button";

function TaskForm() {
  const tagName = ["html", "css", "javascript", "git", "react"];
  
  return (
    <div className="header">
      <input type="text" className="input-box" placeholder="Enter your task" />
      <div className="filtered-menu">
        <div className="btn-list">
          {tagName.map((tag) => {
            return <Button key={tag} tagName={tag} />;
          })}
        </div>
        <div className="action-btn">
          <select name="work-status" id="work-status">
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button className="submit">+ Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
