import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

function Module5_WorkStyle() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { id: 1, text: "How often do you take charge when a group project lacks direction?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], scores: [5,4,3,2,1] },
    { id: 2, text: "How often do you rely on data and spreadsheets to make personal decisions?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], scores: [5,4,3,2,1] },
    { id: 3, text: "How often do you sketch, doodle, or wireframe your ideas before explaining them?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], scores: [5,4,3,2,1] },
    { id: 4, text: "How often do you read documentation or manuals completely before starting a task?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], scores: [5,4,3,2,1] },
    { id: 5, text: "How often do you successfully persuade others to change their minds during a debate?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], scores: [5,4,3,2,1] }
  ];

  const handleAnswer = (index) => {
    const score = questions[currentQuestion].scores[index];
    setAnswers({ ...answers, [questions[currentQuestion].id]: score });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('module5', JSON.stringify(answers));
      navigate('/module6');
    }
  };

  const q = questions[currentQuestion];

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      <div style={styles.header}>
        <span style={styles.module}>Module 5 of 7 | Work Style</span>
        <h2 style={styles.title}>Work Style Assessment</h2>
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

export default Module5_WorkStyle;