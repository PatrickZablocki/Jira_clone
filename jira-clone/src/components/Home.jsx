import{ useState } from 'react';
import './Home.css';
import Body from "./Body";
import { Provider } from "react-redux";
import store from "../store/index";
import themeContext from "../context/ThemeContext";



function Home()

        {
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);

            const toggleDropdown = () => {
                setIsDropdownOpen(!isDropdownOpen);
            };

            const [theme,setTheme] = useState('light')

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
                        <button className="CreateBtn">Create</button>
                    </ul>
                </nav>
                <div className="Search">
                    <span class="Search-icon">&#128269;</span>
                    <input className="Search-content" type="search" placeholder="Search"/>        
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
                <themeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
                        <Provider store={store}>


                            <Body />

                        </Provider>
                    </themeContext.Provider>
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