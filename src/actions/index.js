export const AddTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const ToggleTodo = todoId => {
  return {
    type: "TOGGLE_TODO",
    payload: todoId
  };
};

export const DeleteTodo = todoId => {
  return {
    type: "DELETE_TODO",
    payload: todoId
  };
};
