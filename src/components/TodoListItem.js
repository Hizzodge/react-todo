import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

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

TodoListItem.propTypes = {
  obj: PropTypes.object,
  onRemoveTodo: PropTypes.any,
};
export default TodoListItem;
