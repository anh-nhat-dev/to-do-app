import React from "react";

const Foot = () => {
  return (
    <div id="todoMenu2" className="todo-menu-2">
      <label id="todosLeft" className="todos-left" />
      <div id="todoMenu2Buttons" className="todo-menu-2-buttons">
        <button id="showAllTodos" className="menu-2-button active">
          Tất cả
        </button>
        <button id="showUncompletedTodos" className="menu-2-button">
          Đang làm
        </button>
        <button id="showCompletedTodos" className="menu-2-button">
          Đã hoàn thành
        </button>
      </div>
      <button id="deleteCompletedButton" className="delete-completed-button">
        Xóa công việc đã hoàn thành
      </button>
    </div>
  );
};

export default Foot;
