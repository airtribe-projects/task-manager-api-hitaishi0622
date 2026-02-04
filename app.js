const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load tasks from file
const taskData = require('./task.json');
let tasks = taskData.tasks;
let nextId = Math.max(...tasks.map(t => t.id)) + 1;

app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title, description, completed } = req.body;
  // Input validation
  if (!title || !description) {
    return res.status(400).send('Title and description are required');
  }
  const newTask = {
    id: nextId++,
    title,
    description,
    completed: completed || false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return res.status(404).send('Task not found');
  }
  res.status(200).json(task);
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  
  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return res.status(404).send('Task not found');
  }
  
  // Validate that completed is a boolean if provided
  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).send('Completed must be a boolean');
  }
  
  if (title) task.title = title;
  if (description) task.description = description;
  if (completed !== undefined) task.completed = completed;
  
  res.status(200).json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).send('Task not found');
  }
  tasks.splice(index, 1);
  res.status(200).json({ message: 'Task deleted' });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

module.exports = app;