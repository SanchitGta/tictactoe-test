import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, editTask, deleteTask, markComplete }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            markComplete={markComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
