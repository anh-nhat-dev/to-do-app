import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  todos: [],
  filter: "all",
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      const todos = state.todos;
      todos.push(action.payload);
      return { ...state, todos };
    case "TOGGLE_TODO":
      const nTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.status = !todo.status;
        }
        return todo;
      });
      return { ...state, todos: nTodos };
    case "DELETE_TODO":
      const dTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: dTodos };
    case "FILTER_TODO":
      return { ...state, filter: action.payload };
    case "DELETE_ALL_TODOS":
      return { ...state, todos: [] };
    default:
      return state;
  }
};

const store = createStore(reducers, composeWithDevTools());

export default store;
