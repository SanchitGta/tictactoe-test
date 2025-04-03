import React, { useState } from 'react';
import axios from 'axios';

function TaskForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add a new task to the backend API
    axios.post('/tasks', { title })
      .then(() => {
        // Clear the input field
        setTitle('');
      })
      .catch(error => {
        console.error('Error adding task:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter task title"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
