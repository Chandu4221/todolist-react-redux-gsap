import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../actions";
import uuid from "uuid/v4";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = e => {
    e.preventDefault();
    if (input === "") return;
    dispatch(AddTodo({ id: uuid(), todoText: input, isCompleted: false }));
    setInput("");
  };

  return (
    <div className="row mt-2">
      <div className="col-md-12">
        <form className="form-group" onSubmit={handleOnSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
