import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Discover Your True Potential';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 80);
    return () => clearInterval(typing);
  }, []);

  const features = [
    { icon: '🎯', title: '7-Dimensional Analysis', desc: 'Interest, Aptitude, Personality, Values, Work Style, Academic, Future Goals' },
    { icon: '📊', title: 'Real-Time Scoring', desc: 'Advanced algorithm calculates your unique profile scores' },
    { icon: '🚀', title: '5-Year Roadmap', desc: 'Personalized action plan with milestones and checkpoints' },
    { icon: '💡', title: 'Smart Recommendations', desc: 'AI-powered career matches with skill gap analysis' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>
          {displayText}
          <span style={styles.cursor}>|</span>
        </h1>
        <p style={styles.subtitle}>
          Take our incredibly accurate, AI-powered multidimensional assessment to find your ideal career path and action plan.
        </p>
        
        <div style={styles.statsRow}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>7</div>
            <div style={styles.statLabel}>Assessment Modules</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>35+</div>
            <div style={styles.statLabel}>Questions</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>100+</div>
            <div style={styles.statLabel}>Career Paths</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>5</div>
            <div style={styles.statLabel}>Year Roadmap</div>
          </div>
        </div>

        <Link to="/profile">
          <button style={styles.ctaButton}>
            Begin Your Journey →
          </button>
        </Link>
      </div>

      <div style={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} style={styles.featureCard}>
            <div style={styles.featureIcon}>{feature.icon}</div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDesc}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    minHeight: '100vh'
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 0'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #fff, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1.5rem'
  },
  cursor: {
    display: 'inline-block',
    width: '3px',
    animation: 'blink 1s infinite'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'rgba(255,255,255,0.8)',
    maxWidth: '700px',
    margin: '0 auto 2rem',
    lineHeight: '1.6'
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  },
  statCard: {
    textAlign: 'center',
    padding: '1rem'
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#a855f7'
  },
  statLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.6)'
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #4f46e5, #a855f7)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '4rem'
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  featureIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  featureTitle: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: 'white'
  },
  featureDesc: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: '1.5'
  }
};

export default Home;