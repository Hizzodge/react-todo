import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";



function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async() => {
    const options = {
      method: 'GET',
      headers: {
        autorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    }
  }

  useEffect(() => {
    fetchData();
    // new Promise((resolve, reject) =>{
    //   setTimeout(() =>{
    //     console.log(JSON.parse(localStorage.getItem('savedTodoLists')))
    //     resolve({data: {
    //       todoList: JSON.parse(localStorage.getItem('savedTodoLists')) || []}});
    //   },2000)
    // }).then((result) => {
    //   setTodoList(result.data.todoList);
    //   setIsLoading(false);
    // });
  }, []);

 useEffect(() => {
  if(isLoading === false) {
    localStorage.setItem('savedTodoLists', JSON.stringify(todoList));
  }
 },[todoList, isLoading]);

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
