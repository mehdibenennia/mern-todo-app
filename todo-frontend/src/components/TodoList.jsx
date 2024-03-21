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
    }, 1000); // Fetch todos every second (adjust as needed)

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
<div className="overflow-x-auto w-full">
            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-50 rounded-tl rounded-bl">Completed</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-50">Task</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-50">Update</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-50 rounded-tr rounded-br">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo._id} className="border-b odd:bg-white even:bg-gray-50">
                            <td className="px-4 py-3">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={(e) => handleCheckboxChange(todo._id, e.target.checked)}
                                    className="form-checkbox h-5 w-5 text-gray-600"
                                />
                            </td>
                            <td className={`px-4 py-3 ${todo.completed ? 'line-through' : ''}`}>
                                {todo.title}
                            </td>
                            <td className="px-4 py-3">
                                <UpdateTodo todo={todo} onUpdate={handleUpdate} />
                            </td>
                            <td className="px-4 py-3">
                                <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(todo._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
};

export default TodoList;
