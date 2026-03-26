import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

function Module6_AcademicTrack() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { id: 1, text: "In which cluster of subjects do you consistently achieve the highest grades?", options: ["Mathematics & Pure Sciences", "Humanities, History & Languages", "Accountancy, Economics & Business Studies", "Physical Education / Electives"], scores: [5,4,3,2] },
    { id: 2, text: "What is your preferred method of learning and examination?", options: ["Solving numerical problems and derivations", "Writing long essays and debating theories", "Case studies, mock markets, and financial tallying", "Giving presentations and leading group projects"], scores: [5,4,3,2] },
    { id: 3, text: "Which type of extracurricular activity did/do you prefer?", options: ["Robotics, Coding, or Science Club", "Drama, Music, or Art Club", "Math Olympiad or Finance Club", "Student Council or Debate Team"], scores: [5,4,3,2] },
    { id: 4, text: "How do you prefer to handle large assignments?", options: ["Breaking it down into algorithmic, logical steps", "Brainstorming non-linear, creative approaches", "Creating a strict timeline and budget constraint", "Delegating parts of it to a team"], scores: [5,4,3,2] },
    { id: 5, text: "If you had to read a 500-page book for class, which topic would you choose?", options: ["The History of Space Exploration and Physics", "A profound fictional novel or poetry anthology", "The Rise and Fall of the Global Economy", "Biographies of famous CEOs and Leaders"], scores: [5,4,3,2] }
  ];

  const handleAnswer = (index) => {
    const score = questions[currentQuestion].scores[index];
    setAnswers({ ...answers, [questions[currentQuestion].id]: score });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('module6', JSON.stringify(answers));
      navigate('/module7');
    }
  };

  const q = questions[currentQuestion];

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      <div style={styles.header}>
        <span style={styles.module}>Module 6 of 7 | Academic Track</span>
        <h2 style={styles.title}>Academic Track Assessment</h2>
        <div style={styles.progressBar}>
          <div style={{...styles.progress, width: `${((currentQuestion + 1)/questions.length)*100}%`}}></div>
        </div>
        <p style={styles.counter}>Question {currentQuestion + 1} of {questions.length}</p>
      </div>
      <div style={styles.card}>
        <p style={styles.question}>{q.text}</p>
        <div style={styles.options}>
          {q.options.map((option, index) => (
            <button key={index} style={styles.optionButton} onClick={() => handleAnswer(index)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '800px', margin: '2rem auto', padding: '2rem', position: 'relative' },
  header: { marginBottom: '2rem' },
  module: { color: '#a855f7', fontSize: '0.9rem', fontWeight: '600' },
  title: { fontSize: '2rem', marginBottom: '1rem', color: 'white' },
  progressBar: { height: '4px', background: '#2a2a3a', borderRadius: '2px', marginBottom: '0.5rem' },
  progress: { height: '100%', background: '#a855f7', borderRadius: '2px' },
  counter: { color: '#aaa', fontSize: '0.9rem' },
  card: { background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' },
  question: { fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6', color: 'white' },
  options: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  optionButton: { padding: '1rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '10px', color: 'white', fontSize: '1rem', cursor: 'pointer', textAlign: 'left' }
};

export default Module6_AcademicTrack;