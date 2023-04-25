import React from "react";

const InputwithLabel = ({todoTitle, handleTitleChange, label}) => {

  return (
    <>
    <label htmlFor="todoTitle">{label}</label>
      <input id="todoTitle" type="text" name='title' value={todoTitle} onChange={handleTitleChange}/>
    </>
  )
}

export default InputwithLabel;