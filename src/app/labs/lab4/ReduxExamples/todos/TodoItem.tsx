import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

interface TodoItemProps {
  todo: { id: string; title: string };
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="list-group-item d-flex">
      <span className="w-25">{todo.title}</span>
      <button
        id="wd-update-todo-click"
        className="btn btn-primary mx-2"
        onClick={() => dispatch(setTodo(todo))}
      >
        Edit
      </button>
      <button
        id="wd-delete-todo-click"
        className="btn btn-danger"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
    </li>
  );
}
