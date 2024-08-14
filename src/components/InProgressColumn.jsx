import React from 'react';

const InProgressColumn = ({ tasks, onDelete, onComplete }) => {
  return (
    <div className="card">
      <h2 className="card-header">In Progress</h2>
      <div className="card-body">
        {tasks.map((task, index) => (
          <div key={index} className='task'>
            <h3>{task.summary}</h3>
            <p>Description: {task.description}</p>
            <p>Project: {task.project}</p>
            <p>Issue Type: {task.issue}</p>
            <p>Owner: {task.owner}</p>
            <button className="btn btn-danger" onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InProgressColumn;