// frontend/components/TodoApp.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import UpdateTodo from './components/UpdateTodo';


const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container mx-auto">
      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
