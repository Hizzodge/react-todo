import React from "react";

const InputwithLabel = ({todoTitle, handleTitleChange, children}) => {

  return (
    <>
    <label htmlFor="todoTitle">{children}</label>
      <input id="todoTitle" type="text" name='title' value={todoTitle} onChange={handleTitleChange} autoFocus/>
    </>
  )
}

export default InputwithLabel;