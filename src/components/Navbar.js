import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const steps = [
    { path: '/', name: 'Home' },
    { path: '/profile', name: 'Profile' },
    { path: '/personal-dna', name: 'Personal' },
    { path: '/career-aspirations', name: 'Aspirations' },
    { path: '/scoring', name: 'Scoring' },
    { path: '/career-match', name: 'Match' },
    { path: '/stream-recommendation', name: 'Stream' },
    { path: '/roadmap', name: 'Roadmap' },
    { path: '/dashboard', name: 'Dashboard' }
  ];

  const currentStep = steps.findIndex(step => step.path === location.pathname);

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.container}>
          <Link to="/" style={styles.logo}>Career<span style={styles.logoHighlight}>Assessment</span></Link>
          <div style={styles.steps}>
            <span style={styles.stepText}>STEP {currentStep + 1} OF 8</span>
            <div style={styles.progressBar}>
              <div style={{...styles.progress, width: `${((currentStep + 1)/8)*100}%`}}></div>
            </div>
          </div>
        </div>
      </nav>
      <div style={styles.subNav}>
        {steps.slice(1).map((step, index) => (
          <Link 
            key={index} 
            to={step.path}
            style={{
              ...styles.subNavLink,
              color: location.pathname === step.path ? '#4f46e5' : '#888',
              borderBottom: location.pathname === step.path ? '2px solid #4f46e5' : 'none'
            }}
          >
            {step.name}
          </Link>
        ))}
      </div>
    </>
  );
}

const styles = {
  nav: {
    background: '#1e1e2f',
    padding: '1rem 2rem',
    borderBottom: '1px solid #333'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none'
  },
  logoHighlight: {
    color: '#4f46e5'
  },
  steps: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  stepText: {
    color: '#888',
    fontSize: '0.9rem'
  },
  progressBar: {
    width: '100px',
    height: '4px',
    background: '#333',
    borderRadius: '2px'
  },
  progress: {
    height: '100%',
    background: '#4f46e5',
    borderRadius: '2px'
  },
  subNav: {
    background: '#1a1a2e',
    padding: '0.5rem 2rem',
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    borderBottom: '1px solid #333'
  },
  subNavLink: {
    textDecoration: 'none',
    fontSize: '0.9rem',
    padding: '0.5rem 0'
  }
};

export default Navbar;