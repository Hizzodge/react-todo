
const TodoListItem = ({obj, onRemoveTodo}) => {
   return (
    <li>{obj.title} <button type="button" onClick={() => onRemoveTodo(obj)}>Remove</button></li>
   )
}



export default TodoListItem;