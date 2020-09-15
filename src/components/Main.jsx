import React from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const { todos } = useSelector((state) => ({
    todos: state.todos,
  }));

  return (
    <ul id="todos" className="todos" aria-label="List of to do tasks">
      {todos.map((todo) => {
        return (
          <li className="todo">
            <div className="pretty p-icon p-round">
              <input type="checkbox" className="checkbox" />
              <div className="state">
                <i className="icon mdi mdi-check mdi-18px" />
                <label />
              </div>
            </div>
            <label className="todo-text" contentEditable="true">
              {todo.name}
            </label>
            <button className="delete-button">×</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Main;
