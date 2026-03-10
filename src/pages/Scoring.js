import React from 'react';
import { useNavigate } from 'react-router-dom';

function Scoring() {
  const navigate = useNavigate();

  const scores = [
    { category: 'Aptitude & Logic', score: 35, max: 100, color: '#4f46e5' },
    { category: 'Creativity & Expression', score: 34, max: 100, color: '#7c3aed' },
    { category: 'Commerce & Finance', score: 28, max: 100, color: '#ec4899' },
    { category: 'Leadership & People', score: 22, max: 100, color: '#f59e0b' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.step}>STEP 4 OF 8</span>
        <h1 style={styles.title}>Scoring & Weightage Algorithm</h1>
      </div>

      <div style={styles.scoresContainer}>
        {scores.map((item, index) => (
          <div key={index} style={styles.scoreCard}>
            <div style={styles.scoreHeader}>
              <span style={styles.category}>{item.category}</span>
              <span style={styles.scoreValue}>{item.score}/{item.max}</span>
            </div>
            <div style={styles.scoreBar}>
              <div style={{
                ...styles.scoreFill,
                width: `${(item.score/item.max)*100}%`,
                background: item.color
              }}></div>
            </div>
          </div>
        ))}
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