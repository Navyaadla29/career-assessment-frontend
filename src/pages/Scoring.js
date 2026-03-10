import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Scoring() {
  const navigate = useNavigate();
  const [scores, setScores] = useState({
    aptitude: 0,
    creativity: 0,
    commerce: 0,
    leadership: 0
  });

  useEffect(() => {
    calculateScores();
  }, []);

  const calculateScores = () => {
    // Get all module answers from localStorage
    const module1 = JSON.parse(localStorage.getItem('module1') || '{}');
    const module2 = JSON.parse(localStorage.getItem('module2') || '{}');
    const module3 = JSON.parse(localStorage.getItem('module3') || '{}');
    const module4 = JSON.parse(localStorage.getItem('module4') || '{}');
    const module5 = JSON.parse(localStorage.getItem('module5') || '{}');
    const module6 = JSON.parse(localStorage.getItem('module6') || '{}');
    const module7 = JSON.parse(localStorage.getItem('module7') || '{}');

    // Calculate scores based on answers
    // This is a simplified calculation - you can make it more complex
    const aptitudeScore = calculateCategoryScore([module2, module6]);
    const creativityScore = calculateCategoryScore([module1, module3]);
    const commerceScore = calculateCategoryScore([module4, module6]);
    const leadershipScore = calculateCategoryScore([module3, module5, module7]);

    setScores({
      aptitude: aptitudeScore,
      creativity: creativityScore,
      commerce: commerceScore,
      leadership: leadershipScore
    });

    // Save total scores for dashboard
    localStorage.setItem('totalScores', JSON.stringify({
      aptitude: aptitudeScore,
      creativity: creativityScore,
      commerce: commerceScore,
      leadership: leadershipScore
    }));
  };

  const calculateCategoryScore = (modules) => {
    let total = 0;
    let count = 0;
    
    modules.forEach(module => {
      Object.values(module).forEach(value => {
        total += Number(value) || 0;
        count++;
      });
    });
    
    return count > 0 ? Math.round((total / count) * 10) : 0;
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.step}>STEP 4 OF 8</span>
        <h1 style={styles.title}>Scoring & Weightage Algorithm</h1>
      </div>

      <div style={styles.scoresContainer}>
        <div style={styles.scoreCard}>
          <div style={styles.scoreHeader}>
            <span style={styles.category}>Aptitude & Logic</span>
            <span style={styles.scoreValue}>{scores.aptitude}/100</span>
          </div>
          <div style={styles.scoreBar}>
            <div style={{
              ...styles.scoreFill,
              width: `${scores.aptitude}%`,
              background: '#4f46e5'
            }}></div>
          </div>
        </div>

        <div style={styles.scoreCard}>
          <div style={styles.scoreHeader}>
            <span style={styles.category}>Creativity & Expression</span>
            <span style={styles.scoreValue}>{scores.creativity}/100</span>
          </div>
          <div style={styles.scoreBar}>
            <div style={{
              ...styles.scoreFill,
              width: `${scores.creativity}%`,
              background: '#7c3aed'
            }}></div>
          </div>
        </div>

        <div style={styles.scoreCard}>
          <div style={styles.scoreHeader}>
            <span style={styles.category}>Commerce & Finance</span>
            <span style={styles.scoreValue}>{scores.commerce}/100</span>
          </div>
          <div style={styles.scoreBar}>
            <div style={{
              ...styles.scoreFill,
              width: `${scores.commerce}%`,
              background: '#ec4899'
            }}></div>
          </div>
        </div>

        <div style={styles.scoreCard}>
          <div style={styles.scoreHeader}>
            <span style={styles.category}>Leadership & People</span>
            <span style={styles.scoreValue}>{scores.leadership}/100</span>
          </div>
          <div style={styles.scoreBar}>
            <div style={{
              ...styles.scoreFill,
              width: `${scores.leadership}%`,
              background: '#f59e0b'
            }}></div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => navigate('/career-match')} 
        style={styles.button}
      >
        Proceed to Career Matching Engine →
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem'
  },
  header: {
    marginBottom: '3rem'
  },
  step: {
    color: '#4f46e5',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'block',
    marginBottom: '0.5rem'
  },
  title: {
    fontSize: '2rem'
  },
  scoresContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '3rem'
  },
  scoreCard: {
    background: '#1e1e2f',
    padding: '1.5rem',
    borderRadius: '15px'
  },
  scoreHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  category: {
    fontSize: '1.1rem',
    color: 'white'
  },
  scoreValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#4f46e5'
  },
  scoreBar: {
    height: '10px',
    background: '#2a2a3a',
    borderRadius: '5px'
  },
  scoreFill: {
    height: '100%',
    borderRadius: '5px'
  },
  button: {
    width: '100%',
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

export default Scoring;