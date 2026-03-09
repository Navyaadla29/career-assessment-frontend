import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const alternatePaths = [
    { career: 'Product Manager', industry: 'Business & Management', match: '17%', salary: '$90,000-$160,000' },
    { career: 'UI/UX Designer', industry: 'Arts & Design', match: '12%', salary: '$70,000-$120,000' },
    { career: 'Financial Analyst', industry: 'Business & Management', match: '12%', salary: '$75,000-$130,000' }
  ];

  const skillTags = ['STEM', 'Algorithm Design', 'Coding', 'Mgt', 'Arts', 'System Architecture', 'Commerce', 'Debugging'];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Interactive Career Dashboard</h1>
        <div style={styles.headerButtons}>
          <button style={styles.exportBtn}>Export PDF</button>
          <button style={styles.roadmapBtn} onClick={() => navigate('/roadmap')}>
            View Full Roadmap →
          </button>
        </div>
      </div>

      <p style={styles.subtitle}>Real-time analysis for Navya Adla</p>

      {/* Optimal Match Section */}
      <div style={styles.matchCard}>
        <div style={styles.matchBadge}>OPTIMAL MATCH FOUND</div>
        <h2 style={styles.careerName}>Software Engineer</h2>
        <div style={styles.matchStats}>
          <span style={styles.matchPercent}>38%</span>
          <span style={styles.matchIndustry}>Technology & Engineering</span>
        </div>
        <div style={styles.growthBadge}>+25% (Next 5 Years) Growth</div>
        
        <div style={styles.scoreSection}>
          <div style={styles.scoreCircle}>
            <span style={styles.scoreNumber}>38</span>
            <span style={styles.scoreLabel}>Match Score</span>
          </div>
          <div style={styles.boostBadge}>+10% Boost Applied</div>
        </div>

        <p style={styles.description}>
          Your strong analytical and problem-solving skills align perfectly with software development.
        </p>
      </div>

      {/* Skill Grid */}
      <div style={styles.skillGrid}>
        <div style={styles.skillCard}>
          <h3 style={styles.cardTitle}>Aptitude Blueprint</h3>
          <div style={styles.skillBars}>
            <div style={styles.skillBar}>
              <span>Logical Reasoning</span>
              <div style={styles.barContainer}>
                <div style={{...styles.barFill, width: '85%'}}></div>
              </div>
            </div>
            <div style={styles.skillBar}>
              <span>Problem Solving</span>
              <div style={styles.barContainer}>
                <div style={{...styles.barFill, width: '78%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.skillCard}>
          <h3 style={styles.cardTitle}>Skill Gap Analyzer</h3>
          <p style={styles.skillGapText}>Check skills you've mastered to see your match score climb!</p>
          <div style={styles.tagsContainer}>
            {skillTags.map((tag, index) => (
              <span key={index} style={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Priority Alternate Paths */}
      <div style={styles.alternateSection}>
        <h3 style={styles.sectionTitle}>Priority Alternate Paths</h3>
        <div style={styles.tableHeader}>
          <span>Career Path</span>
          <span>Industry</span>
          <span>Match</span>
          <span>Salary Potential</span>
        </div>
        {alternatePaths.map((path, index) => (
          <div key={index} style={styles.tableRow}>
            <span>{path.career}</span>
            <span>{path.industry}</span>
            <span style={styles.matchText}>{path.match}</span>
            <span>{path.salary}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '2rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  title: {
    fontSize: '2rem'
  },
  headerButtons: {
    display: 'flex',
    gap: '1rem'
  },
  exportBtn: {
    padding: '0.5rem 1rem',
    background: '#2a2a3a',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  roadmapBtn: {
    padding: '0.5rem 1rem',
    background: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  subtitle: {
    color: '#aaa',
    marginBottom: '2rem'
  },
  matchCard: {
    background: '#1e1e2f',
    padding: '2rem',
    borderRadius: '20px',
    marginBottom: '2rem'
  },
  matchBadge: {
    color: '#4f46e5',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  careerName: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  matchStats: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '0.5rem'
  },
  matchPercent: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#4f46e5'
  },
  matchIndustry: {
    color: '#aaa'
  },
  growthBadge: {
    color: '#10b981',
    marginBottom: '1.5rem'
  },
  scoreSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '1.5rem'
  },
  scoreCircle: {
    width: '80px',
    height: '80px',
    background: '#4f46e5',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scoreNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  scoreLabel: {
    fontSize: '0.7rem'
  },
  boostBadge: {
    padding: '0.5rem 1rem',
    background: '#2a2a3a',
    borderRadius: '20px',
    color: '#4f46e5'
  },
  description: {
    color: '#aaa',
    lineHeight: '1.6'
  },
  skillGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  skillCard: {
    background: '#1e1e2f',
    padding: '1.5rem',
    borderRadius: '15px'
  },
  cardTitle: {
    marginBottom: '1rem',
    color: '#aaa'
  },
  skillBars: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  skillBar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem'
  },
  barContainer: {
    height: '8px',
    background: '#2a2a3a',
    borderRadius: '4px'
  },
  barFill: {
    height: '100%',
    background: '#4f46e5',
    borderRadius: '4px'
  },
  skillGapText: {
    color: '#aaa',
    marginBottom: '1rem'
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  },
  tag: {
    padding: '0.5rem 1rem',
    background: '#2a2a3a',
    borderRadius: '20px',
    fontSize: '0.9rem'
  },
  alternateSection: {
    background: '#1e1e2f',
    padding: '1.5rem',
    borderRadius: '15px'
  },
  sectionTitle: {
    marginBottom: '1rem'
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '2fr 1.5fr 0.5fr 2fr',
    padding: '0.75rem',
    background: '#2a2a3a',
    borderRadius: '8px',
    marginBottom: '0.5rem',
    color: '#aaa',
    fontSize: '0.9rem'
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 1.5fr 0.5fr 2fr',
    padding: '0.75rem',
    borderBottom: '1px solid #2a2a3a'
  },
  matchText: {
    color: '#4f46e5',
    fontWeight: '600'
  }
};

export default Dashboard;