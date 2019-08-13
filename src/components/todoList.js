import React, { useReducer } from 'react';
import { initialState, Reducer } from '../reducers/reducer'

// use reducer hook to get array of todos and display them with .map and TodoItem
function TodoList (){

    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                {state.map((todo)=><p>{todo.item}</p>)}
            </div>
        </div>
    )
}

export default TodoList;