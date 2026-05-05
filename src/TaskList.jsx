import React from "react";

export default function TaskList({ tasks, updateTask, deleteTask, getDateStatus }) {
  const toggleComplete =(index) => {
   
    const updatedTask = {...tasks[index], completed: !tasks[index].completed, status: getDateStatus(tasks[index].date, !tasks[index].completed)  };
    // updatedTask.status = getDateStatus(updatedTask.date, updatedTask.completed)
    updateTask(updatedTask, index)

  }
  return (
    <div className="card task-list-card">
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}
          className={`task-item `}>
            <div className="task-info"  >
              <span className={`task-title  ${task.completed ? "completed" : ""} `}>{task.text} </span>
              <div className="task-meta">
                <span  className={`badge priority-${task.priority} ` }>{task.priority}</span>
                <span className="badge category">{task.category}</span>
                <span className="badge due-date">📅 {task.date}</span>
                <span className={`badge  ${task.status}`}>{task.status}</span>
              </div>
            </div>

            <div className="task-actions">
              <button
                className={task.completed ? "btn-secondary":"btn-outline"}
                onClick={() => toggleComplete(index)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button className="btn-delete" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
