import React, { useReducer, useState } from "react";
import { initialState, Reducer } from "../reducers/reducer";

// use reducer hook to get array of todos and display them with .map and TodoItem
function TodoList() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [newTodo, setNewTodo] = useState();
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  const toggleComplete = id => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };
  const clearComplete = () => {
    dispatch({ type: "CLEAR_COMPLETE" });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {state.map(todo => (
          <div>
            <p
              className={`todo${todo.completed ? " complete" : ""}`}
              onClick={e => {
                e.preventDefault();
                // console.log('todo.id', todo.id)
                toggleComplete(todo.id);
              }}
            >
              {todo.item}
            </p>
            {todo.completed && <p>Done: {todo.time_completed}</p>}
          </div>
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
            setNewTodo("");
          }}
        >
          Add Todo
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            clearComplete();
          }}
        >
          Clear Complete
        </button>
      </div>
    </div>
  );
}

export default TodoList;
