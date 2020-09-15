import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uidv4 } from "uuid";

const Head = () => {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = React.useState();

  const onChangeInput = (e) => {
    const value = e.target.value;
    setTodoName(value);
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      dispatch({
        type: "ADD_TO_DO",
        payload: {
          id: uidv4(),
          name: todoName,
          status: true,
        },
      });
      setTodoName("");
    }
  };

  return (
    <div id="todoMenu1" className="todo-menu-1">
      <button id="toggleAll" className="toggle-all">
        <span className="rotate">❯</span>
      </button>
      <input
        onKeyUp={onKeyUp}
        value={todoName}
        onChange={onChangeInput}
        id="addTodoTextInput"
        className="add-todo-text-input"
        type="text"
        placeholder="Bạn cần làm gì?"
        autofocus
      />
    </div>
  );
};

export default Head;
