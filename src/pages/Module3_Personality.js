import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Module3_Personality() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      text: "I prefer working independently and taking deep dives into technical problems rather than working in large social groups.",
      options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      scores: [5,4,3,2,1]
    },
    {
      id: 2,
      text: "I handle stressful, high-paced working environments calmly and thrive under pressure.",
      options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      scores: [5,4,3,2,1]
    },
    {
      id: 3,
      text: "I enjoy leading teams and motivating others to achieve goals.",
      options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      scores: [5,4,3,2,1]
    },
    {
      id: 4,
      text: "I prefer structured environments with clear rules and expectations.",
      options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      scores: [5,4,3,2,1]
    },
    {
      id: 5,
      text: "I am naturally curious and enjoy learning new things outside my comfort zone.",
      options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      scores: [5,4,3,2,1]
    }
  ];

  const handleAnswer = (index) => {
    const score = questions[currentQuestion].scores[index];
    setAnswers({ ...answers, [questions[currentQuestion].id]: score });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('module3', JSON.stringify(answers));
      navigate('/module4');
    }
  };

  const q = questions[currentQuestion];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.module}>Module 3 of 6 | Personality</span>
        <h2 style={styles.title}>Personality Assessment</h2>
        <div style={styles.progressBar}>
          <div style={{...styles.progress, width: `${((currentQuestion + 1)/questions.length)*100}%`}}></div>
        </div>
        <p style={styles.counter}>Question {currentQuestion + 1} of {questions.length}</p>
      </div>

      <div style={styles.card}>
        <p style={styles.question}>{q.text}</p>
        
        <div style={styles.options}>
          {q.options.map((option, index) => (
            <button
              key={index}
              style={styles.optionButton}
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          ))}
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
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  optionButton: {
    padding: '1rem',
    background: '#2a2a3a',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    textAlign: 'left'
  }
};

export default Module3_Personality;