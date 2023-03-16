import React from "react";

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

const TodoList = () => {
  return (
    <ul>
      {todoList.map((obj) => (
        <li key={obj.id}>{obj.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
