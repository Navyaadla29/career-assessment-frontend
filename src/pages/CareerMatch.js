import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateAllScores, getCareerRecommendation } from '../utils/scoreCalculator';

function CareerMatch() {
  const navigate = useNavigate();
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scores = calculateAllScores();
    const recommendation = getCareerRecommendation(scores);
    setCareer(recommendation);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div className="loader" style={styles.loader}></div>
        <p style={styles.loadingText}>Finding your perfect career match...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.step}>STEP 5 OF 8</span>
        <h1 style={styles.title}>Career Matching Engine</h1>
      </div>

      <div style={styles.matchCard}>
        <div style={styles.matchLabel}>TOP MATCH</div>
        <h2 style={styles.careerName}>{career.career}</h2>
        
        <div style={styles.scoreCircle}>
          <div style={styles.scoreNumber}>{career.match}%</div>
          <div style={styles.scoreLabel}>Fit Accuracy</div>
        </div>

        <div style={styles.category}>
          {career.industry}
        </div>
        
        <div style={styles.growth}>
          📈 {career.growth} Growth Projected
        </div>

        <p style={styles.description}>
          {career.description}
        </p>
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
    color: 'white'
  },
  matchCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    padding: '3rem',
    borderRadius: '20px',
    textAlign: 'center',
    marginBottom: '3rem',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  matchLabel: {
    color: '#a855f7',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  careerName: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: 'white'
  },
  scoreCircle: {
    width: '150px',
    height: '150px',
    margin: '0 auto 2rem',
    background: 'linear-gradient(135deg, #a855f7, #4f46e5)',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 30px rgba(168,85,247,0.5)'
  },
  scoreNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white'
  },
  scoreLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.8)'
  },
  category: {
    color: '#aaa',
    fontSize: '1rem',
    marginBottom: '0.5rem'
  },
  growth: {
    color: '#10b981',
    marginBottom: '1rem'
  },
  description: {
    color: '#aaa',
    lineHeight: '1.6'
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
    cursor: 'pointer'
  }
};

export default CareerMatch;