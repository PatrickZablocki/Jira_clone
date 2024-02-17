import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './LoginPage.module.css'; 

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  // Funktion zur Behandlung des Formularabsendens
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('http://localhost:5000/users');
      if (response.ok) { // Überprüfung, ob die Anfrage erfolgreich war
        const users = await response.json();
        // Suche nach einem Benutzer, der dem eingegebenen Benutzernamen und Passwort entspricht
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          console.log('Login erfolgreich');
          navigate('/dashboard'); // Weiterleitung zum Dashboard bei Erfolg
        } else {
          setLoginError('Benutzername oder Passwort falsch.'); 
        }
      } else {
        setLoginError('Anmeldefehler'); 
      }
    } catch (error) {
      console.error('Fehler bei der Anmeldung', error); 
      setLoginError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'); // Allgemeine Fehlermeldung
    }
  };

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

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className={styles.loginPage}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.logoContainer}>
          <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/atlaslogo.5491d009.svg" alt="Logo" className={styles.logoImage} />
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
        <div className={styles.formGroup}>
          <input
            type="password"
            className={styles.input}
            placeholder="Passwort eingeben"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {loginError && <div className={styles.errorMessage}>{loginError}</div>}
        <button type="submit" className={styles.submitButton}>Weiter</button>
        <div className={styles.continueWithText}> <h4>Oder fortfahren mit:</h4></div>
        <div className={styles.alternativeOptions}>
          <button type="button" onClick={handleGoogleSignIn} className={styles.googleButton}>
            <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/google-logo.5867462c.svg" alt="Google" className={styles.authImage} />
            Google
          </button>
          <button type="button" onClick={handleMicrosoftSignIn} className={styles.microsoftButton}>
            <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/microsoft-logo.c73d8dca.svg" alt="Microsoft" className={styles.authImage} />
            Microsoft
          </button>
          <button type="button" onClick={handleAppleSignIn} className={styles.appleButton}>
            <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/apple-logo.54e0d711.svg" alt="Apple" className={styles.authImage} />
            Apple
          </button>
          <button type="button" onClick={handleSlackSignIn} className={styles.slackButton}>
            <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.541/slack-logo.5d730c10.svg" alt="Slack" className={styles.authImage} />
            Slack
          </button>
        </div>
        <div className={styles.loginFooter}>
          <a href="#" onClick={() => {}} className={`${styles.blueText} ${styles.loginFooterLink}`}>Sie können sich nicht einloggen?</a>
          <span>·</span>
          <a href="#" onClick={navigateToRegister} className={`${styles.blueText} ${styles.loginFooterLink}`}>Ein Konto erstellen</a>
        </div>
        <div className={styles.footerImageContainer}>
          <img src="/LogoImage/logoatlassin.png" alt="Atlassian Logo" className={styles.footerImage} />
          <p className={styles.accountText}>
          Ein Konto für Jira, Confluence, Trello und <span className={styles.blueText}>mehr</span>.
          </p>
          <p className={styles.privacyPolicyText}>Datenschutzrichtlinie • Benutzerhinweis</p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage; 