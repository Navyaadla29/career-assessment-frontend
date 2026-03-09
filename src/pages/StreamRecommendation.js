import React from 'react';
import { useNavigate } from 'react-router-dom';

function StreamRecommendation() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stream & Subject Recommendation Engine</h1>

      <div style={styles.card}>
        <div style={styles.recommendedBadge}>RECOMMENDED STREAM</div>
        <h2 style={styles.streamName}>Science (PCM)</h2>

        <div style={styles.divider}></div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>COURSE / DEGREE PATH</h3>
          <p style={styles.text}>B.Tech / B.Sc in Computer Science</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>ACADEMIC STRENGTH REQUIRED</h3>
          <p style={styles.text}>
            Requires strong logical reasoning and comfort with quantitative subjects like Algebra and Math.
          </p>
        </div>
      </div>

      <button 
        onClick={() => navigate('/roadmap')} 
        style={styles.button}
      >
        Proceed to Career Roadmap →
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
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  card: {
    background: '#1e1e2f',
    padding: '2rem',
    borderRadius: '20px',
    marginBottom: '2rem'
  },
  recommendedBadge: {
    color: '#4f46e5',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  streamName: {
    fontSize: '2rem',
    marginBottom: '2rem'
  },
  divider: {
    height: '1px',
    background: '#333',
    margin: '1.5rem 0'
  },
  section: {
    marginBottom: '1.5rem'
  },
  sectionTitle: {
    color: '#aaa',
    fontSize: '0.9rem',
    marginBottom: '0.5rem'
  },
  text: {
    color: 'white',
    fontSize: '1rem',
    lineHeight: '1.6'
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

export default StreamRecommendation;