
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Stildefinitionen für die Home-Seite

function HomePage() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Zustand für das Dropdown-Menü
    const navigate = useNavigate(); // Hook zum Navigieren zwischen Seiten

    // Funktion zum Umschalten des Dropdown-Menüs
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Umschalten des Dropdown-Zustands
    };

    // Funktion zum Abmelden und Navigieren zur Login-Seite
    const handleLogout = () => {
        localStorage.removeItem('token'); // Entfernen des Tokens aus dem Local Storage
        navigate('/login'); // Navigieren zur Login-Seite
    };

    return (
        <div className="home-container"> {/* Hauptcontainer für die Home-Seite */}
            <header className="header"> {/* Header-Bereich */}
                <div className="header-content"> {/* Inhalt des Headers */}
                    <nav className="navbar"> {/* Navigationsleiste */}
                        <div className="logo-container"> {/* Logo-Bereich */}
                            <a href="/"> {/* Link zum Start */}
                                <img className="Logo-Image" src="/LogoImage/Logo.png" alt="Logo" /> {/* Logo-Bild */}
                            </a>
                        </div>
                        <ul className="nav-links"> {/* Liste der Navigationslinks */}
                            <li><a href="#">Your Work</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Filters</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">People</a></li>
                            <button className="CreateBtn">Create</button> {/* Button zum Erstellen */}
                        </ul>
                    </nav>
                    <div className="Search"> {/* Suchbereich */}
                        <span className="Search-icon">&#128269;</span> {/* Suchsymbol */}
                        <input className="Search-content" type="search" placeholder="Search" /> {/* Sucheingabe */}
                    </div>
                </div>
                <div className="profile-container"> {/* Profilbereich */}
                    <button className="settingBtn"><span className="icon">⚙️</span></button> {/* Einstellungsbutton */}
                    <button className="LogInBtn" onClick={handleLogout}>Sign in</button> {/* Anmeldebutton */}
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

export default HomePage;