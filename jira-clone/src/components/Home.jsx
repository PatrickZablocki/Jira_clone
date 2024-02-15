import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    // Funktion zum Umschalten des Dropdown-Menüs (wird derzeit im Code nicht verwendet)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Funktion zum Navigieren zur LoginPage, wenn der "Sign in"-Button geklickt wird
    const navigateToLogin = () => {
        navigate('/login'); // Navigiert zur LoginPage
    };

    return (
        <div className="home-container">
            <header className="header">
                <div className="header-content">
                    <nav className="navbar">
                        <div className="logo-container">
                            <a href="/">
                                <img className="Logo-Image" src="/LogoImage/Logo.png" alt="Logo" />
                            </a>
                        </div>
                        <ul className="nav-links">
                            <li><a href="#">Your Work</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Filters</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">People</a></li>
                            <button className="CreateBtn">Create</button>
                        </ul>
                    </nav>
                    <div className="Search">
                        <span className="Search-icon">&#128269;</span>
                        <input className="Search-content" type="search" placeholder="Search" />
                    </div>
                </div>
                <div className="profile-container">
                    <button className="settingBtn"><span className="icon">⚙️</span></button>
                    {/* Aktualisierung für den "Sign in"-Button mit onClick Event-Handler */}
                    <button className="LogInBtn" onClick={navigateToLogin}>Sign in</button>
                </div>
            </header>
            {/* Sidebar */}
            <div className="content">
                <div className="Sidebar">
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
                {/* Main Content */}
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
            {/* Footer */}
            <footer className="footer">
                <p>© {new Date().getFullYear()} Jira-Clone</p>
            </footer>
        </div>
    );
}

export default Home;