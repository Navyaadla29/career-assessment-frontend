import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

function Module5_WorkStyle() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 1, text: "How often do you take charge when a group project lacks direction?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], scores: [5,4,3,2,1] },
    { id: 2, text: "How often do you rely on data and spreadsheets to make personal decisions?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], scores: [5,4,3,2,1] },
    { id: 3, text: "How often do you sketch, doodle, or wireframe your ideas before explaining them?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], scores: [5,4,3,2,1] },
    { id: 4, text: "How often do you read documentation or manuals completely before starting a task?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], scores: [5,4,3,2,1] },
    { id: 5, text: "How often do you successfully persuade others to change their minds during a debate?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], scores: [5,4,3,2,1] }
  ];

  const handleAnswerChange = (questionId, score) => {
    setAnswers({ ...answers, [questionId]: score });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert('Please answer all questions before proceeding.');
      return;
    }
    localStorage.setItem('module5', JSON.stringify(answers));
    navigate('/module6');
  };

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      <div style={styles.header}>
        <span style={styles.module}>Module 5 of 7 | Work Style</span>
        <h2 style={styles.title}>Work Style Assessment</h2>
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
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '0.5rem'
  },
  optionButton: {
    padding: '0.6rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '0.7rem',
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

export default Module5_WorkStyle;