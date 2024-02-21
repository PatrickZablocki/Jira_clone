// const ToDoColumn = ({ tasks, onDelete, onComplete }) => {
//     return (
//       <div>
        
//         {tasks.map((task, index) => (
            
//           <div key={index}>
//             <h2>{task.status}</h2>
//             <h3>{task.summary}</h3>
//             <p>{task.description}</p>
//             <p>Project: {task.project}</p>
//             <p>Issue Type: {task.issueType}</p>
//             <p>Owner: {task.owner}</p>
//             <button onClick={() => onDelete(index)}>Delete</button>
//             <button onClick={() => onComplete(index)}>Complete</button>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default ToDoColumn;

const ToDoColumn = ({ tasks, onDelete }) => {
    return (
      <div>
        <h2>To Do</h2>
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
  
  export default ToDoColumn;