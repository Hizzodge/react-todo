import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      console.error(error.message);
    }
    finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    fetchData();
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
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={
        <>
          <h1>Todo list</h1>
          <AddTodoForm onAddTodo={addTodo} />
          {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
       </>
     } />
     <Route path="/new" element={<h1>New Todo List</h1>}>

     </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
