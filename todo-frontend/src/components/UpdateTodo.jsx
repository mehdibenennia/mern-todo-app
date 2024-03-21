// frontend/components/UpdateTodo.js
import React, { useState } from 'react';
import { updateTodo } from '../services/todoService';

const UpdateTodo = ({ todo, onUpdate }) => {
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedTodo = await updateTodo(todo._id, { title: updatedTitle });
      onUpdate(updatedTodo);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
<form onSubmit={handleSubmit} className="mx-auto flex items-center space-x-2">
    <input
        type="text"
        placeholder="Update todo"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2 my-2 focus:ring-indigo-500 focus:border-indigo-500"
    />
    <button 
        type="submit" 
        className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-lg transition duration-300 ease-in-out">
        Update
    </button>
</form>

  );
};

export default UpdateTodo;
