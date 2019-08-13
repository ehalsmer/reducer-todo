import React from 'react';


export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
      {
        item: 'Learn about useReducer hook',
        completed: false,
        id: 3892987590
      }
]


export const Reducer = (state, action) => {
    switch (action.type){
        default:
            return state;
    }
}