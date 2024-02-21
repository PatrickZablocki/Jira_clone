import { useState, useEffect } from 'react';
import './Home.css';
import ToDoColumn from './ToDoColumn';
import InProgressColumn from './InProgressColumn';
import CompletedColumn from '../components/CompletedColumn';
import Body from "./Body";
import { Provider } from "react-redux";
import store from "../store/index";
import themeContext from "../context/ThemeContext";
import Create from './Create';
// import { Link, Route } from 'react-router-dom'



function Home() 
{
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    const [allTodos, setAllTodos] = useState([]);
    const [newProject, setNewProject] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newSummary, setNewSummary] = useState('');
    const [newIssue, setNewIssue] = useState('');
    const [newOwner, setNewOwner] = useState('');
    const [completedTodos, setCompletedTodos] = useState([]);
    const [newStatus, setNewStatus] = useState('');
    const [isCompletedScreen, setIsCompletedScreen] = useState(false);

    const handleAddNewToDo = () => {
        let newToDoObj = {
            issue: newIssue,
            project: newProject,
            description: newDescription,
            summary: newSummary,
            owner: newOwner,
            status: newStatus,
            comments: [],
        };

        let updatedTodoArr = [...allTodos];
        updatedTodoArr.push(newToDoObj);
        setAllTodos(updatedTodoArr);
        localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
        setNewIssue('');
        setNewProject('');
        setNewDescription('');
        setNewSummary('');
        setNewOwner('');
    };

    useEffect(() => {
        let savedTodos = JSON.parse(localStorage.getItem('todolist'));
        let savedCompletedToDos = JSON.parse(
            localStorage.getItem('completedTodos')
        );
        if (savedTodos) {
            setAllTodos(savedTodos);
        }

        if (savedCompletedToDos) {
            setCompletedTodos(savedCompletedToDos);
        }
    }, []);


    const handleInProgress = index => {
        let updatedTodos = [...allTodos];
        updatedTodos[index].status = 'In Progress';
        setAllTodos(updatedTodos);
        localStorage.setItem('todolist', JSON.stringify(updatedTodos));
    };

    const handleToDoDelete = index => {
        let reducedTodos = [...allTodos];
        reducedTodos.splice(index, 1);
        // console.log (index);

        // console.log (reducedTodos);
        localStorage.setItem('todolist', JSON.stringify(reducedTodos));
        setAllTodos(reducedTodos);
    };

    const handleCompletedTodoDelete = index => {
        let reducedCompletedTodos = [...completedTodos];
        reducedCompletedTodos.splice(index);
        // console.log (reducedCompletedTodos);
        localStorage.setItem(
            'completedTodos',
            JSON.stringify(reducedCompletedTodos)
        );
        setCompletedTodos(reducedCompletedTodos);
    };

    const handleComplete = index => {
        const date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var hh = date.getHours();
        var minutes = date.getMinutes();
        var ss = date.getSeconds();
        var finalDate =
            dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

        let filteredTodo = {
            ...allTodos[index],
            completedOn: finalDate,
        };

        // console.log (filteredTodo);

        let updatedCompletedList = [...completedTodos, filteredTodo];
        console.log(updatedCompletedList);
        setCompletedTodos(updatedCompletedList);
        localStorage.setItem(
            'completedTodos',
            JSON.stringify(updatedCompletedList)
        );
        // console.log (index);

        handleToDoDelete(index);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [theme, setTheme] = useState('light')

    return (
        <div className="home-container">
            {/* Hier beginnt der Header */}
            <header className="header">
                <div className="header-content">
                    <nav className="navbar">
                        <div className="header-content">
                            <a href="/">
                                <img className="Logo-Image" src="/LogoImage/Logo.png" alt="Logo from Jira" />
                            </a>
                        </div>
                        <ul>
                            <li><a href="#">Your Work</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Filters</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">People</a></li>
                            <button onClick={toggleModal} className="btn-modal">
                                Create
                            </button>

                            {modal && (
                                <div className="modal">
                                    <div onClick={toggleModal} className="overlay"></div>
                                    <div className="modal-content">
                                        <h1>Create Ticket</h1>

                                        <div className="todo-wrapper">

                                            <div className="todo-input-item">
                                                <label>Project* </label>
                                                <select value={newProject} onChange={e => setNewProject(e.target.value)}>
                                                    <option value="Project">Jira Clone</option>
                                                </select>
                                            </div>
                                            <div className="todo-input-item">
                                                <label>Issue Type* </label>
                                                <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                                                    <option value="Issue Type">Bug</option>

                                                </select>
                                            </div>

                                            <div className="todo-input-item">
                                                <label>Summery </label>
                                                <input type="text"
                                                    value={newSummary}
                                                    onChange={e => setNewSummary(e.target.value)}
                                                />
                                            </div>

                                            <div className="todo-input-item">
                                                <label>Description </label>
                                                <input
                                                    type="text"
                                                    value={newDescription}
                                                    onChange={e => setNewDescription(e.target.value)}
                                                    placeholder="What's the description of your To Do?"
                                                />
                                            </div>

                                            <div className="todo-input-item">
                                                <label>Owner </label>
                                                <input
                                                    type="text"
                                                    value={newOwner}
                                                    onChange={e => setNewOwner(e.target.value)}
                                                    placeholder="What's the description of your To Do?"
                                                />
                                            </div>
                                            <div className="todo-input-item">
                                                <label>Status </label>
                                                <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                                                    <option value="ToDo">ToDo</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </div>
                                            <div className="todo-input-item">
                                                <button
                                                    className="primary-btn"
                                                    type="button"
                                                    onClick={handleAddNewToDo}
                                                >
                                                    Create
                                                </button>
                                            </div>
                                        </div>
                                        <button className="close-modal" onClick={toggleModal}>
                                            CLOSE
                                        </button>
                                    </div>
                                </div>
                            )}
                        </ul>
                    </nav>
                    <div className="Search">
                        <span class="Search-icon">&#128269;</span>
                        <input className="Search-content" type="search" placeholder="Search" />
                    </div>
                </div>
                <div className="profile-container">
                    <button className="settingBtn"><span class="icon">⚙️</span></button>
                    <button className="LogInBtn"><a href="">Sign in</a></button>
                    {/* {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <a className= "dropdown-content" href="">Profil Bearbeiten<li></li></a>
                                <a className= "dropdown-content" href="">Einstellungen<li></li></a>
                                <a className= "dropdown-content" href="">Ausloggen<li></li></a>
                            </ul>
                        </div>
                    )} */}
                </div>
            </header>
            {/* Hier Hört der Header auf */}
            {/* Hier geht die Sidebar los */}
            <div className="content">
                <div className="Sidebar">
                    <h2>Planning</h2>
                    <ul>
                        <li><a href="#"><span class="icon">&#x1F4C5;</span>Timeline</a></li>
                        <li><a href="#"><span class="icon">&#x1F4A1;</span>Backlog</a></li>
                        <li><a href="#"><span class="icon">&#x1F5C3;</span>Board</a></li>
                        <li class="line"></li>
                        <li><a href="#"><span class="icon">&#x271A;</span>Add shortcut</a></li>
                        <li><a href="#"><span class="icon">⚙️</span>Project settings</a></li>
                    </ul>
                </div>
                {/* HIer endet die Sidebar */}
                {/* Ab hier beginnt der Main Content */}
                <div className="main-view">
                   
                <div className="columns-wrapper">
                    <ToDoColumn tasks={allTodos.filter(task => task.status === 'ToDo')} onDelete={handleToDoDelete} onComplete={handleComplete} />
                    <InProgressColumn tasks={allTodos.filter(task => task.status === 'In Progress')} onDelete={handleToDoDelete} onComplete={handleComplete} />
                    <CompletedColumn tasks={allTodos.filter(task => task.status === 'Completed')} onDelete={handleCompletedTodoDelete} />
                </div>
                </div>
            </div>
            {/* Hier endet der Main content */}
            {/* Hier beginnt der Footer */}
            <footer className="footer">
                <p>© {new Date().getFullYear()} Jira-Clone</p>
            </footer>
        </div>
    );
}

export default Home;