import React from 'react';
import styles from './Team.module.css';

const Team = () => {
    return (
        <div className={styles.Team_container}>
            <h1 className={styles.headline}>Unser Team</h1>
            <div className={styles.Content_container}>
                <div className={styles.Member_container}>
                    <img className={styles.Member_image} src="https://avatars.githubusercontent.com/u/139169561?v=4" alt="" />
                        <h2>Asel</h2>
                    <div className={styles.Member_info}>
                        <p>Ticket Expertin und Support</p>
                    </div>
                </div>
                <div className={styles.Member_container}>
                    <img className={styles.Member_image} src="https://avatars.githubusercontent.com/u/135604706?v=4" alt="" />
                        <h2>Janis</h2>
                    <div className={styles.Member_info}>
                        <p>Designerin</p>
                    </div>
                </div>
                <div className={styles.Member_container}>
                    <img className={styles.Member_image} src="https://avatars.githubusercontent.com/u/135116915?v=4" alt="" />
                        <h2>Timo</h2>
                    <div className={styles.Member_info}>
                        <p>LogIn und Regestrierung</p>
                    </div>
                </div>
                <div className={styles.Member_container}>
                    <img className={styles.Member_image} src="https://avatars.githubusercontent.com/u/139109232?v=4" alt="" />
                        <h2>Patrick</h2>
                    <div className={styles.Member_info}>
                        <p>Grundstruktur erstellt , Online Status , Profile & Dark Mode</p>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                ©   Jira Project by Asel, Janis, Timo & Patrick
            </footer>
        </div>
    );
};

export default Team;