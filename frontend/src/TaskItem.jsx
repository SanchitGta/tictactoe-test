import React from 'react';

function TaskItem({ task, editTask, deleteTask, markComplete }) {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    markComplete(task.id);
  };

  const handleEdit = () => {
    const newTitle = prompt('Enter new title', task.title);
    if (newTitle) {
      editTask(task.id, newTitle);
    }
  };

  return (
    <li>
      {task.title} - {task.completed ? 'Completed' : 'Pending'}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleComplete}>{task.completed ? 'Mark Incomplete' : 'Complete'}</button>
    </li>
  );
}

export default TaskItem;
