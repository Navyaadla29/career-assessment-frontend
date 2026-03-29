import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';
import { saveAssessmentProgress, loadAssessmentProgress } from '../utils/saveProgress';

function Module4_Values() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const savedProgress = loadAssessmentProgress('module4');
    if (savedProgress && savedProgress.answers) {
      setAnswers(savedProgress.answers);
    }
  }, []);

  const questions = [
    { id: 1, text: "Is making a massive social impact more important to you than achieving high personal wealth?", options: ["Yes", "No"], scores: [5,1] },
    { id: 2, text: "Would you prefer a highly structured corporate ladder over a chaotic, fast-paced startup environment?", options: ["Yes", "No"], scores: [5,1] },
    { id: 3, text: "Do you value creative freedom over job security?", options: ["Yes", "No"], scores: [5,1] },
    { id: 4, text: "Is work-life balance more important than career advancement?", options: ["Yes", "No"], scores: [5,1] },
    { id: 5, text: "Do you prefer working on projects that have immediate, visible impact?", options: ["Yes", "No"], scores: [5,1] }
  ];

  const handleAnswerChange = (questionId, score) => {
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);
    saveAssessmentProgress('module4', newAnswers);
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert('Please answer all 5 questions before proceeding.');
      return;
    }
    localStorage.setItem('module4', JSON.stringify(answers));
    navigate('/module5');
  };

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      <div style={styles.header}>
        <span style={styles.module}>Module 4 of 7 | Values</span>
        <h2 style={styles.title}>Values Assessment</h2>
        <p style={styles.instruction}>Please answer all 5 questions below</p>
        {Object.keys(answers).length > 0 && (
          <p style={styles.progressText}>Progress: {Object.keys(answers).length}/5 questions answered</p>
        )}
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
  container: { maxWidth: '900px', margin: '2rem auto', padding: '2rem', position: 'relative' },
  header: { marginBottom: '2rem', textAlign: 'center' },
  module: { color: '#a855f7', fontSize: '0.9rem', fontWeight: '600' },
  title: { fontSize: '2rem', marginBottom: '0.5rem', color: 'white' },
  instruction: { color: '#aaa', fontSize: '0.9rem' },
  progressText: { color: '#10b981', fontSize: '0.8rem', marginTop: '0.5rem' },
  questionsContainer: { display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' },
  questionCard: { background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '15px' },
  questionNumber: { color: '#a855f7', fontSize: '0.8rem', marginBottom: '0.5rem' },
  questionText: { fontSize: '1rem', color: 'white', marginBottom: '1rem' },
  optionsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' },
  optionButton: { padding: '0.75rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', color: 'white', cursor: 'pointer' },
  submitButton: { width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #a855f7, #4f46e5)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginTop: '1rem' }
};

export default Module4_Values;