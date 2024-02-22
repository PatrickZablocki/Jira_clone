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


import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const CompletedColumn = ({ tasks, onDelete }) => {

  return (
    <div className="card">
      <h2 className="card-header">Done</h2>
      <div className="card-body">
        
        {tasks.map((task, index) => (
          <div key={index} className='task'>
            <h3>{task.summary}</h3>
            <p>Description: {task.description}</p>
            <p>Project: {task.project}</p>
            <p>Issue Type: {task.issueType}</p>
            <p>Owner: {task.owner}</p>
            <button className="btn btn-danger" onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))}
      </div>


    </div>
  );
};

export default CompletedColumn;