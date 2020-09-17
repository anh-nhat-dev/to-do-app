import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const Main = () => {
  const { todos, filter } = useSelector((state) => ({
    todos: state.todos,
    filter: state.filter,
  }));

  console.log("Main -> filter", filter);

  return (
    <ul id="todos" className="todos" aria-label="List of to do tasks">
      {todos.map((todo) => {
        if (filter === "all") {
          return <Task todo={todo} />;
        }

        if (filter === "active" && todo.status) {
          return <Task todo={todo} />;
        }

        if (filter === "disable" && !todo.status) {
          return <Task todo={todo} />;
        }

        return null;
      })}
    </ul>
  );
};

export default Main;
