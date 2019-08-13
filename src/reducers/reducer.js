import React from "react";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Learn about useReducer hook",
    completed: false,
    id: 3892987590
  }
];

export const Reducer = (state, action) => {
  switch (action.type) {
    case "NEW_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: new Date()
        }
      ];
    case "TOGGLE_COMPLETE":
      console.log("action.payload", action.payload);
      return state.map(todo => {
        if (todo.id === action.payload) {
            console.log({...todo, completed: !todo.completed})
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
