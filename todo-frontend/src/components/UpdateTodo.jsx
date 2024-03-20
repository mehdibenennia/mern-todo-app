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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Update todo"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        className="w-full border-gray-300 rounded-lg p-2 my-2"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Update</button>
    </form>
  );
};

export default UpdateTodo;
