import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";



function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const todos = data.records.map(record => ({
        id: record.id,
        title: record.fields.title
      }));
      setTodoList(todos);
    } 
    catch (error) {
      // Handle the error
      console.error(error.message);
    }
    finally {
      setIsLoading(false);
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
