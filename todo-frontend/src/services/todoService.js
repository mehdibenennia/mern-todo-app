// frontend/services/todoService.js

// Define a function to make a POST request to create a new todo item
export const createTodo = async (todoData) => {
    try {
      const response = await fetch('http://localhost:5000/api/todo/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error;
    }
  };
  
  // Define a function to get all todo items
  export const getAllTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/todo');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  };
  
  // Define a function to update a todo item
  export const updateTodo = async (id, updatedTodoData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/todo/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodoData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  };
  
  // Define a function to delete a todo item
  export const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/todo/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  };
  