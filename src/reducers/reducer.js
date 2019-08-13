import React from "react";
import moment from 'moment';


export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
    time_completed: '',
    due: '2019-08-11',
    tags: ["javascript", "react"]
  },
  {
    item: "Learn about useReducer hook",
    completed: false,
    id: 3892987590,
    time_completed: '',
    due: '2019-08-15',
    tags: ["javascript", "react"]
  }
];

export const Reducer = (state, action) => {
  switch (action.type) {
    case "NEW_TODO":
      return [
        ...state,
        {
          item: action.payload.item,
          completed: false,
          id: moment().format(),
          time_completed: '',
          due: action.payload.dueDate,
          tags: action.payload.tags
        }
      ];
    case "TOGGLE_COMPLETE":
      console.log("action.payload", action.payload);
      return state.map(todo => {
        if (todo.id === action.payload) {
            console.log({...todo, completed: !todo.completed})
          return {
            ...todo,
            completed: !todo.completed,
            time_completed: moment().format('MMM DD, h:mm a')
          };
        } else {
          return todo;
        }
      });
    case "CLEAR_COMPLETE":
        return state.filter((todo)=>!todo.completed)
    default:
      return state;
  }
};
