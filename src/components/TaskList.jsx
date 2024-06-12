import React from "react";
import TaskBox from "./TaskBox";

function TaskList({ icon, title ,tasks,status,handleRemoveTask}) {

 
  return (
    <div className="task-list">
      <h3>
        <img src={icon} />
        {title}
      </h3>
      {
        tasks && tasks.map((task,index)=> task.status === status &&  < TaskBox key={index} task={task.task} tags={task.tags} handleRemoveTask={handleRemoveTask} index={index}/>)
      }
     
    </div>
  );
}

export default TaskList;
