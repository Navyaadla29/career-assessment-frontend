import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateAllScores } from '../utils/scoreCalculator';

function StreamRecommendation() {
  const navigate = useNavigate();
  const [recommendation, setRecommendation] = useState({
    stream: '',
    degree: '',
    strength: '',
    alternativePaths: []
  });

  useEffect(() => {
    const scores = calculateAllScores();
    generateRecommendation(scores);
  }, []);

  const generateRecommendation = (scores) => {
    const { aptitude, creativity, commerce, leadership } = scores;

    // Find highest score
    const scoresList = [
      { name: 'aptitude', value: aptitude, stream: 'Science & Technology' },
      { name: 'creativity', value: creativity, stream: 'Arts & Humanities' },
      { name: 'commerce', value: commerce, stream: 'Commerce & Business' },
      { name: 'leadership', value: leadership, stream: 'Management & Law' }
    ];
    
    const maxScoreItem = scoresList.reduce((max, item) => item.value > max.value ? item : max, scoresList[0]);
    const maxScore = maxScoreItem.value;

    if (aptitude === maxScore && aptitude > 50) {
      setRecommendation({
        stream: '🔬 Science (PCM/PCB)',
        degree: 'B.Tech / B.E. / B.Sc in Computer Science, AI, Data Science, or Engineering',
        strength: 'Your strong analytical and problem-solving skills (score: {aptitude}/100) make you perfect for technology and engineering fields.',
        alternativePaths: ['Data Science', 'Artificial Intelligence', 'Robotics', 'Cybersecurity']
      });
    } else if (creativity === maxScore && creativity > 50) {
      setRecommendation({
        stream: '🎨 Arts & Humanities',
        degree: 'B.A. / B.Des / BFA in Design, Literature, Media, Fine Arts, or Animation',
        strength: 'Your creative thinking and expression skills (score: {creativity}/100) are exceptional for arts, design, and creative fields.',
        alternativePaths: ['Graphic Design', 'Animation', 'Content Creation', 'Film Making']
      });
    } else if (commerce === maxScore && commerce > 50) {
      setRecommendation({
        stream: '📊 Commerce with Mathematics',
        degree: 'B.Com / BBA / CA / CS / CMA / Economics',
        strength: 'Your numerical and business acumen (score: {commerce}/100) make you ideal for commerce, finance, and business careers.',
        alternativePaths: ['Investment Banking', 'Financial Analysis', 'Entrepreneurship', 'Marketing']
      });
    } else if (leadership === maxScore && leadership > 50) {
      setRecommendation({
        stream: '👥 Humanities / Political Science / Psychology',
        degree: 'B.A. / BBA / Law / Management Studies / Public Administration',
        strength: 'Your leadership and people skills (score: {leadership}/100) are excellent for management, law, and administrative roles.',
        alternativePaths: ['Corporate Law', 'Human Resources', 'Public Policy', 'Event Management']
      });
    } else {
      setRecommendation({
        stream: '🌟 Balanced Stream - Science with Optional Subjects',
        degree: 'B.Sc / B.Tech / Integrated Programs / Liberal Arts',
        strength: 'You have a balanced profile across multiple areas. Science stream keeps all career options open.',
        alternativePaths: ['Interdisciplinary Studies', 'Liberal Arts', 'Integrated Programs']
      });
    }
  };

  // Format the strength text with actual scores
  const scores = calculateAllScores();
  const strengthText = recommendation.strength
    .replace('{aptitude}', scores.aptitude)
    .replace('{creativity}', scores.creativity)
    .replace('{commerce}', scores.commerce)
    .replace('{leadership}', scores.leadership);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.step}>STEP 6 OF 8</span>
        <h1 style={styles.title}>Stream & Subject Recommendation Engine</h1>
      </div>

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
            <p style={styles.text}>{strengthText}</p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionIcon}>💡</div>
          <div style={styles.sectionContent}>
            <h3 style={styles.sectionTitle}>ALTERNATIVE SPECIALIZATIONS</h3>
            <div style={styles.alternativeTags}>
              {recommendation.alternativePaths.map((path, idx) => (
                <span key={idx} style={styles.alternativeTag}>{path}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionIcon}>📈</div>
          <div style={styles.sectionContent}>
            <h3 style={styles.sectionTitle}>CAREER OPPORTUNITIES</h3>
            <p style={styles.text}>• High demand in India & Global Markets<br/>• Excellent salary potential with experience<br/>• Opportunities in both private and public sectors<br/>• Scope for entrepreneurship and innovation</p>
          </div>
        </div>
      </div>

      <button onClick={() => navigate('/roadmap')} style={styles.button}>
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
  header: {
    marginBottom: '2rem',
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
    marginBottom: '0.5rem',
    color: 'white'
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
    fontSize: '2rem',
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
  alternativeTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.5rem'
  },
  alternativeTag: {
    padding: '0.3rem 0.8rem',
    background: 'rgba(168,85,247,0.2)',
    borderRadius: '20px',
    color: '#a855f7',
    fontSize: '0.8rem'
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

export default StreamRecommendation;