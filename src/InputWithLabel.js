import React, { useEffect, useRef } from "react";

const InputwithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle]);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        ref={inputRef}
        id="todoTitle"
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
};

export default InputwithLabel;
