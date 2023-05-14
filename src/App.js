import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MyPromise = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        // console.log(JSON.parse(localStorage.getItem('savedTodoList')) || [])
        resolve({data: {todoList: JSON.parse(localStorage.getItem('savedTodoList'))|| []}})
      },2000)
    });
    MyPromise.then((result) => {
      setTodoList([result]);
      setIsLoading(false);
    })

  },[]);

 useEffect(() => {
  if(isLoading === false) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }
 },[todoList]);

 const addTodo = (newTodo) => {
  setTodoList([...todoList, newTodo])
 }
 const removeTodo = (id)=> {
  const filteredTodoList = todoList.filter(todoItem => id.id !== todoItem.id)
  setTodoList(filteredTodoList);
}

  return (
    <>
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      {isLoading ? (<p>Loading...</p>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo}/>)
      }
    </>
  );
}

export default App;
