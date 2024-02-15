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
    try {
      const response = await fetch('http://localhost:5000/users');
      if (response.ok) {
        const users = await response.json();
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
          console.log('Login erfolgreich');
          navigate('/dashboard');
        } else {
          setLoginError('Benutzername oder Passwort falsch.');
        }
      }
    } catch (error) {
      console.error('Fehler bei der Anmeldung', error);
      setLoginError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    }
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
    </form>
  );
}

export default LoginPage;