import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

function Module4_Values() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { id: 1, text: "Is making a massive social impact more important to you than achieving high personal wealth?", options: ["Yes", "No"], scores: [5,1] },
    { id: 2, text: "Would you prefer a highly structured corporate ladder over a chaotic, fast-paced startup environment?", options: ["Yes", "No"], scores: [5,1] },
    { id: 3, text: "Do you value creative freedom over job security?", options: ["Yes", "No"], scores: [5,1] },
    { id: 4, text: "Is work-life balance more important than career advancement?", options: ["Yes", "No"], scores: [5,1] },
    { id: 5, text: "Do you prefer working on projects that have immediate, visible impact?", options: ["Yes", "No"], scores: [5,1] }
  ];

  const handleAnswer = (index) => {
    const score = questions[currentQuestion].scores[index];
    setAnswers({ ...answers, [questions[currentQuestion].id]: score });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('module4', JSON.stringify(answers));
      navigate('/module5');
    }
  };

  const q = questions[currentQuestion];

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      <div style={styles.header}>
        <span style={styles.module}>Module 4 of 7 | Values</span>
        <h2 style={styles.title}>Values Assessment</h2>
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

export default Module4_Values;