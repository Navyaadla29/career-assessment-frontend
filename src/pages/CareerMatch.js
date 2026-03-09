import React from 'react';
import { useNavigate } from 'react-router-dom';

function CareerMatch() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.step}>STEP 5 OF 8</span>
        <h1 style={styles.title}>Career Matching Engine</h1>
      </div>

      <div style={styles.matchCard}>
        <div style={styles.matchLabel}>TOP MATCH</div>
        <h2 style={styles.careerName}>Software Engineer</h2>
        
        <div style={styles.scoreCircle}>
          <div style={styles.scoreNumber}>28%</div>
          <div style={styles.scoreLabel}>Fit Accuracy</div>
        </div>

        <div style={styles.category}>
          Technology & Engineering
        </div>
      </div>

      <button 
        onClick={() => navigate('/stream-recommendation')} 
        style={styles.button}
      >
        Proceed to Stream Recommendation →
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
  matchCard: {
    background: '#1e1e2f',
    padding: '3rem',
    borderRadius: '20px',
    textAlign: 'center',
    marginBottom: '3rem'
  },
  matchLabel: {
    color: '#4f46e5',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  careerName: {
    fontSize: '2.5rem',
    marginBottom: '2rem'
  },
  scoreCircle: {
    width: '150px',
    height: '150px',
    margin: '0 auto 2rem',
    background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold'
  },
  scoreLabel: {
    fontSize: '0.9rem',
    opacity: '0.9'
  },
  category: {
    color: '#aaa',
    fontSize: '1rem'
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

export default CareerMatch;