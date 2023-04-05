import React from "react";
import TodoListItem from "./TodoListItem";



const TodoList = (props) => {
  return (
    <ul>
      {props.todoList.map((obj) => (
        <TodoListItem obj={obj} key={obj.id}/>
      ))}
    </ul>
  );
};

export default TodoList;
