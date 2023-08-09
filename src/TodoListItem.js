import style from "./TodoListItem.module.css";

const TodoListItem = ({ obj, onRemoveTodo }) => {
  return (
    <li className={style.ListItem}>
      {obj.title}{" "}
      <button
        className={style.button}
        type="button"
        onClick={() => onRemoveTodo(obj)}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
