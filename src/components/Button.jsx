import React from 'react'

function Button({tagName}) {
  return (
    <button className={`btn ${tagName}`}>{tagName.toUpperCase()}</button>

  )
}

export default Button