import{ useEffect, useState } from 'react';
import './Home.css';

function Home()
            // Das ist die Funktion für das DropDown Menu und für den Dark Mode
        {
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            const [isBellDropdownOpen, setIsBellDropdownOpen] = useState(false);
            const [isQuestionDropdownOpen, setIsQuestionDropdownOpen] = useState(false);
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

            const toggleDarkMode = () => {
                const newDarkMode = !darkMode;
                setDarkMode(newDarkMode);

                localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
            };

            useEffect(() => {
                if (darkMode) {
                    document.body.classList.add('dark-mode');
                } else {
                    document.body.classList.remove('dark-mode');
                }
            }, [darkMode]);

            // Hier schreibe ich die Funktion um weitergeleitet zu werden



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
                        <button className="CreateBtn">Create</button>
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
                                <li><a href="">Erfahren Sie, was an Jira geändert wurde</a></li>
                                <li><a href="">Komplette Dokumenation durchsuchen</a></li>
                                <li><a href="">Mit Atlassian University lernen</a></li>
                                <li><a href="">Community-Forum fragen</a></li>
                                <li><a href="">Support kontaktieren</a></li>
                                <li><a href="">Geben Sie Feedback zu Jira</a></li>
                                <li><a href="">Tastenkombinationen</a></li>
                                <li><a href="">Jira für Mobilegeräte erhalten</a></li>
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
                    {/* Hier hört das Dropdown menu auf und beginnt der LogIn Button */}
                    <button className="LogInBtn"><a href="">Sign in</a></button>
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
                    <h2>Backlog</h2>
                    <div className="task">
                        <h3>Task 1</h3>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="task">
                        <h3>Task 2</h3>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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