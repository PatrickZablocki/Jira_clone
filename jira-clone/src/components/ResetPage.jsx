import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ResetPage.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function PasswordResetPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Implementieren Sie die Logik, um den Passwort-Reset-Link zu senden
    console.log('Passwort-Reset-Link wird gesendet an: ', email);
    // Sie müssten hier Ihren Backend-Service anrufen, um die E-Mail zu verarbeiten
  };

  const goBackToLogin = () => {
    navigate('/login'); // Stellen Sie sicher, dass Sie eine Route für den Login haben
  };

  return (
    <div className={styles.passwordResetContainer}>
      <div className={styles.card}>
        <img src="LogoImage/Atlassianblau.png" alt="Atlassian-Logo" />
        <h3>Sie können sich nicht einloggen?</h3>
        <p>Wir senden Ihnen einen Wiederherstellungslink an folgende E-Mail-Adresse:</p>
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="E-Mail-Adresse eingeben"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Wiederherstellungslink senden</button>
        </form>
        <button onClick={goBackToLogin}>Zurück zum Login</button>
      </div>
      <div className={styles.footer}>
        <img src="/LogoImage/logoatlassin.png" alt="Atlas Logo" />
        <p>Ein Konto für Trello, Jira, Confluence und mehr.</p>
        <div>
          <a href="/help">Hilfe zum Login</a> | <a href="/support">Support kontaktieren</a>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetPage;