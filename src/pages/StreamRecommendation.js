import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateAllScores } from '../utils/scoreCalculator';

function StreamRecommendation() {
  const navigate = useNavigate();
  const [recommendation, setRecommendation] = useState({
    stream: 'Science (PCM)',
    degree: 'B.Tech / B.Sc in Computer Science',
    strength: 'Requires strong logical reasoning and comfort with quantitative subjects like Algebra and Math.'
  });

  useEffect(() => {
    const scores = calculateAllScores();
    generateRecommendation(scores);
  }, []);

  const generateRecommendation = (scores) => {
    const { aptitude, creativity, commerce, leadership } = scores;

    // Find the highest score to determine best stream
    const maxScore = Math.max(aptitude, creativity, commerce, leadership);

    if (aptitude === maxScore && aptitude > 60) {
      setRecommendation({
        stream: '🚀 Science (PCM)',
        degree: 'B.Tech / B.Sc in Computer Science / Engineering',
        strength: 'Your strong analytical and problem-solving skills make you perfect for technology and engineering fields.'
      });
    } else if (creativity === maxScore && creativity > 55) {
      setRecommendation({
        stream: '🎨 Arts & Humanities',
        degree: 'B.A. / B.Des in Design, Literature, or Media',
        strength: 'Your creative thinking and expression skills are exceptional for arts and design fields.'
      });
    } else if (commerce === maxScore && commerce > 55) {
      setRecommendation({
        stream: '📊 Commerce with Mathematics',
        degree: 'B.Com / BBA / CA / CS',
        strength: 'Your numerical and business acumen make you ideal for commerce and finance careers.'
      });
    } else if (leadership === maxScore && leadership > 55) {
      setRecommendation({
        stream: '👥 Humanities with Political Science / Psychology',
        degree: 'B.A. / BBA / Law / Management Studies',
        strength: 'Your leadership and people skills are excellent for management and administrative roles.'
      });
    } else {
      // Balanced profile - default to Science
      setRecommendation({
        stream: '🌟 Balanced Stream - Science with Optional Subjects',
        degree: 'B.Sc / B.Tech / Integrated Programs',
        strength: 'You have a balanced profile. Science stream keeps all career options open.'
      });
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stream & Subject Recommendation Engine</h1>

      <div style={styles.card}>
        <div style={styles.recommendedBadge}>
          <span style={styles.badgeIcon}>🏆</span>
          RECOMMENDED STREAM
        </div>
        <h2 style={styles.streamName}>{recommendation.stream}</h2>

        <div style={styles.divider}></div>

        <div style={styles.section}>
          <div style={styles.sectionIcon}>🎓</div>
          <div style={styles.sectionContent}>
            <h3 style={styles.sectionTitle}>COURSE / DEGREE PATH</h3>
            <p style={styles.text}>{recommendation.degree}</p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionIcon}>⚡</div>
          <div style={styles.sectionContent}>
            <h3 style={styles.sectionTitle}>ACADEMIC STRENGTH REQUIRED</h3>
            <p style={styles.text}>{recommendation.strength}</p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionIcon}>💡</div>
          <div style={styles.sectionContent}>
            <h3 style={styles.sectionTitle}>ALTERNATIVE PATHS</h3>
            <p style={styles.text}>• Integrated Dual Degree Programs<br/>• Professional Certifications alongside degree<br/>• Study Abroad Opportunities</p>
          </div>
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
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '2rem'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: 'white',
    background: 'linear-gradient(135deg, #fff, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    padding: '2rem',
    borderRadius: '20px',
    marginBottom: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  recommendedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'linear-gradient(135deg, #a855f7, #4f46e5)',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    marginBottom: '1rem',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'white'
  },
  badgeIcon: {
    fontSize: '1rem'
  },
  streamName: {
    fontSize: '2.2rem',
    marginBottom: '1.5rem',
    color: 'white'
  },
  divider: {
    height: '2px',
    background: 'linear-gradient(90deg, #a855f7, transparent)',
    margin: '1.5rem 0'
  },
  section: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px'
  },
  sectionIcon: {
    fontSize: '2rem'
  },
  sectionContent: {
    flex: 1
  },
  sectionTitle: {
    color: '#a855f7',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
    fontWeight: '600'
  },
  text: {
    color: 'white',
    fontSize: '1rem',
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
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default StreamRecommendation;