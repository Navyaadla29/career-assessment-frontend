import React from 'react';
import { useNavigate } from 'react-router-dom';

function Roadmap() {
  const navigate = useNavigate();

  const roadmapData = [
    { year: 'YEAR 1', description: 'Learn foundational programming (Python, JS)' },
    { year: 'YEAR 2', description: 'Build simple web applications and contribute to open source' },
    { year: 'YEAR 3', description: 'Specialize in a domain (Frontend, Backend, AI) and take internships' },
    { year: 'YEAR 4', description: 'Build a strong portfolio and practice Data Structures & Algorithms' },
    { year: 'YEAR 5', description: 'Secure a full-time SDE role and continuously upskill' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.step}>STEP 7 OF 8</span>
        <h1 style={styles.title}>Roadmap Generator</h1>
      </div>

      <p style={styles.subtitle}>Personal plan for Software Engineer</p>

      <div style={styles.timeline}>
        {roadmapData.map((item, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.year}>{item.year}</div>
            <div style={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => navigate('/dashboard')} 
        style={styles.button}
      >
        View Full Dashboard →
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
    marginBottom: '1rem'
  },
  step: {
    color: '#4f46e5',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'block',
    marginBottom: '0.5rem'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#aaa',
    fontSize: '1rem',
    marginBottom: '3rem'
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '3rem'
  },
  timelineItem: {
    background: '#1e1e2f',
    padding: '1.5rem',
    borderRadius: '10px'
  },
  year: {
    color: '#4f46e5',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  },
  description: {
    color: 'white',
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

export default Roadmap;