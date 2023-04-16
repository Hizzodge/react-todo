import React from "react";
import TodoListItem from "./TodoListItem";



const TodoList = ({todoList}) => {
  return (
    <ul>
      {todoList.map((obj) => (
        <TodoListItem obj={obj} key={obj.id}/>
      ))}
    </ul>
  );
};

export default TodoList;
