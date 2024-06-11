import React from "react";
import Button from "./Button";

function TaskBox({ task, tags }) {
  return (
    <div className="task-box">
      <p>{task}</p>
      <div className="box">
        <div className="tags">
          {tags.map((tag) => (
            <Button tagName={tag} />
          ))}
        </div>
        <div className="del-btn">
          <button className="delete">
            <img src="./delete.png" alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskBox;
