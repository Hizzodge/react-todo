import React from "react";
import TodoListItem from "./TodoListItem";



const TodoList = ({todoList, onRemoveTodo}) => {
  return (
    <ul>
      {todoList.map((obj) => (
        <TodoListItem obj={obj} key={obj.id} onRemoveTodo={onRemoveTodo}/>
      ))}
    </ul>
  );
};

export default TodoList;
