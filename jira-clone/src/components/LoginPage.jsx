import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft, faApple, faSlack } from '@fortawesome/free-brands-svg-icons';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulieren einer API-Anfrage zum Login
      const response = await fetch('http://localhost:5000/users');
      if (response.ok) {
        const users = await response.json();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          console.log('Login erfolgreich');
          navigate('/dashboard');
        } else {
          setLoginError('Benutzername oder Passwort falsch.');
        }
      } else {
        setLoginError('Anmeldefehler');
      }
    } catch (error) {
      console.error('Fehler bei der Anmeldung', error);
      setLoginError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google-Anmeldung durchgeführt');
    // Implementieren Sie hier die Google-Anmeldefunktionalität
  };

  const handleMicrosoftSignIn = () => {
    console.log('Microsoft-Anmeldung durchgeführt');
    // Implementieren Sie hier die Microsoft-Anmeldefunktionalität
  };

  const handleAppleSignIn = () => {
    console.log('Apple-Anmeldung durchgeführt');
    // Implementieren Sie hier die Apple-Anmeldefunktionalität
  };

  const handleSlackSignIn = () => {
    console.log('Slack-Anmeldung durchgeführt');
    // Implementieren Sie hier die Slack-Anmeldefunktionalität
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className={styles.loginPage}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h2>Login</h2>
        <div className={styles.formGroup}>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {loginError && <div className={styles.errorMessage}>{loginError}</div>}
        <button type="submit" className={styles.submitButton}>Login</button>
        <div className={styles.alternativeOptions}>
          <button type="button" onClick={handleGoogleSignIn} className={styles.googleButton}>
            <FontAwesomeIcon icon={faGoogle} /> Google
          </button>
          <button type="button" onClick={handleMicrosoftSignIn} className={styles.microsoftButton}>
            <FontAwesomeIcon icon={faMicrosoft} /> Microsoft
          </button>
          <button type="button" onClick={handleAppleSignIn} className={styles.appleButton}>
            <FontAwesomeIcon icon={faApple} /> Apple
          </button>
          <button type="button" onClick={handleSlackSignIn} className={styles.slackButton}>
            <FontAwesomeIcon icon={faSlack} /> Slack
          </button>
        </div>
        <div className={styles.loginFooter}>
          <a href="#" onClick={() => {}}>Sie können sich nicht einloggen?</a>
          <span>·</span>
          <a href="#" onClick={navigateToRegister}>Ein Konto erstellen</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;