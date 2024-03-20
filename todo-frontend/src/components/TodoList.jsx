// frontend/components/TodoList.js
import React, { useState, useEffect } from 'react';
import { getAllTodos, deleteTodo, updateTodo } from '../services/todoService';
import UpdateTodo from './UpdateTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
    const fetchTodosInterval = setInterval(() => {
      fetchTodos();
    }, 1000); // Fetch todos every 5 seconds (adjust as needed)

    return () => clearInterval(fetchTodosInterval); // Cleanup interval on component unmount
  }, []);

  const fetchTodos = async () => {
    try {
      const todosData = await getAllTodos();
      setTodos(todosData);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleCheckboxChange = async (id, completed) => {
    try {
      const updatedTodo = await updateTodo(id, { completed });
      setTodos(todos.map(todo =>
        todo._id === id ? updatedTodo : todo
      ));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleUpdate = (updatedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo._id === updatedTodo._id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold my-4">Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id} className="flex items-center justify-between bg-gray-100 rounded-lg p-4 my-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => handleCheckboxChange(todo._id, e.target.checked)}
                className="mr-2"
              />
              <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
            </div>
            <div>
              <UpdateTodo todo={todo} onUpdate={handleUpdate} />
              <button className="text-red-500" onClick={() => handleDelete(todo._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
