import React from "react";

const AddTodoForm = (props) => {


  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.elements.title.value;
    console.log(todoTitle);
    // const {onAddTodo} = props.onAddTodo;
    props.onAddTodo(todoTitle);
    document.getElementById('todoForm').reset(); 
  }

  return (
    <form id='todoForm' onSubmit={handleAddTodo} >
      <label htmlFor="todoTitle">Title </label>
      <input id="todoTitle" type="text" name='title'/>
      <button type="submit" >Add</button>
    </form>
  );
};

export default AddTodoForm;
