import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Module6_AcademicTrack() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      text: "In which cluster of subjects do you consistently achieve the highest grades?",
      options: [
        "Mathematics & Pure Sciences",
        "Humanities, History & Languages",
        "Accountancy, Economics & Business Studies",
        "Physical Education / Electives"
      ],
      scores: [5,4,3,2]
    },
    {
      id: 2,
      text: "What is your preferred method of learning and examination?",
      options: [
        "Solving numerical problems and derivations",
        "Writing long essays and debating theories",
        "Case studies, mock markets, and financial tallying",
        "Giving presentations and leading group projects"
      ],
      scores: [5,4,3,2]
    },
    {
      id: 3,
      text: "Which type of extracurricular activity did/do you prefer?",
      options: [
        "Robotics, Coding, or Science Club",
        "Drama, Music, or Art Club",
        "Math Olympiad or Finance Club",
        "Student Council or Debate Team"
      ],
      scores: [5,4,3,2]
    },
    {
      id: 4,
      text: "How do you prefer to handle large assignments?",
      options: [
        "Breaking it down into algorithmic, logical steps",
        "Brainstorming non-linear, creative approaches",
        "Creating a strict timeline and budget constraint",
        "Delegating parts of it to a team"
      ],
      scores: [5,4,3,2]
    },
    {
      id: 5,
      text: "If you had to read a 500-page book for class, which topic would you choose?",
      options: [
        "The History of Space Exploration and Physics",
        "A profound fictional novel or poetry anthology",
        "The Rise and Fall of the Global Economy",
        "Biographies of famous CEOs and Leaders"
      ],
      scores: [5,4,3,2]
    }
  ];

  const handleAnswer = (index) => {
    const score = questions[currentQuestion].scores[index];
    setAnswers({ ...answers, [questions[currentQuestion].id]: score });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('module6', JSON.stringify(answers));
      // Calculate all scores and go to scoring page
      navigate('/scoring');
    }
  };

  const q = questions[currentQuestion];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.module}>Module 6 of 6 | Academic Track</span>
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

export default Module6_AcademicTrack;