import React, { useReducer, useState } from "react";
import { initialState, Reducer } from "../reducers/reducer";
import moment from 'moment';

// use reducer hook to get array of todos and display them with .map and TodoItem
function TodoList() {
  const now = moment();

  const [todo, setTodo] = useState({
    item: "",
    due: "",
    tags: []
  })

  const [state, dispatch] = useReducer(Reducer, initialState);

  const handleChanges = e => {
    e.preventDefault();
    setTodo({...todo, [e.target.name]: e.target.value})
  };
  const handleTagChanges = e => {
    e.preventDefault();
    setTodo({...todo, tags: e.target.value.split(/[ ,]+/)})
  }

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
              id={`${moment(todo.due).isBefore(now) ? "overdue" : ""}`}
              onClick={e => {
                e.preventDefault();
                // console.log('todo.id', todo.id)
                toggleComplete(todo.id);
              }}
            >
              {todo.item}, Complete by: {todo.due}
            </p>
            {todo.completed && <p>Done: {todo.time_completed}</p>}
            {todo.tags.map((tag)=><p>{tag}</p>)}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          name="item"
          value={todo.item}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="tags"
          value={todo.tags}
          onChange={handleTagChanges}
        />
        <input
          type="date"
          name="due"
          value={todo.due}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: "NEW_TODO", payload: todo});
            setTodo({
                item: "",
                due: "",
                tags: []
            })
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
