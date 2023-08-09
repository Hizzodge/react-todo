import React, { useState } from "react";
import InputwithLabel from "./InputWithLabel";
import style from "./AddTodoForm.module.css";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    // console.log(todoTitle);
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };

  return (
    <form id="todoForm" onSubmit={handleAddTodo} className={style.input}>
      <InputwithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        className={style.test}
      >
        Title
      </InputwithLabel>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
