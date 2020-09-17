import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Foot = () => {
  const distpatch = useDispatch();

  const { filter, totalTodo } = useSelector((state) => ({
    filter: state.filter,
    totalTodo: state.todos.filter((todo) => todo.status).length,
  }));

  const onFilter = (option) => {
    distpatch({
      type: "FILTER_TODO",
      payload: option,
    });
  };

  const deleteAllTodos = () => {
    distpatch({
      type: "DELETE_ALL_TODOS",
    });
  };

  return (
    <div id="todoMenu2" className="todo-menu-2">
      <label id="todosLeft" class="todos-left">
        Việc cần làm: {totalTodo}
      </label>
      <div id="todoMenu2Buttons" className="todo-menu-2-buttons">
        <button
          onClick={() => onFilter("all")}
          id="showAllTodos"
          className={`menu-2-button ${filter === "all" ? "active" : ""}`}
        >
          Tất cả
        </button>
        <button
          onClick={() => onFilter("active")}
          id="showUncompletedTodos"
          className={`menu-2-button ${filter === "active" ? "active" : ""}`}
        >
          Đang làm
        </button>
        <button
          onClick={() => onFilter("disable")}
          id="showCompletedTodos"
          className={`menu-2-button ${filter === "disable" ? "active" : ""}`}
        >
          Đã hoàn thành
        </button>
      </div>
      <button
        onClick={deleteAllTodos}
        id="deleteCompletedButton"
        className="delete-completed-button"
      >
        Xóa công việc đã hoàn thành
      </button>
    </div>
  );
};

export default Foot;
