import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ResetPage.module.css';

function PasswordResetPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Implementieren Sie hier die Logik, um den Passwort-Reset-Link zu senden
    console.log('Passwort-Reset-Link wird gesendet an: ', email);
  };

  const goBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.passwordResetContainer}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <img src="/LogoImage/Atlassianblau.png" alt="Atlassian Logo" className={styles.logo} />
        </div>
        <h3 className={styles.title}>Sie können sich nicht einloggen?</h3>
        <p className={styles.description}>Wir senden Ihnen einen Wiederherstellungslink an folgende E-Mail-Adresse:</p>
        <form onSubmit={handleResetPassword} className={styles.form}>
          <input
            type="email"
            placeholder="E-Mail-Adresse eingeben"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>Wiederherstellungslink senden</button>
        </form>
        <button onClick={goBackToLogin} className={styles.backButton}>Zurück zum Login</button>
        <div className={styles.separator}></div>
        <div className={styles.footer}>
          <img src="/LogoImage/logoatlassin.png" alt="Atlassian Logo" className={styles.footerLogo} />
          <p className={styles.logoSubtext}>Ein Konto für Jira, Confluence, Trello und <span className={styles.blueText}>mehr.</span></p>
          <div className={styles.footerLinks}>
            <a href="/help" className={styles.link}>Hilfe zum Login</a> • <a href="/support" className={styles.link}>Support kontaktieren</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetPage;