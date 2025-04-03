import React from 'react';
import axios from 'axios';

function TaskItem({ task }) {
  const handleDelete = () => {
    axios.delete(`/tasks/${task.id}`)
      .then(() => {
        // Refresh the task list
        window.location.reload();
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };

  const handleComplete = () => {
    axios.patch(`/tasks/${task.id}/complete`)
      .then(() => {
        // Refresh the task list
        window.location.reload();
      })
      .catch(error => {
        console.error('Error completing task:', error);
      });
  };

  return (
    <li>
      {task.title} - {task.completed ? 'Completed' : 'Pending'}
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleComplete}>{task.completed ? 'Mark Incomplete' : 'Complete'}</button>
    </li>
  );
}

export default TaskItem;
