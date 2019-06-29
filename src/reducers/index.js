const initialState = {
  todos: []
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    default:
      return state;
  }
};

export default Reducer;
