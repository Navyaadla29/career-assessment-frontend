import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Discover Your <span style={styles.gradient}>True Potential</span></h1>
        <p style={styles.subtitle}>
          Take our incredibly accurate, AI-powered multidimensional assessment 
          to find your ideal career path and action plan.
        </p>
      </div>

      <div style={styles.features}>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>📊</div>
          <h3 style={styles.featureTitle}>5-Dimensional Analysis</h3>
          <p style={styles.featureDesc}>Evaluates Interests, Aptitude, Personality, Values, and Academic Strength.</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🎯</div>
          <h3 style={styles.featureTitle}>5-Year Action Plan</h3>
          <p style={styles.featureDesc}>Get a step-by-step sequential roadmap tailored to your specific goals and traits.</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>⚡</div>
          <h3 style={styles.featureTitle}>Priority Match Scoring</h3>
          <p style={styles.featureDesc}>We rank your best alternative careers through algorithmic probability vectors.</p>
        </div>
      </div>

      <div style={styles.beginSection}>
        <h2 style={styles.beginTitle}>Begin Assessment</h2>
        <div style={styles.formCard}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input style={styles.input} type="text" placeholder="John Doe" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input style={styles.input} type="email" placeholder="john@example.com" />
          </div>
          <Link to="/profile">
            <button style={styles.button}>Continue to Profile Capture →</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 0 2rem'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '1rem'
  },
  gradient: {
    background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#aaa',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    padding: '4rem 0'
  },
  featureCard: {
    background: '#1e1e2f',
    padding: '2rem',
    borderRadius: '20px',
    textAlign: 'center'
  },
  featureIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  featureTitle: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: 'white'
  },
  featureDesc: {
    color: '#aaa',
    fontSize: '0.95rem',
    lineHeight: '1.6'
  },
  beginSection: {
    textAlign: 'center',
    padding: '2rem 0'
  },
  beginTitle: {
    fontSize: '2rem',
    marginBottom: '2rem'
  },
  formCard: {
    maxWidth: '400px',
    margin: '0 auto',
    background: '#1e1e2f',
    padding: '2rem',
    borderRadius: '20px'
  },
  formGroup: {
    marginBottom: '1.5rem',
    textAlign: 'left'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#aaa',
    fontSize: '0.9rem'
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

export default Home;