import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateAllScores } from '../utils/scoreCalculator';

function Scoring() {
  const navigate = useNavigate();
  const [scores, setScores] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculatedScores = calculateAllScores();
    setScores(calculatedScores);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div className="loader" style={styles.loader}></div>
        <p style={styles.loadingText}>Calculating your scores...</p>
      </div>
    );
  }

  const scoreCategories = [
    { category: 'Aptitude & Logic', score: scores.aptitude, color: '#a855f7', icon: '🧠' },
    { category: 'Creativity & Expression', score: scores.creativity, color: '#ec4899', icon: '🎨' },
    { category: 'Commerce & Finance', score: scores.commerce, color: '#f59e0b', icon: '📈' },
    { category: 'Leadership & People', score: scores.leadership, color: '#10b981', icon: '👥' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.step}>STEP 4 OF 8</span>
        <h1 style={styles.title}>Scoring & Weightage Algorithm</h1>
        <p style={styles.subtitle}>Based on your 35+ answers across 7 modules</p>
      </div>

      <div style={styles.scoresContainer}>
        {scoreCategories.map((item, index) => (
          <div key={index} style={styles.scoreCard}>
            <div style={styles.scoreHeader}>
              <div style={styles.scoreIcon}>{item.icon}</div>
              <div style={styles.scoreInfo}>
                <span style={styles.category}>{item.category}</span>
                <span style={styles.scoreValue}>{item.score}/100</span>
              </div>
            </div>
            <div style={styles.scoreBar}>
              <div style={{
                ...styles.scoreFill,
                width: `${item.score}%`,
                background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`
              }}></div>
            </div>
            <div style={styles.scoreStatus}>
              {item.score >= 70 ? 'Excellent! 🎉' : item.score >= 50 ? 'Good 👍' : 'Needs Improvement 📚'}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.totalScoreCard}>
        <div style={styles.totalScoreLabel}>Overall Assessment Score</div>
        <div style={styles.totalScoreValue}>{scores.total}/100</div>
        <div style={styles.totalScoreRing}>
          <div style={{...styles.ringFill, width: `${scores.total}%`}}></div>
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
  loadingContainer: {
    textAlign: 'center',
    marginTop: '4rem'
  },
  loader: {
    width: '50px',
    height: '50px',
    border: '3px solid rgba(168,85,247,0.3)',
    borderTop: '3px solid #a855f7',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto'
  },
  loadingText: {
    color: 'white',
    marginTop: '1rem'
  },
  header: {
    marginBottom: '3rem',
    textAlign: 'center'
  },
  step: {
    color: '#a855f7',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'block',
    marginBottom: '0.5rem'
  },
  title: {
    fontSize: '2rem',
    color: 'white',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#aaa',
    fontSize: '0.9rem'
  },
  scoresContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  scoreCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    padding: '1.5rem',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  scoreHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  scoreIcon: {
    fontSize: '2rem'
  },
  scoreInfo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  category: {
    fontSize: '1.1rem',
    color: 'white'
  },
  scoreValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#a855f7'
  },
  scoreBar: {
    height: '10px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '5px',
    marginBottom: '0.5rem'
  },
  scoreFill: {
    height: '100%',
    borderRadius: '5px'
  },
  scoreStatus: {
    fontSize: '0.8rem',
    color: '#aaa'
  },
  totalScoreCard: {
    textAlign: 'center',
    padding: '2rem',
    background: 'rgba(168, 85, 247, 0.1)',
    borderRadius: '20px',
    marginBottom: '2rem',
    border: '1px solid rgba(168, 85, 247, 0.3)'
  },
  totalScoreLabel: {
    fontSize: '0.9rem',
    color: '#aaa',
    marginBottom: '0.5rem'
  },
  totalScoreValue: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#a855f7'
  },
  totalScoreRing: {
    width: '100px',
    height: '100px',
    margin: '1rem auto',
    background: 'rgba(168, 85, 247, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ringFill: {
    width: '70%',
    height: '70%',
    background: '#a855f7',
    borderRadius: '50%'
  },
  button: {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(135deg, #a855f7, #4f46e5)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default Scoring;