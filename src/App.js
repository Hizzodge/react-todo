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

function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {todoList.map((obj) => (
          <li key={obj.id}>{obj.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
