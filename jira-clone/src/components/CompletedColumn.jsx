// const CompletedColumn = ({ tasks, onDelete }) => {
//     return (
//       <div>
//         <h2>Completed</h2>
//         {tasks.map((task, index) => (
//           <div key={index}>
//             <h3>{task.summary}</h3>
//             <p>{task.description}</p>
//             <p>Project: {task.project}</p>
//             <p>Issue Type: {task.issueType}</p>
//             <p>Owner: {task.owner}</p>
//             <button onClick={() => onDelete(index)}>Delete</button>
//           </div>
//         ))}
  
        
//       </div>
//     );
//   };
  
//   export default CompletedColumn;

import React from 'react';


const CompletedColumn = ({ tasks }) => {
    
  return (
    <div>
      <h2>Completed</h2>
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task.summary}</h3>
          <p>{task.description}</p>
          <p>Project: {task.project}</p>
          <p>Issue Type: {task.issueType}</p>
          <p>Owner: {task.owner}</p>
          
        </div>
      ))}

      
    </div>
  );
};

export default CompletedColumn;