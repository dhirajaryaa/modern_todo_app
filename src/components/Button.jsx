import React from "react";

function Button({ tagName, selectTag, checkTags }) {
  const tagStyle = {
    html: { backgroundColor: "#ff7f50" },
    css: { backgroundColor: "#1e90ff" },
    javascript: { backgroundColor: "#f0c24d" },
    react: { backgroundColor: "#3cb371" },
    git: { backgroundColor: "#ba55d3" },
    default: { backgroundColor: "#232a3a" },
  };
  return (
    <button
      type="button"
      style={checkTags ? tagStyle[tagName] : tagStyle.default}
      className={`btn ${tagName}`}
      onClick={() => selectTag(tagName)}
    >
      {tagName.toUpperCase()}
    </button>
  );
}

export default Button;
