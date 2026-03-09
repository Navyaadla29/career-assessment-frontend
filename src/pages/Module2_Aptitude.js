import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Module2_Aptitude() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      text: "If 3x + 4 = 19, what is the value of x squared?",
      options: ["25", "16", "36"],
      correct: "25"
    },
    {
      id: 2,
      text: "Which word does not belong?",
      options: ["Apple", "Banana", "Potato"],
      correct: "Potato"
    },
    {
      id: 3,
      text: "2, 4, 6, 8, ? What comes next?",
      options: ["10", "12", "14"],
      correct: "10"
    },
    {
      id: 4,
      text: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
      options: ["5 minutes", "100 minutes", "20 minutes"],
      correct: "5 minutes"
    },
    {
      id: 5,
      text: "Which is the odd one out?",
      options: ["Triangle", "Square", "Circle"],
      correct: "Circle"
    }
  ];

  const handleAnswer = (option) => {
    const isCorrect = option === questions[currentQuestion].correct;
    setAnswers({ 
      ...answers, 
      [questions[currentQuestion].id]: isCorrect ? 5 : 0 
    });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('module2', JSON.stringify(answers));
      navigate('/module3');
    }
  };

  const q = questions[currentQuestion];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.module}>Module 2 of 6 | Aptitude</span>
        <h2 style={styles.title}>Aptitude Assessment</h2>
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
              onClick={() => handleAnswer(option)}
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

export default Module2_Aptitude;