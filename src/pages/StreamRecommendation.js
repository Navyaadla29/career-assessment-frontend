import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateAllScores } from '../utils/scoreCalculator';

function StreamRecommendation() {
  const navigate = useNavigate();
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scores = calculateAllScores();
    generateRecommendation(scores);
  }, []);

  const generateRecommendation = (scores) => {
    const { aptitude, creativity, commerce, leadership } = scores;
    
    // Find the highest score to recommend the best stream
    const maxScore = Math.max(aptitude, creativity, commerce, leadership);
    
    if (aptitude === maxScore && aptitude >= creativity && aptitude >= commerce && aptitude >= leadership) {
      setRecommendation({
        stream: '🔬 Science with Mathematics (PCM)',
        degree: 'B.Tech / B.E. / B.Sc in Computer Science, AI, Data Science, or Engineering',
        strength: `Your exceptional Aptitude & Logic score of ${aptitude}% shows strong analytical skills.`,
        reason: 'You excel in logical reasoning, problem-solving, and mathematical thinking - perfect for technology and engineering fields.',
        color: '#a855f7'
      });
    } else if (creativity === maxScore && creativity >= aptitude && creativity >= commerce && creativity >= leadership) {
      setRecommendation({
        stream: '🎨 Arts & Humanities',
        degree: 'B.A. / B.Des / BFA in Design, Literature, Media, Fine Arts, or Animation',
        strength: `Your exceptional Creativity & Expression score of ${creativity}% shows strong artistic abilities.`,
        reason: 'You have strong creative thinking, artistic expression, and imagination - perfect for design, media, and creative fields.',
        color: '#ec4899'
      });
    } else if (commerce === maxScore && commerce >= aptitude && commerce >= creativity && commerce >= leadership) {
      setRecommendation({
        stream: '📊 Commerce with Mathematics',
        degree: 'B.Com / BBA / CA / CS / CMA / Economics',
        strength: `Your exceptional Commerce & Finance score of ${commerce}% shows strong business acumen.`,
        reason: 'You have strong numerical ability, business understanding, and analytical skills - perfect for finance, business, and commerce fields.',
        color: '#f59e0b'
      });
    } else if (leadership === maxScore && leadership >= aptitude && leadership >= creativity && leadership >= commerce) {
      setRecommendation({
        stream: '👥 Humanities / Political Science / Psychology',
        degree: 'B.A. / BBA / Law / Management Studies / Public Administration',
        strength: `Your exceptional Leadership & People score of ${leadership}% shows strong people skills.`,
        reason: 'You have strong leadership abilities, communication skills, and people management - perfect for law, management, and administrative roles.',
        color: '#10b981'
      });
    } else {
      // Balanced profile
      setRecommendation({
        stream: '🌟 Balanced Stream - Science with Optional Subjects',
        degree: 'B.Sc / B.Tech / Integrated Programs / Liberal Arts',
        strength: `You have a balanced profile across multiple areas.`,
        reason: 'Your scores are well-distributed across all categories. Science stream keeps all career options open while you explore your strengths.',
        color: '#a855f7'
      });
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div className="loader"></div>
        <p>Analyzing your strengths...</p>
      </div>
    );
  }

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
            <h3 style={styles.sectionTitle}>YOUR STRENGTH</h3>
            <p style={styles.text}>{recommendation.strength}</p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionIcon}>💡</div>
          <div style={styles.sectionContent}>
            <h3 style={styles.sectionTitle}>WHY THIS STREAM?</h3>
            <p style={styles.text}>{recommendation.reason}</p>
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
  container: { maxWidth: '900px', margin: '2rem auto', padding: '2rem' },
  loadingContainer: { textAlign: 'center', marginTop: '4rem', color: 'white' },
  header: { marginBottom: '2rem', textAlign: 'center' },
  step: { color: '#a855f7', fontSize: '0.9rem', fontWeight: '600', display: 'block', marginBottom: '0.5rem' },
  title: { fontSize: '2rem', color: 'white' },
  card: { background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', padding: '2rem', borderRadius: '20px', marginBottom: '2rem' },
  recommendedBadge: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #a855f7, #4f46e5)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1rem', fontSize: '0.8rem', fontWeight: '600', color: 'white' },
  badgeIcon: { fontSize: '1rem' },
  streamName: { fontSize: '1.8rem', marginBottom: '1rem', color: 'white' },
  divider: { height: '2px', background: 'linear-gradient(90deg, #a855f7, transparent)', margin: '1.5rem 0' },
  section: { display: 'flex', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' },
  sectionIcon: { fontSize: '2rem' },
  sectionContent: { flex: 1 },
  sectionTitle: { color: '#a855f7', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: '600' },
  text: { color: 'white', fontSize: '1rem', lineHeight: '1.6' },
  button: { width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #a855f7, #4f46e5)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }
};

export default StreamRecommendation;