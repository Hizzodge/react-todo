import React, { useState } from "react";

const AddTodoForm = (props) => {
  const [todoTitle, setTodoTitle] = useState('')

  const handleTitleChange = (event) => {
      const newTodoTitle = event.target.title.value;
      setTodoTitle(newTodoTitle);

  }
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);
    
    props.onAddTodo(todoTitle);
    document.getElementById('todoForm').reset(); 
  }

  return (
    <form id='todoForm' onSubmit={handleAddTodo} >
      <label htmlFor="todoTitle">Title </label>
      <input id="todoTitle" type="text" name='title' value={todoTitle} onChange={handleTitleChange}/>
      <button type="submit" >Add</button>
    </form>
  );
};

export default AddTodoForm;
