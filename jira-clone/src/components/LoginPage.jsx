import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Anfrage an den Server senden, um die Benutzerdaten zu überprüfen
        const response = await fetch('http://localhost:5000/users');
        const users = await response.json();

        // Überprüfen, ob ein Benutzer mit dem angegebenen Benutzernamen und Passwort existiert
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            // Simulierter Token für die Demonstration; in einem realen Szenario sollte der Token vom Server kommen
            const token = 'simuliertes-token-' + new Date().getTime();
            localStorage.setItem('token', token);
            navigate('/'); // Weiterleitung zum Dashboard oder einer anderen Seite nach erfolgreicher Anmeldung
        } else {
            setLoginError('Benutzername oder Passwort falsch.');
        }
    } catch (error) {
        console.error('Login fehlgeschlagen', error);
        setLoginError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    }
};

  // Funktionen für soziale Medien-Anmeldungen, wie in Ihrem Originalcode
  const handleGoogleSignIn = () => {
    console.log('Google-Anmeldung durchgeführt');
  };

  const handleMicrosoftSignIn = () => {
    console.log('Microsoft-Anmeldung durchgeführt');
  };

  const handleAppleSignIn = () => {
    console.log('Apple-Anmeldung durchgeführt');
  };

  const handleSlackSignIn = () => {
    console.log('Slack-Anmeldung durchgeführt');
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  const navigateToPasswordReset = () => {
    navigate('/password-reset');
};

  return (
    <div className={styles.loginPage}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.logoContainer}>
          <img src="/LogoImage/Atlassianblau.png" alt="Logo" className={styles.logoImage} />
        </div>
        <h4>Einloggen, um fortzufahren</h4>
        <div className={styles.formGroup}>
          <input
            type="email"
            className={styles.input}
            placeholder="E-Mail-Adresse eingeben"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.passwordInputGroup}`}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            className={styles.input}
            placeholder="Passwort eingeben"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={styles.passwordToggle}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {loginError && <div className={styles.errorMessage}>{loginError}</div>}
        <button type="submit" className={styles.submitButton}>Weiter</button>
        <div className={styles.continueWithText}>
          <h4>Oder fortfahren mit:</h4>
        </div>
        <div className={styles.alternativeOptions}> 
        <a href="https://accounts.google.com/signin">
                        <button type="button" className={styles.googleButton} onClick={() => alert('Google Login')}>
                        <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/google-logo.5867462c.svg" alt="Google" className={styles.authImage} />
                        Google
                    </button>
                    </a>
                    <a href="https://login.microsoftonline.com">
                        <button type="button" className={styles.microsoftButton} onClick={() => alert('Microsoft Login')}>
                        <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/microsoft-logo.c73d8dca.svg" alt="Microsoft" className={styles.authImage} />
                        Microsoft
                    </button>
                    </a>
                    <a href="https://appleid.apple.com">
                        <button type="button" className={styles.appleButton} onClick={() => alert('Apple Login')}>
                        <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/apple-logo.54e0d711.svg" alt="Apple" className={styles.authImage} />
                        Apple
                    </button>
                    </a>
                    <a href="https://slack.com/signin">
                        <button type="button" className={styles.slackButton} onClick={() => alert('Slack Login')}>
                        <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/slack-logo.5d730c10.svg" alt="Slack" className={styles.authImage} />
                        Slack
                    </button>
                    </a>
        </div>
        <div className={styles.loginFooter}>
          <a href="#" onClick={navigateToPasswordReset} className={`${styles.blueText} ${styles.loginFooterLink}`}>
            Sie können sich nicht einloggen?
          </a>
          <span>·</span>
          <a href="#" onClick={navigateToRegister} className={`${styles.blueText} ${styles.loginFooterLink}`}>
            Ein Konto erstellen
          </a>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerImageContainer}>
            <img src="/LogoImage/logoatlassin.png" alt="Footer Logo" className={styles.footerImage} />
          </div>
          <p className={styles.accountText}>
            Ein Konto für Jira, Confluence, Trello und mehr.
          </p>
          <p className={styles.privacyPolicyText}>
            Datenschutzrichtlinie • Benutzerhinweis
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;