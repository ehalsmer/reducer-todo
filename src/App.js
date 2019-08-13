import React from 'react';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      {/* <TodoForm /> */}
    </div>
  );
}

export default App;
