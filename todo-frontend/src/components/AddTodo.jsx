// frontend/components/AddTodo.js
import React, { useState } from 'react';
import { createTodo,getAllTodos } from '../services/todoService';

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const newTodo = await createTodo({ title, completed: false });
      onAdd(newTodo);
      setTitle('');
      getAllTodos(); // Call the getAllTodos function here
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Add new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border-gray-300 rounded-lg p-2 my-2"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg" >Add Todo</button>
    </form>
  );
};

export default AddTodo;
