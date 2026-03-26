import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

function Module1_Interest() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { id: 1, text: "I enjoy solving complex mathematical equations and logical puzzles.", options: [1, 2, 3, 4, 5], labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 2, text: "I love designing graphic art, user interfaces, or painting.", options: [1, 2, 3, 4, 5], labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 3, text: "I find researching scientific phenomena and conducting experiments fascinating.", options: [1, 2, 3, 4, 5], labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 4, text: "I enjoy writing stories, articles, or creating content.", options: [1, 2, 3, 4, 5], labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 5, text: "I like building or fixing mechanical things and understanding how they work.", options: [1, 2, 3, 4, 5], labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] }
  ];

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('module1', JSON.stringify(answers));
      navigate('/module2');
    }
  };

  const q = questions[currentQuestion];

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      <div style={styles.header}>
        <span style={styles.module}>Module 1 of 7 | Interest</span>
        <h2 style={styles.title}>Interests Assessment</h2>
        <div style={styles.progressBar}>
          <div style={{...styles.progress, width: `${((currentQuestion + 1)/questions.length)*100}%`}}></div>
        </div>
        <p style={styles.counter}>Question {currentQuestion + 1} of {questions.length}</p>
      </div>
      <div style={styles.card}>
        <p style={styles.question}>{q.text}</p>
        <div style={styles.buttonsGrid}>
          {q.options.map(value => (
            <button key={value} style={styles.optionButton} onClick={() => handleAnswer(value)}>
              {q.labels[value-1]}
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
  buttonsGrid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' },
  optionButton: { padding: '0.75rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '10px', color: 'white', fontSize: '0.8rem', cursor: 'pointer', transition: 'all 0.3s ease' }
};

export default Module1_Interest;