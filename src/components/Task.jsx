import React from "react";
import { useDispatch } from "react-redux";
const Task = ({ todo }) => {
  const dispatch = useDispatch();

  const onChangeCheckbox = () => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todo.id,
    });
  };

  const onDeleteTodo = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo.id,
    });
  };

  return (
    <li className="todo">
      <div className="pretty p-icon p-round">
        <input
          onChange={onChangeCheckbox}
          checked={!todo.status}
          type="checkbox"
          className="checkbox"
        />
        <div className="state">
          <i className="icon mdi mdi-check mdi-18px" />
          <label />
        </div>
      </div>
      <label
        className={`todo-text ${todo.status ? "" : "todo-checked-text"}`}
        contentEditable="true"
      >
        {todo.name}
      </label>
      <button onClick={onDeleteTodo} className="delete-button">
        ×
      </button>
    </li>
  );
};

export default Task;
