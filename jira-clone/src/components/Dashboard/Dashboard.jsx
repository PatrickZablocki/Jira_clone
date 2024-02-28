import {useState } from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [owner, setOwner] = useState('');
    const [project, setProject] = useState('');
    const [group, setGroup] = useState('');

    const handleCreateDashboard = () => {
    
    };

    const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    
    };

    return (
    <div className={styles.Dashboard_container}>
        <div className={styles.header}>
        <h2>Dashboards</h2>
        <button onClick={handleCreateDashboard}>Dashboard erstellen</button>
        </div>
        <div className={styles.input_content}>
        <input
            type="text" placeholder="Dashboardsuche"
            value={searchQuery}
            onChange={handleSearch}
        />
        <h3>Verantwortliche(r)</h3>
        
        <input
            type="text" placeholder="Besitzer auswählen"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
        />
        
        <h3>Projekt</h3>
        
        <input
            type="text" placeholder="Projekt auswählen"
            value={project}
            onChange={(e) => setProject(e.target.value)}
        />
        
        <h3>Gruppe</h3>
        
        <input
            type="text" placeholder="Gruppe auswählen"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
        />
        </div>
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Besitzer</th>
            <th>Anzeigeberechtigte</th>
            <th>Editoren</th>
            <th>Markiert von</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
        </table>
    </div>
    );
};
export default Dashboard;