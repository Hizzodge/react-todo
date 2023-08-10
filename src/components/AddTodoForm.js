import React, { useState } from "react";
import PropTypes from "prop-types";
import InputwithLabel from "./InputWithLabel";
import style from "./AddTodoForm.module.css";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = async (event) => {
    event.preventDefault();
    // console.log(todoTitle);
    // onAddTodo({ title: todoTitle, id: Date.now() });
    // setTodoTitle("");

    if (todoTitle.trim() !== "") {
      const baseId = "appIhM54nikxpnALz";
      const tableIdOrName = "default";
      const token =
        "patszEjqTpWFBgqa1.deeb03c2983da1716e5cc7db1500429cf50b68010ff3d8fca6ae32cc36403217";

      const url = `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`;

      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields: { Title: todoTitle } }),
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const newTodoData = await response.json();
        onAddTodo({
          id: newTodoData.id,
          title: todoTitle,
        });
        setTodoTitle("");
      } catch (error) {
        console.error("Error adding todo:", error.message);
      }
    }
  };

  return (
    <form id="todoForm" onSubmit={handleAddTodo} className={style.input}>
      <InputwithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title
      </InputwithLabel>
      <button type="submit">Add</button>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
