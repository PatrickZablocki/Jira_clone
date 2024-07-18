import {useState } from 'react';
import styles from './Dashboard.module.css';

function Dashboard() {
    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <button>Dashboard erstellen</button> 
            <div className="form-group">
                <label htmlFor="owner">Verantwortliche(r):</label>
                <select id="owner">
                    <option value="1">Asel</option>
                    <option value="2">Janis</option>
                    <option value="1">Timo</option>
                    <option value="2">Patrick</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="project">Projekt:</label>
                <select id="project">
                    <option value="1">Asel</option>
                    <option value="2">Janis</option>
                    <option value="1">Timo</option>
                    <option value="2">Patrick</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="group">Gruppe:</label>
                <select id="group">
                    <option value="1">Asel</option>
                    <option value="2">Janis</option>
                    <option value="1">Timo</option>
                    <option value="2">Patrick</option>
                </select>
            </div>

            <h2>Dashboardsuche</h2>
            <input type="text" id="dashboard-search" placeholder="Suche nach Dashboard" />

            <h2>Tabelle: Dashboards</h2>
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
                    <tr>
                        <td>Default dashboard</td>
                        <td>Öffentlich</td>
                        <td>Privat</td>
                        <td>0 Personen</td>
                        <td></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    
    );
}
export default Dashboard;

