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
    
    // Create array of scores to find the highest
    const categories = [
      { name: 'aptitude', value: aptitude, label: 'Aptitude & Logic', stream: '🔬 Science (PCM/PCB)', degree: 'B.Tech / B.E. / B.Sc in Computer Science, AI, Data Science, or Engineering', color: '#a855f7' },
      { name: 'creativity', value: creativity, label: 'Creativity & Expression', stream: '🎨 Arts & Humanities', degree: 'B.A. / B.Des / BFA in Design, Literature, Media, Fine Arts, or Animation', color: '#ec4899' },
      { name: 'commerce', value: commerce, label: 'Commerce & Finance', stream: '📊 Commerce with Mathematics', degree: 'B.Com / BBA / CA / CS / CMA / Economics', color: '#f59e0b' },
      { name: 'leadership', value: leadership, label: 'Leadership & People', stream: '👥 Humanities / Political Science / Psychology', degree: 'B.A. / BBA / Law / Management Studies / Public Administration', color: '#10b981' }
    ];
    
    // Find the highest score category
    const sorted = [...categories].sort((a, b) => b.value - a.value);
    const topCategory = sorted[0];
    const secondCategory = sorted[1];
    
    setRecommendation({
      topCategory: topCategory,
      secondCategory: secondCategory,
      scores: scores
    });
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

  const { topCategory, secondCategory, scores } = recommendation;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.step}>STEP 6 OF 8</span>
        <h1 style={styles.title}>Stream & Subject Recommendation Engine</h1>
      </div>

      <div style={styles.card}>
        <div style={styles.recommendedBadge}>
          <span style={styles.badgeIcon}>🏆</span>
          YOUR TOP STREAM MATCH
        </div>
        <h2 style={styles.streamName}>{topCategory.stream}</h2>

        <div style={styles.scoreDisplay}>
          <div style={styles.scoreCircle}>
            <span style={styles.scoreNumber}>{topCategory.value}%</span>
            <span style={styles.scoreLabel}>Match Score</span>
          </div>
          <div style={styles.categoryLabel}>{topCategory.label}</div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.section}>
          <div style={styles.sectionIcon}>🎓</div>
          <div style={styles.sectionContent}>
            <h3 style={styles.sectionTitle}>COURSE / DEGREE PATH</h3>
            <p style={styles.text}>{topCategory.degree}</p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionIcon}>⚡</div>
          <div style={styles.sectionContent}>
            <h3 style={styles.sectionTitle}>YOUR STRENGTH</h3>
            <p style={styles.text}>Your score of <strong>{topCategory.value}%</strong> in <strong>{topCategory.label}</strong> shows exceptional potential in this field.</p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionIcon}>🔄</div>
          <div style={styles.sectionContent}>
            <h3 style={styles.sectionTitle}>ALTERNATIVE STREAM</h3>
            <p style={styles.text}>Your second highest score is in <strong>{secondCategory.label}</strong> ({secondCategory.value}%). Consider <strong>{secondCategory.stream}</strong> as a strong alternative.</p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionIcon}>📈</div>
          <div style={styles.sectionContent}>
            <h3 style={styles.sectionTitle}>CAREER OUTLOOK</h3>
            <p style={styles.text}>This field has <strong>high growth potential</strong> in India and globally. Opportunities in both private and public sectors with excellent salary prospects.</p>
          </div>
        </div>
      </div>

      <div style={styles.scoreSummary}>
        <h3 style={styles.summaryTitle}>Your Complete Profile Scores</h3>
        <div style={styles.summaryGrid}>
          <div style={styles.summaryItem}><span>Aptitude & Logic:</span> <strong>{scores.aptitude}%</strong></div>
          <div style={styles.summaryItem}><span>Creativity & Expression:</span> <strong>{scores.creativity}%</strong></div>
          <div style={styles.summaryItem}><span>Commerce & Finance:</span> <strong>{scores.commerce}%</strong></div>
          <div style={styles.summaryItem}><span>Leadership & People:</span> <strong>{scores.leadership}%</strong></div>
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
  title: { fontSize: '2rem', marginBottom: '0.5rem', color: 'white' },
  card: { background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', padding: '2rem', borderRadius: '20px', marginBottom: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)' },
  recommendedBadge: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #a855f7, #4f46e5)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1rem', fontSize: '0.8rem', fontWeight: '600', color: 'white' },
  badgeIcon: { fontSize: '1rem' },
  streamName: { fontSize: '1.8rem', marginBottom: '1rem', color: 'white' },
  scoreDisplay: { textAlign: 'center', marginBottom: '1.5rem' },
  scoreCircle: { width: '100px', height: '100px', background: 'linear-gradient(135deg, #a855f7, #4f46e5)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem' },
  scoreNumber: { fontSize: '1.8rem', fontWeight: 'bold', color: 'white' },
  scoreLabel: { fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' },
  categoryLabel: { color: '#a855f7', fontSize: '0.9rem' },
  divider: { height: '2px', background: 'linear-gradient(90deg, #a855f7, transparent)', margin: '1.5rem 0' },
  section: { display: 'flex', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' },
  sectionIcon: { fontSize: '2rem' },
  sectionContent: { flex: 1 },
  sectionTitle: { color: '#a855f7', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: '600' },
  text: { color: 'white', fontSize: '1rem', lineHeight: '1.6' },
  scoreSummary: { background: 'rgba(255, 255, 255, 0.05)', borderRadius: '15px', padding: '1.5rem', marginBottom: '2rem' },
  summaryTitle: { color: 'white', marginBottom: '1rem', fontSize: '1.1rem' },
  summaryGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem' },
  summaryItem: { display: 'flex', justifyContent: 'space-between', color: '#aaa', fontSize: '0.9rem', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' },
  button: { width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #a855f7, #4f46e5)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }
};

export default StreamRecommendation;