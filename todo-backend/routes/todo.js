const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

// Route to insert test data into the database
router.post('/test-data', async (req, res) => {
  try {
      // Extract data from the request body
      const { title, completed } = req.body;

      // Create a new TODO item with the provided data
      const newTodo = new Todo({
          title,
          completed
      });

      // Save the new TODO item to the database
      await newTodo.save();

      // Send a success response
      res.status(201).json(newTodo);
  } catch (error) {
      // If an error occurs, send an error response
      res.status(500).json({ error: error.message });
  }
});

// POST route to create a new TODO item
router.post('/todo', async (req, res) => {
  try {
      // Create the TODO item using data from the request body
      const todo = new Todo(req.body);
      // Save the TODO item to the database
      await todo.save();
      // Send a success response with the created TODO item
      res.status(201).json(todo);
  } catch (error) {
      // If an error occurs, send an error response
      res.status(400).json({ error: error.message });
  }
});

// Read all TODO items
router.get('/', async (req, res) => {
  const todo = await Todo.find();
  res.json(todo);
});

// Update a TODO item
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(todo);
});

// Delete a TODO item
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Todo deleted' });
});

module.exports = router;
