"use client";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";

export default function TodoForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex">
      <input
        className="form-control w-25"
        defaultValue={todo.title}
        onChange={(e) =>
          dispatch(
            setTodo({
              ...todo,
              title: e.target.value,
            })
          )
        }
      />
      <button
        id="wd-update-toto-click"
        className="btn btn-warning mx-2"
        onClick={() => dispatch(updateTodo(todo))}
      >
        Update
      </button>
      <button
        id="wd-add-toto-click"
        className="btn btn-success"
        onClick={() => dispatch(addTodo(todo))}
      >
        Add
      </button>
    </li>
  );
}
