import React from 'react';
import './Home.css';

function Home() {
return (
    <div className="home-container">
    <header className="header">
        <h1>Jira-Clone</h1>
    </header>
    <div className="content">
        <div className="sidebar">
        <ul>
            <li><a href="">Your Work</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Filters</a></li>
            <li><a href="">Dashboard</a></li>
        </ul>
        </div>
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
    <footer className="footer">
        <p>© {new Date().getFullYear()} Jira-Clone</p>
    </footer>
    </div>
);
}

export default Home;