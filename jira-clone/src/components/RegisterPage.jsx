import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importieren Sie useNavigate für die Weiterleitung nach der Registrierung
import styles from './RegisterPage.module.css';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const navigate = useNavigate(); // useNavigate-Hook für die Weiterleitung nach der Registrierung

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setRegistrationError('Benutzername und Passwort sind erforderlich.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        navigate('/login');
      } else {
        setRegistrationError('Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Fehler bei der Registrierung', error);
      setRegistrationError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Register</h2>
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
      {registrationError && <div className={styles.errorMessage}>{registrationError}</div>}
      <button type="submit" className={styles.submitButton}>Register</button>
    </form>
  );
}

export default RegisterPage;