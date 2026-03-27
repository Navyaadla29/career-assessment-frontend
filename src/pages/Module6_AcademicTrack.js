import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

function Module6_AcademicTrack() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 1, text: "In which cluster of subjects do you consistently achieve the highest grades?", options: ["Mathematics & Pure Sciences", "Humanities, History & Languages", "Accountancy, Economics & Business Studies", "Physical Education / Electives"], scores: [5,4,3,2] },
    { id: 2, text: "What is your preferred method of learning and examination?", options: ["Solving numerical problems and derivations", "Writing long essays and debating theories", "Case studies, mock markets, and financial tallying", "Giving presentations and leading group projects"], scores: [5,4,3,2] },
    { id: 3, text: "Which type of extracurricular activity did/do you prefer?", options: ["Robotics, Coding, or Science Club", "Drama, Music, or Art Club", "Math Olympiad or Finance Club", "Student Council or Debate Team"], scores: [5,4,3,2] },
    { id: 4, text: "How do you prefer to handle large assignments?", options: ["Breaking it down into algorithmic, logical steps", "Brainstorming non-linear, creative approaches", "Creating a strict timeline and budget constraint", "Delegating parts of it to a team"], scores: [5,4,3,2] },
    { id: 5, text: "If you had to read a 500-page book for class, which topic would you choose?", options: ["The History of Space Exploration and Physics", "A profound fictional novel or poetry anthology", "The Rise and Fall of the Global Economy", "Biographies of famous CEOs and Leaders"], scores: [5,4,3,2] }
  ];

  const handleAnswerChange = (questionId, score) => {
    setAnswers({ ...answers, [questionId]: score });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert('Please answer all questions before proceeding.');
      return;
    }
    localStorage.setItem('module6', JSON.stringify(answers));
    navigate('/module7');
  };

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      <div style={styles.header}>
        <span style={styles.module}>Module 6 of 7 | Academic Track</span>
        <h2 style={styles.title}>Academic Track Assessment</h2>
        <p style={styles.instruction}>Please answer all 5 questions below</p>
      </div>

      <div style={styles.questionsContainer}>
        {questions.map((q, index) => (
          <div key={q.id} style={styles.questionCard}>
            <p style={styles.questionNumber}>Question {index + 1}</p>
            <p style={styles.questionText}>{q.text}</p>
            <div style={styles.optionsGrid}>
              {q.options.map((option, optIndex) => (
                <button
                  key={optIndex}
                  style={{
                    ...styles.optionButton,
                    background: answers[q.id] === q.scores[optIndex] ? '#a855f7' : 'rgba(255, 255, 255, 0.1)'
                  }}
                  onClick={() => handleAnswerChange(q.id, q.scores[optIndex])}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button style={styles.submitButton} onClick={handleSubmit}>
        Next Module →
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '2rem',
    position: 'relative'
  },
  header: {
    marginBottom: '2rem',
    textAlign: 'center'
  },
  module: {
    color: '#a855f7',
    fontSize: '0.9rem',
    fontWeight: '600'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    color: 'white'
  },
  instruction: {
    color: '#aaa',
    fontSize: '0.9rem'
  },
  questionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  questionCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    padding: '1.5rem',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  questionNumber: {
    color: '#a855f7',
    fontSize: '0.8rem',
    marginBottom: '0.5rem'
  },
  questionText: {
    fontSize: '1rem',
    color: 'white',
    marginBottom: '1rem',
    lineHeight: '1.5'
  },
  optionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.5rem'
  },
  optionButton: {
    padding: '0.75rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  submitButton: {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(135deg, #a855f7, #4f46e5)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1rem'
  }
};

export default Module6_AcademicTrack;