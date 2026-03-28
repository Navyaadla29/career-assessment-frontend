import React from 'react';
import { useNavigate } from 'react-router-dom';

function Roadmap() {
  const navigate = useNavigate();

  const roadmapData = [
    { year: 'YEAR 1 (11th Grade)', tasks: ['Complete 11th with focus on core subjects', 'Start building foundational knowledge', 'Participate in relevant workshops', 'Develop basic skills'] },
    { year: 'YEAR 2 (12th Grade)', tasks: ['Score well in board exams (85%+)', 'Prepare for entrance exams', 'Build portfolio of projects', 'Take mock tests'] },
    { year: 'YEAR 3 (1st Year College)', tasks: ['Start undergraduate degree', 'Learn fundamentals', 'Join student clubs', 'Build network'] },
    { year: 'YEAR 4 (2nd Year College)', tasks: ['Take specialized courses', 'Start internships', 'Work on real projects', 'Build professional network'] },
    { year: 'YEAR 5 (3rd Year + Beyond)', tasks: ['Complete degree with good grades', 'Secure job or higher studies', 'Begin professional career', 'Continuous learning'] }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.step}>STEP 7 OF 8</span>
        <h1 style={styles.title}>Roadmap Generator</h1>
      </div>
      <p style={styles.subtitle}>Your Personalized 5-Year Action Plan</p>

      <div style={styles.timeline}>
        {roadmapData.map((item, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.yearNumber}>{index + 1}</div>
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

      <button onClick={() => navigate('/dashboard')} style={styles.button}>
        View Your Dashboard →
      </button>
    </div>
  );
}

const styles = {
  container: { maxWidth: '900px', margin: '2rem auto', padding: '2rem' },
  header: { marginBottom: '1.5rem', textAlign: 'center' },
  step: { color: '#a855f7', fontSize: '0.9rem', fontWeight: '600', display: 'block', marginBottom: '0.5rem' },
  title: { fontSize: '2rem', marginBottom: '0.5rem', color: 'white' },
  subtitle: { color: '#aaa', fontSize: '1rem', textAlign: 'center', marginBottom: '2rem' },
  timeline: { display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' },
  timelineItem: { display: 'flex', gap: '1rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1.2rem', borderRadius: '15px' },
  yearNumber: { width: '40px', height: '40px', background: 'linear-gradient(135deg, #a855f7, #4f46e5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' },
  yearContent: { flex: 1 },
  year: { color: '#a855f7', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' },
  tasksList: { marginLeft: '1rem', color: '#ccc' },
  task: { marginBottom: '0.3rem', fontSize: '0.85rem' },
  button: { width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #a855f7, #4f46e5)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }
};

export default Roadmap;