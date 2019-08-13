import React, { useReducer, useState } from "react";
import { initialState, Reducer } from "../reducers/reducer";

// use reducer hook to get array of todos and display them with .map and TodoItem
function TodoList() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [newTodo, setNewTodo] = useState();
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {state.map(todo => (
          <p>{todo.item}</p>
        ))}
      </div>
      <div>
        <input
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: "NEW_TODO", payload: newTodo });
            setNewTodo('');
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default TodoList;
