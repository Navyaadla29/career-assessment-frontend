import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

function Module2_Aptitude() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const questions = [
    { 
      id: 1, 
      text: "If 3x + 4 = 19, what is the value of x?",
      options: ["3", "5", "7", "9"],
      correct: "5"
    },
    { 
      id: 2, 
      text: "Which word does NOT belong with the others?",
      options: ["Apple", "Banana", "Carrot", "Orange"],
      correct: "Carrot"
    },
    { 
      id: 3, 
      text: "Complete the sequence: 2, 4, 6, 8, ?",
      options: ["9", "10", "11", "12"],
      correct: "10"
    },
    { 
      id: 4, 
      text: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
      options: ["5 minutes", "100 minutes", "20 minutes", "50 minutes"],
      correct: "5 minutes"
    },
    { 
      id: 5, 
      text: "Which shape is the odd one out?",
      options: ["Triangle", "Square", "Circle", "Rectangle"],
      correct: "Circle"
    }
  ];

  const handleAnswerChange = (questionId, selectedOption) => {
    const question = questions.find(q => q.id === questionId);
    const isCorrect = selectedOption === question.correct;
    // Store score: 5 for correct, 0 for wrong
    setAnswers(prev => ({ ...prev, [questionId]: isCorrect ? 5 : 0 }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert(`Please answer all ${questions.length} questions before proceeding.`);
      return;
    }
    localStorage.setItem('module2', JSON.stringify(answers));
    navigate('/module3');
  };

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      <div style={styles.header}>
        <span style={styles.module}>Module 2 of 7 | Aptitude</span>
        <h2 style={styles.title}>Aptitude Assessment</h2>
        <p style={styles.instruction}>Please answer all 5 questions below (click only ONE option per question)</p>
      </div>

      <div style={styles.questionsContainer}>
        {questions.map((q, index) => {
          const selectedValue = answers[q.id];
          return (
            <div key={q.id} style={styles.questionCard}>
              <p style={styles.questionNumber}>Question {index + 1}</p>
              <p style={styles.questionText}>{q.text}</p>
              <div style={styles.optionsGrid}>
                {q.options.map((option, optIndex) => {
                  const isSelected = selectedValue !== undefined && 
                    ((selectedValue === 5 && option === q.correct) || 
                     (selectedValue === 0 && option !== q.correct));
                  return (
                    <button
                      key={optIndex}
                      style={{
                        ...styles.optionButton,
                        background: isSelected ? '#a855f7' : 'rgba(255, 255, 255, 0.1)',
                        border: isSelected ? '1px solid #a855f7' : '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                      onClick={() => handleAnswerChange(q.id, option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {selectedValue !== undefined && (
                <p style={styles.answeredTag}>
                  {selectedValue === 5 ? '✓ Correct!' : '✗ Incorrect'}
                </p>
              )}
            </div>
          );
        })}
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
    color: '#f59e0b',
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
    border: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative'
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
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.8rem'
  },
  optionButton: {
    padding: '0.75rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  answeredTag: {
    color: '#10b981',
    fontSize: '0.7rem',
    marginTop: '0.5rem',
    textAlign: 'right'
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

export default Module2_Aptitude;