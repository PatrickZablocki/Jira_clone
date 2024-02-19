import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.css';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.find(user => user.username === username)) {
                setRegistrationError('Benutzername bereits vergeben.');
                return;
            }
            localStorage.setItem('users', JSON.stringify([...users, { username, password }]));
            console.log('Registrierung erfolgreich');
            navigate('/login'); // Navigiere zur Login-Seite nach erfolgreicher Registrierung
        } catch (error) {
            console.error('Fehler bei der Registrierung', error);
            setRegistrationError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
        }
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className={styles.registerPage}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.logoContainer}>
                    <img src="/LogoImage/Atlassianblau.png" alt="Logo" className={styles.logoImage} />
                </div>
                <h4>Registrieren Sie sich, um fortzufahren</h4>
                <div className={styles.formGroup}>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="E-Mail-Adresse eingeben"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="password"
                        className={styles.input}
                        placeholder="Passwort eingeben"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {registrationError && <div className={styles.errorMessage}>{registrationError}</div>}
                <div className={styles.registrationText}>
                    Mit meiner Registrierung bestätige ich, dass ich die
                    <span className={styles.termsLink}> Cloud-Nutzungsbedingungen </span> von Atlassian akzeptiere und die
                    <span className={styles.privacyLink}> Datenschutzrichtlinie </span> anerkenne.
                </div>
                <button type="submit" className={styles.submitButton}>Registrieren</button>
                <div className={styles.continueWithText}><h4>Oder fortfahren mit:</h4></div>
                <div className={styles.alternativeOptions}>
                    <button type="button" className={styles.googleButton}>
                        <a href="https://www.google.com">
                        <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/google-logo.5867462c.svg" alt="Google" className={styles.authImage} />
                        Google
                        </a>
                    </button>
                    <button type="button" className={styles.microsoftButton}>
                        <a href="https://www.microsoft.com">  
                        <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/microsoft-logo.c73d8dca.svg" alt="Microsoft" className={styles.authImage} />
                        Microsoft
                        </a>
                    </button>
                    <button type="button" className={styles.appleButton}>
                        <a href="https://www.apple.com">
                        <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/apple-logo.54e0d711.svg" alt="Apple" className={styles.authImage} />
                        Apple
                        </a>
                    </button>
                    <button type="button" className={styles.slackButton}>
                        <a href="https://www.slack.com">
                        <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/slack-logo.5d730c10.svg" alt="Slack" className={styles.authImage} />
                        Slack
                        </a>
                    </button>
                </div>
                <div className={styles.registerFooter}>
                    <a href="#" onClick={navigateToLogin} className={styles.underlineLink}>Du hast bereits ein Atlassian-Konto? Einloggen</a>
                </div>
                <div className={styles.footerImageContainer}>
                    <img src="/LogoImage/logoatlassin.png" alt="Atlassian Logo" className={styles.footerImage} />
                    <p className={styles.accountText}>
                        Ein Konto für Jira, Confluence, Trello und <span className={styles.blueText}>mehr</span>.
                    </p>
                    <p className={styles.privacyPolicyText}>
                        Diese Seite ist durch reCAPTCHA geschützt und es gelten die
                        <span className={styles.privacyLink}> Datenschutzrichtlinie</span> und die
                        <span className={styles.termsLink}> Nutzungsbedingungen</span> von Google.
                    </p>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;