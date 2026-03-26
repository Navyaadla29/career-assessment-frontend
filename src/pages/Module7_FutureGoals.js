import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

function Module7_FutureGoals() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { id: 1, text: "You are given $100,000. What do you do with it?", options: ["Invest it in a diversified stock portfolio", "Fund your own tech startup or laboratory", "Produce an independent film or art exhibition", "Start a business and hire a team to rapidly scale it"], scores: [5,4,3,2] },
    { id: 2, text: "The world is ending in a week. How do you spend your time?", options: ["Solving complex problems and documenting solutions", "Creating art, music, or writing to express yourself", "Helping and comforting as many people as possible", "Organizing communities and leading efforts"], scores: [5,4,3,2] },
    { id: 3, text: "If you could have any superpower, what would it be?", options: ["Super intelligence and knowledge", "Ability to create anything from imagination", "Healing powers to help others", "Mind control to lead and influence"], scores: [5,4,3,2] },
    { id: 4, text: "What kind of legacy do you want to leave behind?", options: ["Scientific discoveries or technological breakthroughs", "Artistic masterpieces that inspire generations", "A healthier, happier society", "A successful empire or organization"], scores: [5,4,3,2] },
    { id: 5, text: "In 10 years, where do you see yourself?", options: ["Leading research and innovation in my field", "Expressing myself through creative work", "Making a direct impact on people's lives", "Running a successful company or organization"], scores: [5,4,3,2] }
  ];

  const handleAnswer = (index) => {
    const score = questions[currentQuestion].scores[index];
    setAnswers({ ...answers, [questions[currentQuestion].id]: score });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('module7', JSON.stringify(answers));
      navigate('/scoring');
    }
  };

  const q = questions[currentQuestion];

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      <div style={styles.header}>
        <span style={styles.module}>Module 7 of 7 | Future Goals</span>
        <h2 style={styles.title}>Future Goals Assessment</h2>
        <div style={styles.timer}>8:41</div>
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
  title: { fontSize: '2rem', marginBottom: '0.5rem', color: 'white' },
  timer: { color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' },
  progressBar: { height: '4px', background: '#2a2a3a', borderRadius: '2px', marginBottom: '0.5rem' },
  progress: { height: '100%', background: '#a855f7', borderRadius: '2px' },
  counter: { color: '#aaa', fontSize: '0.9rem' },
  card: { background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' },
  question: { fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6', color: 'white' },
  options: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  optionButton: { padding: '1rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '10px', color: 'white', fontSize: '1rem', cursor: 'pointer', textAlign: 'left' }
};

export default Module7_FutureGoals;