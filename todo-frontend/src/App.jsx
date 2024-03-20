// App.jsx

import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
      <AddTodo onAdd={handleAddTodo} /> {/* Pass handleAddTodo as a prop */}
      <TodoList /> {/* Using TodoList component */}
    </div>
  );
}

export default App;
