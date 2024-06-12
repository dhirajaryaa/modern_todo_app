import React from "react";
import Button from "./Button";

function TaskBox({ task, tags, handleRemoveTask, index }) {
  return (
    <article className="task-box">
      <p>{task}</p>
      <div className="box">
        <div className="tags">
          {tags.map((tag, index) => (
            <Button key={index} tagName={tag} checkTags />
          ))}
        </div>
        <div className="del-btn">
          <button className="delete" onClick={() => handleRemoveTask(index)}>
            <img src="./delete.png" alt="delete" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default TaskBox;
