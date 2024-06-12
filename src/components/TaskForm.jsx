import { useState } from "react";
// import React from "react";
import Button from "./Button";

function TaskForm({ setTasks }) {
  const tagName = ["Home", "Study", "Health", "Financial", "Hobbies"];

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const checkTags = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filteredTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filteredTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };
  function handleChange(e) {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(taskData.task !== "" && taskData.tags != []){
      setTasks((prev) => {
        return [...prev, taskData];
      });
    }
    


    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  }

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <input
          value={taskData.task}
          type="text"
          className="input-box"
          name="task"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="filtered-menu">
          <div className="btn-list">
            {tagName.map((tag) => {
              return (
                <Button
                  key={tag}
                  tagName={tag}
                  selectTag={selectTag}
                  checkTags={checkTags(tag)}
                />
              );
            })}
          </div>
          <div className="action-btn">
            <select
              value={taskData.tags}
              name="status"
              id="work-status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="submit" type="submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
