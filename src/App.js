import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

// function useSemiPersistentState() {
//   const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);

//  useEffect(() => {
    
//   localStorage.setItem('savedTodoList', JSON.stringify(todoList));
//  },[todoList]);

//  return ([todoList, setTodoList]);
// }


function App() {
  // const [todoList, setTodoList] = useSemiPersistentState('')
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const MyPromise = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve({data: {todoList: JSON.parse(localStorage.getItem('savedTodoList')) || []}})
      },2000)
    });
    MyPromise.then((result) => {
      console.log(result)
      setTodoList([...todoList,result])
    })

  },[])

 useEffect(() => {
  localStorage.setItem('savedTodoList', JSON.stringify(todoList));
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
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
}

export default App;
