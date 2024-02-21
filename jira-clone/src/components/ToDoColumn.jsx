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

import { DragDropContext } from "react-beautiful-dnd"; 


const ToDoColumn = ({ tasks, onDelete }) => {
  return (
    <div className="card">
      <h2 className="card-header">To Do</h2>
      <div className="card-body">
        
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <h3>{task.summary}</h3>
            <p>{task.description}</p>
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

export default ToDoColumn;