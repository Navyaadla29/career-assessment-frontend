import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateAllScores, getCareerRecommendation } from '../utils/scoreCalculator';

function Dashboard() {
  const navigate = useNavigate();
  const [scores, setScores] = useState(null);
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculatedScores = calculateAllScores();
    const careerMatch = getCareerRecommendation(calculatedScores);
    setScores(calculatedScores);
    setCareer(careerMatch);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div className="loader"></div>
        <p>Loading your results...</p>
      </div>
    );
  }

  const scoreCategories = [
    { name: 'Aptitude & Logic', value: scores.aptitude, icon: '🧠', color: '#a855f7' },
    { name: 'Creativity & Expression', value: scores.creativity, icon: '🎨', color: '#ec4899' },
    { name: 'Commerce & Finance', value: scores.commerce, icon: '📊', color: '#f59e0b' },
    { name: 'Leadership & People', value: scores.leadership, icon: '👥', color: '#10b981' }
  ];

  const roadmap = [
    { year: 'Year 1', tasks: ['Complete 11th & 12th with focus on core subjects', 'Build foundational knowledge in your area of interest'] },
    { year: 'Year 2', tasks: ['Score well in board exams', 'Prepare for entrance exams (JEE/NEET/CLAT etc.)', 'Participate in relevant competitions'] },
    { year: 'Year 3', tasks: ['Start undergraduate degree in chosen field', 'Take internships and gain practical experience', 'Build network with professionals'] },
    { year: 'Year 4', tasks: ['Focus on specialization', 'Work on real-world projects', 'Prepare for placements or higher studies'] },
    { year: 'Year 5', tasks: ['Complete degree with good grades', 'Secure job or admission in master\'s program', 'Begin professional career'] }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Career Dashboard</h1>
      <p style={styles.subtitle}>Personalized insights based on your assessment answers</p>

      {/* Top Career Match Card */}
      <div style={styles.matchCard}>
        <div style={styles.matchBadge}>✨ YOUR TOP CAREER MATCH</div>
        <h2 style={styles.careerName}>{career.career}</h2>
        <div style={styles.matchPercentage}>
          <span style={styles.percentageNumber}>{career.match}%</span>
          <span style={styles.percentageLabel}>Match Score</span>
        </div>
        <div style={styles.industryTag}>{career.industry}</div>
        <div style={styles.growthTag}>📈 {career.growth} Growth Projected</div>
        <p style={styles.description}>{career.description}</p>
      </div>

      {/* Score Cards Grid */}
      <h3 style={styles.sectionTitle}>Your Assessment Scores</h3>
      <div style={styles.scoreGrid}>
        {scoreCategories.map((cat, idx) => (
          <div key={idx} style={styles.scoreCard}>
            <div style={styles.scoreIcon}>{cat.icon}</div>
            <div style={styles.scoreInfo}>
              <div style={styles.scoreName}>{cat.name}</div>
              <div style={styles.scoreValue}>{cat.value}/100</div>
              <div style={styles.scoreBar}>
                <div style={{...styles.scoreFill, width: `${cat.value}%`, background: cat.color}}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills to Develop */}
      <h3 style={styles.sectionTitle}>Skills to Develop</h3>
      <div style={styles.skillsContainer}>
        {scores.aptitude < 70 && <span style={styles.skillTag}>🔍 Logical Reasoning</span>}
        {scores.creativity < 70 && <span style={styles.skillTag}>🎨 Creative Thinking</span>}
        {scores.commerce < 70 && <span style={styles.skillTag}>📊 Financial Literacy</span>}
        {scores.leadership < 70 && <span style={styles.skillTag}>👥 Leadership & Communication</span>}
        {scores.aptitude >= 70 && <span style={styles.skillTag}>✅ Problem Solving (Strengthened)</span>}
        {scores.creativity >= 70 && <span style={styles.skillTag}>✅ Creative Expression (Strengthened)</span>}
      </div>

      {/* 5-Year Roadmap */}
      <h3 style={styles.sectionTitle}>Your 5-Year Action Plan</h3>
      <div style={styles.roadmapContainer}>
        {roadmap.map((item, idx) => (
          <div key={idx} style={styles.roadmapItem}>
            <div style={styles.roadmapYear}>{item.year}</div>
            <ul style={styles.roadmapList}>
              {item.tasks.map((task, tIdx) => (
                <li key={tIdx} style={styles.roadmapTask}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Alternate Careers */}
      <h3 style={styles.sectionTitle}>Alternate Career Paths</h3>
      <div style={styles.alternateContainer}>
        <div style={styles.alternateCard}>
          <span style={styles.alternateIcon}>💻</span>
          <div>
            <div style={styles.alternateTitle}>Data Analyst</div>
            <div style={styles.alternateDesc}>Use data to drive business decisions</div>
          </div>
        </div>
        <div style={styles.alternateCard}>
          <span style={styles.alternateIcon}>🎨</span>
          <div>
            <div style={styles.alternateTitle}>UX Designer</div>
            <div style={styles.alternateDesc}>Create intuitive user experiences</div>
          </div>
        </div>
        <div style={styles.alternateCard}>
          <span style={styles.alternateIcon}>📈</span>
          <div>
            <div style={styles.alternateTitle}>Business Consultant</div>
            <div style={styles.alternateDesc}>Help organizations improve performance</div>
          </div>
        </div>
      </div>

      <button onClick={() => navigate('/profile')} style={styles.button}>
        Start New Assessment →
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '2rem auto',
    padding: '2rem'
  },
  loadingContainer: {
    textAlign: 'center',
    marginTop: '4rem',
    color: 'white'
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    color: 'white',
    marginBottom: '0.5rem'
  },
  subtitle: {
    textAlign: 'center',
    color: '#aaa',
    marginBottom: '2rem'
  },
  matchCard: {
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '2rem',
    textAlign: 'center',
    marginBottom: '2rem',
    border: '1px solid rgba(168,85,247,0.3)'
  },
  matchBadge: {
    color: '#a855f7',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  },
  careerName: {
    fontSize: '2rem',
    color: 'white',
    marginBottom: '1rem'
  },
  matchPercentage: {
    marginBottom: '1rem'
  },
  percentageNumber: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#a855f7'
  },
  percentageLabel: {
    fontSize: '0.9rem',
    color: '#aaa',
    marginLeft: '0.5rem'
  },
  industryTag: {
    display: 'inline-block',
    padding: '0.3rem 1rem',
    background: 'rgba(168,85,247,0.2)',
    borderRadius: '20px',
    color: '#a855f7',
    fontSize: '0.8rem',
    marginBottom: '0.5rem'
  },
  growthTag: {
    color: '#10b981',
    fontSize: '0.9rem',
    marginBottom: '1rem'
  },
  description: {
    color: '#ccc',
    lineHeight: '1.6'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    color: 'white',
    marginBottom: '1rem',
    marginTop: '2rem'
  },
  scoreGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginBottom: '1rem'
  },
  scoreCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  scoreIcon: {
    fontSize: '2rem'
  },
  scoreInfo: {
    flex: 1
  },
  scoreName: {
    color: '#aaa',
    fontSize: '0.8rem'
  },
  scoreValue: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  scoreBar: {
    height: '6px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '3px',
    marginTop: '0.3rem'
  },
  scoreFill: {
    height: '100%',
    borderRadius: '3px'
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem',
    marginBottom: '1rem'
  },
  skillTag: {
    padding: '0.5rem 1rem',
    background: 'rgba(168,85,247,0.2)',
    borderRadius: '20px',
    color: '#a855f7',
    fontSize: '0.9rem'
  },
  roadmapContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    marginBottom: '1rem'
  },
  roadmapItem: {
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    padding: '1rem'
  },
  roadmapYear: {
    color: '#a855f7',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  roadmapList: {
    marginLeft: '1.5rem',
    color: '#ccc'
  },
  roadmapTask: {
    marginBottom: '0.3rem',
    fontSize: '0.9rem'
  },
  alternateContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginBottom: '2rem'
  },
  alternateCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem'
  },
  alternateIcon: {
    fontSize: '1.5rem'
  },
  alternateTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  },
  alternateDesc: {
    color: '#aaa',
    fontSize: '0.7rem'
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
    marginTop: '2rem'
  }
};

export default Dashboard;