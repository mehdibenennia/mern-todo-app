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
<form onSubmit={handleSubmit} className="mx-auto flex items-center space-x-2">
    <input
        type="text"
        placeholder="Add new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2 my-2 focus:ring-indigo-500 focus:border-indigo-500"
    />
    <button 
        type="submit" 
        className="w-fit bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 font-bold rounded-lg transition duration-300 ease-in-out">
        Add
    </button>
</form>


  );
};

export default AddTodo;
