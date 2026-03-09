import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Module1_Interest() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      text: "I enjoy solving complex mathematical equations and logical puzzles.",
      options: [1, 2, 3, 4, 5],
      labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
      id: 2,
      text: "I love designing graphic art, user interfaces, or painting.",
      options: [1, 2, 3, 4, 5],
      labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
      id: 3,
      text: "I find researching scientific phenomena and conducting experiments fascinating.",
      options: [1, 2, 3, 4, 5],
      labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
      id: 4,
      text: "I enjoy writing stories, articles, or creating content.",
      options: [1, 2, 3, 4, 5],
      labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
      id: 5,
      text: "I like building or fixing mechanical things and understanding how they work.",
      options: [1, 2, 3, 4, 5],
      labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    }
  ];

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Save answers and go to next module
      localStorage.setItem('module1', JSON.stringify(answers));
      navigate('/module2');
    }
  };

  const q = questions[currentQuestion];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.module}>Module 1 of 6 | Interest</span>
        <h2 style={styles.title}>Interests Assessment</h2>
        <div style={styles.progressBar}>
          <div style={{...styles.progress, width: `${((currentQuestion + 1)/questions.length)*100}%`}}></div>
        </div>
        <p style={styles.counter}>Question {currentQuestion + 1} of {questions.length}</p>
      </div>

      <div style={styles.card}>
        <p style={styles.question}>{q.text}</p>
        
        <div style={styles.optionsContainer}>
          <div style={styles.scale}>
            {q.options.map(num => (
              <div key={num} style={styles.scaleNumber}>{num}</div>
            ))}
          </div>
          
          <div style={styles.buttonsGrid}>
            {q.options.map(value => (
              <button
                key={value}
                style={styles.optionButton}
                onClick={() => handleAnswer(value)}
              >
                {q.labels[value-1]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem'
  },
  header: {
    marginBottom: '2rem'
  },
  module: {
    color: '#4f46e5',
    fontSize: '0.9rem',
    fontWeight: '600'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  progressBar: {
    height: '4px',
    background: '#2a2a3a',
    borderRadius: '2px',
    marginBottom: '0.5rem'
  },
  progress: {
    height: '100%',
    background: '#4f46e5',
    borderRadius: '2px'
  },
  counter: {
    color: '#aaa',
    fontSize: '0.9rem'
  },
  card: {
    background: '#1e1e2f',
    padding: '2rem',
    borderRadius: '20px'
  },
  question: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    lineHeight: '1.6'
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  scale: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 0.5rem'
  },
  scaleNumber: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#2a2a3a',
    borderRadius: '50%',
    color: '#4f46e5',
    fontWeight: 'bold'
  },
  buttonsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '0.5rem'
  },
  optionButton: {
    padding: '0.75rem',
    background: '#2a2a3a',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontSize: '0.9rem',
    cursor: 'pointer'
  }
};

export default Module1_Interest;