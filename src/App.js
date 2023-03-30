import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";



function App() {
 const [newTodo, setNewTodo] = useState('')
  const todoList = [
    {
      id: 1,
      title: "Complete assignment",
    },
    {
      id: 2,
      title: "Complete assignment",
    },
    {
      id: 3,
      title: "Complete assignment",
    },
  ];

  return (
    <div>
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList list={todoList}/>
    </div>
  );
}

export default App;
