import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";



function App() {
 const [todoList, setTodoList] = useState([]);
 useEffect(() => {
    
  localStorage.setItem('savedTodoList', JSON.stringify(todoList));
 },[todoList]);

 const addTodo = (newTodo) => {
  setTodoList([...todoList, newTodo])
 }

  return (
    <div>
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
