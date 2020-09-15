import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  todos: [],
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      const todos = state.todos;
      todos.push(action.payload);
      return { ...state, todos };
    default:
      return state;
  }
};

const store = createStore(reducers, composeWithDevTools());

export default store;
