// import React, { useState, useEffect } from 'react';
// import './App.css';
// import ToDoColumn from './components/ToDoColumn';
// import InProgressColumn from './components/InProgressColumn';
// import CompletedColumn from './components/CompletedColumn';

// function Create() {

//     const [create, setCreate] = useState(false);

//     const toggleCreate = () => {
//         setCreate(!create);
//     };

//     if (create) {
//         document.body.classList.add('active-create')
//     } else {
//         document.body.classList.remove('active-create')
//     }

//     const [allTodos, setAllTodos] = useState([]);
//     const [newProject, setNewProject] = useState('');
//     const [newDescription, setNewDescription] = useState('');
//     const [newSummary, setNewSummary] = useState('');
//     const [newOwner, setNewOwner] = useState('');
//     const [newStatus, setNewStatus] = useState('');

//     const handleAddNewToDo = () => {
//         let newToDoObj = {
//             project: newProject,
//             description: newDescription,
//             summary: newSummary,
//             owner: newOwner,
//             status: newStatus,
//         };

//         let updatedTodoArr = [...allTodos];
//         updatedTodoArr.push(newToDoObj);
//         setAllTodos(updatedTodoArr);
//         localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));

//         // Clear input fields after adding a new ticket
//         setNewProject('');
//         setNewDescription('');
//         setNewSummary('');
//         setNewOwner('');
//         setNewStatus('');
//     };

//     useEffect(() => {
//         let savedTodos = JSON.parse(localStorage.getItem('todolist'));
//         if (savedTodos) {
//             setAllTodos(savedTodos);
//         }
//     }, []);

//     return (
//         <div className="App">
//             {create && (
//                 <div className="create">
//                     <div onClick={toggleCreate} className="overlay"></div>
//                     <div className="create-content">
//                         <h1>Create Ticket</h1>

//                         <div className="todo-wrapper">

//                             <div className="todo-input-item">
//                                 <label>Project* </label>
//                                 <select value={newProject} onChange={e => setNewProject(e.target.value)}>
//                                     <option value="Project">Jira Clone</option>
//                                 </select>
//                             </div>
//                             <div className="todo-input-item">
//                                 <label>Issue Type* </label>
//                                 <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
//                                     <option value="Issue Type">Bug</option>

//                                 </select>
//                             </div>

//                             <div className="todo-input-item">
//                                 <label>Summery </label>
//                                 <input type="text"
//                                     value={newSummary}
//                                     onChange={e => setNewSummary(e.target.value)}
//                                 />
//                             </div>

//                             <div className="todo-input-item">
//                                 <label>Description </label>
//                                 <input
//                                     type="text"
//                                     value={newDescription}
//                                     onChange={e => setNewDescription(e.target.value)}
//                                     placeholder="What's the description of your To Do?"
//                                 />
//                             </div>

//                             <div className="todo-input-item">
//                                 <label>Owner </label>
//                                 <input
//                                     type="text"
//                                     value={newOwner}
//                                     onChange={e => setNewOwner(e.target.value)}
//                                     placeholder="What's the description of your To Do?"
//                                 />
//                             </div>
//                             <div className="todo-input-item">
//                                 <label>Status </label>
//                                 <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
//                                     <option value="ToDo">ToDo</option>
//                                     <option value="In Progress">In Progress</option>
//                                     <option value="Completed">Completed</option>
//                                 </select>
//                             </div>
//                             <div className="todo-input-item">
//                                 <button
//                                     className="primary-btn"
//                                     type="button"
//                                     onClick={handleAddNewToDo}
//                                 >
//                                     Create
//                                 </button>
//                             </div>
//                         </div>
//                         <button className="close-create" onClick={toggleCreate}>
//                             CLOSE
//                         </button>
//                     </div>
//                 </div>
//             )}
//             {/* <div className="columns-wrapper">
//         <ToDoColumn tasks={allTodos.filter(task => task.status === 'ToDo')} />
//         <InProgressColumn tasks={allTodos.filter(task => task.status === 'In Progress')} />
//         <CompletedColumn tasks={allTodos.filter(task => task.status === 'Completed')} />
//       </div> */}
//         </div>
//     );
// }

// export default Create;

