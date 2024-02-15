import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Hier implementieren Sie die Logik für die Anmeldung über Benutzername und Passwort
  };

  const handleGoogleSignIn = () => {
    // Hier implementieren Sie die Logik für die Anmeldung über Google
  };

  const handleMicrosoftSignIn = () => {
    // Hier implementieren Sie die Logik für die Anmeldung über Microsoft
  };

  const handleAppleSignIn = () => {
    // Hier implementieren Sie die Logik für die Anmeldung über Apple
  };

  const handleSlackSignIn = () => {
    // Hier implementieren Sie die Logik für die Anmeldung über Slack
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
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
        <button type="button" onClick={handleGoogleSignIn} className={styles.googleButton}>Google</button>
        <button type="button" onClick={handleMicrosoftSignIn} className={styles.microsoftButton}>Microsoft</button>
        <button type="button" onClick={handleAppleSignIn} className={styles.appleButton}>Apple</button>
        <button type="button" onClick={handleSlackSignIn} className={styles.slackButton}>Slack</button>
      </div>
      <div className={styles.loginFooter}>
        <a href="#" onClick={() => {}}>Sie können sich nicht einloggen?</a>
        <span>·</span>
        <a href="#" onClick={navigateToRegister}>Ein Konto erstellen</a>
      </div>
    </form>
  );
}

export default LoginPage;
