import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import ToDoColumn from './ToDoColumn';
import InProgressColumn from './InProgressColumn';
import CompletedColumn from '../components/CompletedColumn';
import { Provider } from "react-redux";
import themeContext from "../context/ThemeContext";
import Create from './Create';
import Team from './Team/Team';
import Dashboard from './Dashboard/Dashboard';



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
    const [isBellDropdownOpen, setIsBellDropdownOpen] = useState(false);
    const [isQuestionDropdownOpen, setIsQuestionDropdownOpen] = useState(false);
    const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
});

    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
};

    const toggleBellDropdown = () => {
    setIsBellDropdownOpen(!isBellDropdownOpen);
};

    const toggleQuestionDropdown = () => {
    setIsQuestionDropdownOpen(!isQuestionDropdownOpen);
};

    const toggleFeedbackPopup = () => {
    setIsFeedbackPopupOpen(!isFeedbackPopupOpen);
    setIsQuestionDropdownOpen(false);
};

    const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
};

//  Das sind die Funktionen vom UserInterface
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setIsLoggedIn(true);
        axios.get('/db.json')
        .then(response => {
            const userData = response.data.users.find(u => u.id === parseInt(token));
            setUser(userData);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    } else {
        setIsLoggedIn(false);
    }
}, []);

    const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
};

    const handleSignIn = () => {
    navigate('/login');
};

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
    } else {
    document.body.classList.remove('dark-mode');
    }
}, [darkMode]);



    return (
        <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
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
                            <li><link to="/Dashboard"/><a href="Dashboard">Dashboard</a></li>
                            <li><link to="/Team"/><a href="Team">People</a></li>
                            <button onClick={toggleModal} className="CreateBtn">
                                Create
                            </button>

                            {modal && (
                                <div className="modal">
                                    <div onClick={toggleModal} className="overlay"></div>
                                    <div className="modal-content">
                                        <h1>Create Ticket</h1>

                                        <div className="todo-wrapper">

                                            <div className="todo-input-item">
                                                <label>Project </label>
                                                <select name='Project' id='project' value={newProject} onChange={e => setNewProject(e.target.value)}>
                                                    <option value="Choose">Choose a project</option>
                                                    <option value="Jira">Jira Clone</option>
                                                    <option value="Netflix">Netflix Clone</option>
                                                    <option value="Spotify">Spotify Clone</option>
                                                </select>
                                            </div>
                                            <div className="todo-input-item">
                                                <label>Issue Type </label>
                                                <select type="text" value={newIssue} onChange={e => setNewIssue(e.target.value)}>
                                                    <option value="Choose">What kind of Issue Type? </option>
                                                    <option value="Bug">Bug</option>
                                                    <option value="Task">Task</option>
                                                    <option value="Risk">Risk</option>
                                                    <option value="Story">Story</option>

                                                </select>
                                            </div>

                                            <div className="todo-input-item">
                                                <label>Summary </label>
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
                                                    
                                                />
                                            </div>

                                            <div className="todo-input-item">
                                                <label>Owner </label>
                                                <select
                                                    type="text"
                                                    value={newOwner}
                                                    onChange={e => setNewOwner(e.target.value)}
                                                    
                                                >
                                                    <option value="Choose">Choose a owner</option>
                                                    <option value="Patrick">Patrick</option>
                                                    <option value="Asel">Asel</option>
                                                    <option value="Timo">Timo</option> 
                                                    <option value="Janis">Janis</option> 
                                                    </select>
                                            </div>
                                            <div className="todo-input-item">
                                                <label>Status </label>
                                                <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                                                    <option value="Status">Status</option>
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
                        <span className="Search-icon">&#128269;</span>
                        <input className="Search-content" type="search" placeholder="Search" />
                    </div>
                </div>
                
                {/* Hier geht es mit der Navbar Weiter Wichtigster Punkt ist der LogIn bereich */}
                <div className="profile-container">

                    <button className="BellBtn" onClick={toggleBellDropdown}>
                    🔔
                    </button>
                    {isBellDropdownOpen && (
                        <div className="bellDropdown">
                            <h2>Benachrichtigungen</h2>
                            <p>Direkt</p>
                            <button></button>
                        </div>
                    )}
                    <button className="QuestionBtn" onClick={toggleQuestionDropdown}>
                    ?
                    </button>
                    {isQuestionDropdownOpen && (
                        <div className="questionDropdown">
                            <h2>Help</h2>
                            <ul>
                                <li><a href="https://confluence.atlassian.com/cloud/blog">Erfahren Sie, was an Jira geändert wurde</a></li>
                                <li><a href="https://confluence.atlassian.com/alldoc/">Komplette Dokumenation durchsuchen</a></li>
                                <li><a href="https://university.atlassian.com/student/catalog?utm_source=jira-help&utm_medium=inapp&utm_campaign=P:uni-training*O:university*H:fy23q4*I:in-app-help*">Mit Atlassian University lernen</a></li>
                                <li><a href="https://community.atlassian.com/">Community-Forum fragen</a></li>
                                <li><a href="https://id.atlassian.com/login/authorize?continue=https%3A%2F%2Fsupport.atlassian.com%2Fcontact%2F%3Fpostauth%3Dtrue%23%2F&token=eyJraWQiOiJtaWNyb3Mvc2lnbi1pbi1zZXJ2aWNlL3IxcTFzdW5xN28ybHMxNXIiLCJhbGciOiJSUzI1NiJ9.eyJtYXJrZWRWZXJpZmllZCI6ImZhbHNlIiwibG9naW5UeXBlIjoic2Vzc2lvblJlZnJlc2giLCJpc3MiOiJtaWNyb3Mvc2lnbi1pbi1zZXJ2aWNlIiwidXNlcklkIjoiNzEyMDIwOjQ5YjZmNjE0LTQyOGQtNDRiMy04NDk1LWU1ZWE3NDRkMWYwNSIsImlzU2xhY2tBcHBTb3VyY2UiOiJmYWxzZSIsImF1ZCI6Imxpbmstc2lnbmF0dXJlLXZhbGlkYXRvciIsIm5iZiI6MTcwODMzNjQyOSwic2NvcGUiOiJMb2dpbiIsImVucmljaE9yZ0lkIjoiZmFsc2UiLCJleHAiOjE3MDgzMzY1NDksImlhdCI6MTcwODMzNjQyOSwianRpIjoiYmRjODJlZDMtZDM3Yi00MTI0LWFjMDAtNDc1NTlhZTRlZmFkIiwiaGFzaGVkQ3NyZlRva2VuIjoiZTIxYjJhZmU4ZjZlMjllYTBhNWZiMDE2ZWMxZjYwNGQ4Mjk0ZjlkY2Y3ZTc4M2NlMTI4ZGFkMjg1OGFjOWNkNiJ9.hjd_db1wlFDB8VGp3vRZJgo0LN3fXNji3h0mr7dyyBT_5IKwC0igwYKWyBGJUK_I4liY_3VH99ODj-O01uuDOcRWzzX8i54nAjFIEKtzlm4YTiXLqE72zAtezEG7t1OBgpzOyx9XX_10nUIZ1CeTSPjE0AeLy-buP4lF6FlRcZ8H8sm7PChal_qMBjilUeNVSj9p0nMmL8n9yffbwEjadfLZ1BzyAMfJ5tEVAFanTXfPPtINCqOZt7X6bO0Ab1pGoVCzuEI9Izg3k3O_NF6419r13ayHB1G7scEG-Bf9INqcsY8JPMfPAZtNhIFUSWnWyPP2Q3RLBY_y9XKkYL8-3w&state=eyJoYXNoZWRDc3JmVG9rZW4iOiJjMzYxYTU1MThjNWE4ZGE3NDVkMmRjYWNhMTM1Mjk4M2UwZmJiZjgwOWRlMmIxNjZjMTE2NDAxMjk4OTFmNzRiIn0%3D">Support kontaktieren</a></li>
                                <li><a href="" onClick={toggleFeedbackPopup}>Geben Sie Feedback zu Jira</a></li>
                                <li><a href="">Tastenkombinationen</a></li>
                                <li><a href="https://id.atlassian.com/login/authorize?continue=https%3A%2F%2Fsupport.atlassian.com%2Fcontact%2F%3Fpostauth%3Dtrue%23%2F&token=eyJraWQiOiJtaWNyb3Mvc2lnbi1pbi1zZXJ2aWNlL3IxcTFzdW5xN28ybHMxNXIiLCJhbGciOiJSUzI1NiJ9.eyJtYXJrZWRWZXJpZmllZCI6ImZhbHNlIiwibG9naW5UeXBlIjoic2Vzc2lvblJlZnJlc2giLCJpc3MiOiJtaWNyb3Mvc2lnbi1pbi1zZXJ2aWNlIiwidXNlcklkIjoiNzEyMDIwOjQ5YjZmNjE0LTQyOGQtNDRiMy04NDk1LWU1ZWE3NDRkMWYwNSIsImlzU2xhY2tBcHBTb3VyY2UiOiJmYWxzZSIsImF1ZCI6Imxpbmstc2lnbmF0dXJlLXZhbGlkYXRvciIsIm5iZiI6MTcwODMzNjQyOSwic2NvcGUiOiJMb2dpbiIsImVucmljaE9yZ0lkIjoiZmFsc2UiLCJleHAiOjE3MDgzMzY1NDksImlhdCI6MTcwODMzNjQyOSwianRpIjoiYmRjODJlZDMtZDM3Yi00MTI0LWFjMDAtNDc1NTlhZTRlZmFkIiwiaGFzaGVkQ3NyZlRva2VuIjoiZTIxYjJhZmU4ZjZlMjllYTBhNWZiMDE2ZWMxZjYwNGQ4Mjk0ZjlkY2Y3ZTc4M2NlMTI4ZGFkMjg1OGFjOWNkNiJ9.hjd_db1wlFDB8VGp3vRZJgo0LN3fXNji3h0mr7dyyBT_5IKwC0igwYKWyBGJUK_I4liY_3VH99ODj-O01uuDOcRWzzX8i54nAjFIEKtzlm4YTiXLqE72zAtezEG7t1OBgpzOyx9XX_10nUIZ1CeTSPjE0AeLy-buP4lF6FlRcZ8H8sm7PChal_qMBjilUeNVSj9p0nMmL8n9yffbwEjadfLZ1BzyAMfJ5tEVAFanTXfPPtINCqOZt7X6bO0Ab1pGoVCzuEI9Izg3k3O_NF6419r13ayHB1G7scEG-Bf9INqcsY8JPMfPAZtNhIFUSWnWyPP2Q3RLBY_y9XKkYL8-3w&state=eyJoYXNoZWRDc3JmVG9rZW4iOiJjMzYxYTU1MThjNWE4ZGE3NDVkMmRjYWNhMTM1Mjk4M2UwZmJiZjgwOWRlMmIxNjZjMTE2NDAxMjk4OTFmNzRiIn0%3D">Jira für Mobilegeräte erhalten</a></li>
                            </ul>
                        </div>
                    )}
                    <button className="settingBtn" onClick={toggleDropdown}>
                        <span class="icon">⚙️</span>
                    </button>
                    {/* Hier beginnt das Dropdown menu für die Einstellungen  */}
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <h2>Einstellungen</h2>
                                <a className= "dropdown-content" href="#">Atlasian-Kontoeinstellungen<li></li></a>
                                <a className= "dropdown-content" href="">
                                    Persöhnliche Jira-Einstellungen<li></li></a>
                                <h2>Jira-Einstellungen</h2>
                                <a className= "dropdown-content" href="">System<li></li></a>
                                <a className= "dropdown-content" href="">Produkte<li></li></a>
                                <a className= "dropdown-content" href="">Projekte<li></li></a>
                                <a className= "dropdown-content" href="">Vorgänge<li></li></a>
                                <a className= "dropdown-content" href="">Apps<li></li></a>
                                <a className= "dropdown-content" id="DarkMode" href="" onClick={toggleDarkMode}>Dark Mode<li></li></a>
                            </ul>
                        </div>
                    )}
                    {/* Das ist der Sign in Button  */}
                    <div className="user-info">
                    {isLoggedIn ? (
                    <>
                        <span className="Benutzer-content">{isLoggedIn && user &&user.username}</span>
                            <div className="status-circle" style={{ backgroundColor: user && user.online ? 'red' : 'green' }}></div>
                        <button className="logOutBtn" onClick={handleLogout}>Abmelden</button>
                    </>
                    ) : (
                        <button className="logInBtn" onClick={handleSignIn}>Anmelden</button>
                    )}
                    </div>
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
                    <CompletedColumn  tasks={allTodos.filter(task => task.status === 'Completed')} onDelete={handleCompletedTodoDelete} />
                </div>
                </div>
            </div>
            <footer className="footer"> 
                <p>© {new Date().getFullYear()} Jira-Clone</p> 
            </footer>
        </div>
    );
}

export default Home;