import React from "react";
import TaskBox from "./TaskBox";

function TaskList({ icon, title}) {
  return (
    <div className="task-list">
      <h3>
        <img src={icon} />
        {title}
      </h3>
      {/* <div className="task-box">
        <p>{task}</p>
        <div className="box">
          <div className="tags">
            {tags.map((tag) => (
              <button className={`btn ${tag.toLowerCase()}`}>
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="del-btn">
            <button className="delete">
              <img src="./delete.png" alt="delete" />
            </button>
          </div>
        </div>
      </div> */}
      < TaskBox task={"this is a simple task"} tags={["html","css","git"]}/>
      < TaskBox task={"this is a simple task"} tags={["html","css","git"]}/>
      < TaskBox task={"this is a simple task"} tags={["html","css","git"]}/>
      < TaskBox task={"this is a simple task"} tags={["html","css","git"]}/>
    </div>
  );
}

export default TaskList;
