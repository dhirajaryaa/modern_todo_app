import React from "react";

function Button({ tagName, selectTag, checkTags }) {
  const tagStyle = {
    study: { backgroundColor: "#ff7f50" },
    home: { backgroundColor: "#1e90ff" },
    health: { backgroundColor: "#f0c24d" },
    financial: { backgroundColor: "#3cb371" },
    hobbies: { backgroundColor: "#ba55d3" },
    default: { backgroundColor: "#232a3a" },
  };
  return (
    <button
      type="button"
      style={checkTags ? tagStyle[tagName.toLowerCase()] : tagStyle.default}
      className={`btn ${tagName.toLowerCase()}`}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
}

export default Button;
