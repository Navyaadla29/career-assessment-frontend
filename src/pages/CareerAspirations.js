import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CareerAspirations() {
  const navigate = useNavigate();
  const [impact, setImpact] = useState('');
  const [dreamGoal, setDreamGoal] = useState('');

  const handleLaunch = () => {
    // Save aspirations to localStorage
    localStorage.setItem('aspirations', JSON.stringify({ impact, dreamGoal }));
    
    // THIS IS THE FIX - Go to module1, NOT scoring!
    navigate('/module1');
  };

  const handleBack = () => {
    navigate('/personal-dna');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Career Assessment</h1>
        <p style={styles.subtitle}>Extreme Profile DNA · Guided setup for Navya Adla</p>
      </div>

      <div style={styles.progressSection}>
        <div style={styles.progressLabel}>
          <span>Profile Effectiveness</span>
          <span>75%</span>
        </div>
        <div style={styles.progressBar}>
          <div style={{...styles.progress, width: '75%'}}></div>
        </div>
      </div>

      <div style={styles.formSection}>
        <div style={styles.formGroup}>
          <label style={styles.label}>What kind of impact do you want to make in your career?</label>
          <textarea
            style={styles.textarea}
            value={impact}
            onChange={(e) => setImpact(e.target.value)}
            placeholder="e.g. Help people through technology, Create innovative solutions..."
            rows="4"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Dream Goal (or Top 3 Dream Companies)</label>
          <input
            style={styles.input}
            type="text"
            value={dreamGoal}
            onChange={(e) => setDreamGoal(e.target.value)}
            placeholder="e.g. Work at Google, Start my own AI firm, Become a surgeon..."
          />
        </div>
      </div>

      <div style={styles.buttonGroup}>
        <button onClick={handleBack} style={styles.backButton}>
          ← Back
        </button>
        <button onClick={handleLaunch} style={styles.launchButton}>
          Launch Assessment
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    background: '#1e1e2f',
    borderRadius: '20px'
  },
  header: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#aaa',
    fontSize: '0.95rem'
  },
  progressSection: {
    marginBottom: '2rem'
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    color: '#aaa'
  },
  progressBar: {
    height: '8px',
    background: '#2a2a3a',
    borderRadius: '4px'
  },
  progress: {
    height: '100%',
    background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
    borderRadius: '4px'
  },
  formSection: {
    marginBottom: '2rem'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#aaa',
    fontSize: '1rem'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    background: '#2a2a3a',
    border: '1px solid #333',
    borderRadius: '10px',
    color: 'white',
    fontSize: '1rem',
    resize: 'vertical'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    background: '#2a2a3a',
    border: '1px solid #333',
    borderRadius: '10px',
    color: 'white',
    fontSize: '1rem'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem'
  },
  backButton: {
    flex: 1,
    padding: '1rem',
    background: '#2a2a3a',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  launchButton: {
    flex: 2,
    padding: '1rem',
    background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer'
  }
};

export default CareerAspirations;