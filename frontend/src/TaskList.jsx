import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend API
    axios.get('/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
