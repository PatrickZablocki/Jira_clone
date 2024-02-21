import React from 'react';

const InProgressColumn = ({ tasks, onDelete, onComplete }) => {
  return (
    <div>
      <h2>In Progress</h2>
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task.summary}</h3>
          <p>{task.description}</p>
          <p>Project: {task.project}</p>
          <p>Issue Type: {task.issueType}</p>
          <p>Owner: {task.owner}</p>
          <button onClick={() => onDelete(index)}>Delete</button>
          
        </div>
      ))}
    </div>
  );
};

export default InProgressColumn;