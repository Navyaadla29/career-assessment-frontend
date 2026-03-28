import React from 'react';
import { useNavigate } from 'react-router-dom';

function Roadmap() {
  const navigate = useNavigate();

  const roadmapData = [
    { 
      year: 'YEAR 1 (11th Grade)', 
      tasks: [
        'Complete 11th with focus on core subjects',
        'Start building foundational knowledge in your field',
        'Participate in relevant workshops and competitions',
        'Develop basic skills through online courses'
      ] 
    },
    { 
      year: 'YEAR 2 (12th Grade)', 
      tasks: [
        'Score well in board exams (85%+)',
        'Prepare for entrance exams (JEE/NEET/CLAT/BITSAT etc.)',
        'Build a portfolio of projects in your area',
        'Take mock tests and analyze performance'
      ] 
    },
    { 
      year: 'YEAR 3 (1st Year College)', 
      tasks: [
        'Start undergraduate degree in your chosen field',
        'Learn fundamentals and core concepts',
        'Join student clubs and technical societies',
        'Build a strong network with seniors and professors'
      ] 
    },
    { 
      year: 'YEAR 4 (2nd Year College)', 
      tasks: [
        'Take specialized courses in your interest area',
        'Start internships (summer internships)',
        'Work on real-world projects',
        'Build professional network (LinkedIn, industry events)'
      ] 
    },
    { 
      year: 'YEAR 5 (3rd Year + Beyond)', 
      tasks: [
        'Complete degree with good grades (CGPA 8+)',
        'Secure job placement or admission in master\'s program',
        'Build strong resume and portfolio',
        'Begin professional career with confidence'
      ] 
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.step}>STEP 7 OF 8</span>
        <h1 style={styles.title}>Roadmap Generator</h1>
      </div>

      <p style={styles.subtitle}>Your Personalized 5-Year Action Plan for Career Success</p>

      <div style={styles.timeline}>
        {roadmapData.map((item, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.yearIcon}>
              <span style={styles.yearNumber}>{index + 1}</span>
            </div>
            <div style={styles.yearContent}>
              <div style={styles.year}>{item.year}</div>
              <ul style={styles.tasksList}>
                {item.tasks.map((task, tIdx) => (
                  <li key={tIdx} style={styles.task}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.buttonGroup}>
        <button onClick={() => navigate('/stream-recommendation')} style={styles.backButton}>
          ← Back to Stream
        </button>
        <button onClick={() => navigate('/dashboard')} style={styles.button}>
          View Dashboard →
        </button>
      </div>
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
    marginBottom: '1.5rem',
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
    fontSize: '2.2rem',
    marginBottom: '0.5rem',
    color: 'white'
  },
  subtitle: {
    color: '#aaa',
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '2.5rem'
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    marginBottom: '2.5rem'
  },
  timelineItem: {
    display: 'flex',
    gap: '1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '1.5rem',
    borderRadius: '16px',
    transition: 'all 0.3s ease'
  },
  yearIcon: {
    width: '50px',
    height: '50px',
    background: 'linear-gradient(135deg, #a855f7, #4f46e5)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  yearNumber: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: 'white'
  },
  yearContent: {
    flex: 1
  },
  year: {
    color: '#a855f7',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '0.8rem'
  },
  tasksList: {
    marginLeft: '1.2rem',
    color: '#ccc'
  },
  task: {
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    lineHeight: '1.4'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem'
  },
  backButton: {
    flex: 1,
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer'
  },
  button: {
    flex: 2,
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

export default Roadmap;
