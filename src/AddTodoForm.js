import React, { useState } from "react";
import InputwithLabel from "./InputWithLabel";

const AddTodoForm = ({onAddTodo}) => {
  const [todoTitle, setTodoTitle] = useState('')

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);  
    onAddTodo({title: todoTitle, id: Date.now()});
    setTodoTitle('');
  }

  return (
    <form id='todoForm' onSubmit={handleAddTodo} >
      <InputwithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} label='Title '/>
      {/* <label htmlFor="todoTitle">Title </label>
      <input id="todoTitle" type="text" name='title' value={todoTitle} onChange={handleTitleChange}/> */}
      <button type="submit" >Add</button>
    </form>
  );
};

export default AddTodoForm;
