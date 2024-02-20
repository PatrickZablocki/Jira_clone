import{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home()
            // Das ist die Funktion für das DropDown Menu und für den Dark Mode
        {
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            const [isBellDropdownOpen, setIsBellDropdownOpen] = useState(false);
            const [isQuestionDropdownOpen, setIsQuestionDropdownOpen] = useState(false);
            const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);
            const [isShowPopupOpen, setIsShowPopupOpen] = useState(false);

            const [darkMode, setDarkMode] = useState(() => {
                const savedDarkMode = localStorage.getItem('darkMode');

                    return savedDarkMode ? JSON.parse(savedDarkMode) :false;
            });

            const toggleDropdown = () => 
            {
                setIsDropdownOpen(!isDropdownOpen);
            };
            // Dropdown for Bell and Question
            const toggleBellDropdown = () => {
                setIsBellDropdownOpen (!isBellDropdownOpen);
            }
            const toggleQuestionDropdown = () => {
                setIsQuestionDropdownOpen (!isQuestionDropdownOpen);
            }

            // Die Funktion für das PoP Up

            const togglePopup = () => {
                setIsShowPopupOpen(!isShowPopupOpen);
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

            const [isLoggedIn, setIsLoggedIn] = useState(false);
            const navigate = useNavigate();

    
            useEffect(() => {
                const token = localStorage.getItem('token');
            if (token) {
                setIsLoggedIn(true);
            }else {
            setIsLoggedIn(false);
            }
            }, []);

    
            const handleLogout = () => {
                localStorage.removeItem('token'); 
                setIsLoggedIn(false); 
                navigate('/'); 
            };

    
            const handleSignIn = () => {
                navigate('/login'); // Navigieren zur Login-Seite
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
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">People</a></li>
                        <button className="CreateBtn" onClick={togglePopup}> Create</button>
                        {isShowPopupOpen && (
                        <div className="showpopup">
                            <h2>Jira Ticket</h2>
                            <p>Direkt</p>
                        </div>
                    )}
                    </ul>
                </nav>
                
                <div className="Search">
                    <span class="Search-icon">&#128269;</span>
                    <input className="Search-content" type="search" placeholder="Search"/>        
                </div>
                </div>
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
                    {isLoggedIn ? <button className="LogInBtn" onClick={handleLogout}>Log out</button> : <button className="LogInBtn" onClick={handleSignIn}>Sign in</button>}
                </div>    
            </header>
            <div className="content"> {/* Hauptinhalt der Seite */}
                <div className="Sidebar"> {/* Seitenleiste */}
                    <h2>Planning</h2>
                    <ul>
                        <li><a href="#"><span className="icon">&#x1F4C5;</span>Timeline</a></li>
                        <li><a href="#"><span className="icon">&#x1F4A1;</span>Backlog</a></li>
                        <li><a href="#"><span className="icon">&#x1F5C3;</span>Board</a></li>
                        <li className="line"></li>
                        <li><a href="#"><span className="icon">&#x271A;</span>Add shortcut</a></li>
                        <li><a href="#"><span className="icon">⚙️</span>Project settings</a></li>
                    </ul>
                </div>
                <div className="main-view"> {/* Hauptansicht */}
                    <h2>Backlog</h2> {/* Titel des Backlogs */}
                    <div className="task"> {/* Einzelner Task */}
                        <h3>Task 1</h3> {/* Titel des Tasks */}
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> {/* Beschreibung des Tasks */}
                    </div>
                    <div className="task"> {/* Einzelner Task */}
                        <h3>Task 2</h3> {/* Titel des Tasks */}
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> {/* Beschreibung des Tasks */}
                    </div>
                </div>
            </div>
            <footer className="footer"> {/* Fußzeile */}
                <p>© {new Date().getFullYear()} Jira-Clone</p> {/* Copyright-Informationen */}
            </footer>
        </div>
    );
}

export default Home;