import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';
import { saveAssessmentProgress, loadAssessmentProgress } from '../utils/saveProgress';

function Module7_FutureGoals() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const savedProgress = loadAssessmentProgress('module7');
    if (savedProgress && savedProgress.answers) {
      setAnswers(savedProgress.answers);
    }
  }, []);

  const questions = [
    { id: 1, text: "You are given $100,000. What do you do with it?", options: ["Invest it in a diversified stock portfolio", "Fund your own tech startup or laboratory", "Produce an independent film or art exhibition", "Start a business and hire a team to rapidly scale it"], scores: [5,4,3,2] },
    { id: 2, text: "The world is ending in a week. How do you spend your time?", options: ["Solving complex problems and documenting solutions", "Creating art, music, or writing to express yourself", "Helping and comforting as many people as possible", "Organizing communities and leading efforts"], scores: [5,4,3,2] },
    { id: 3, text: "If you could have any superpower, what would it be?", options: ["Super intelligence and knowledge", "Ability to create anything from imagination", "Healing powers to help others", "Mind control to lead and influence"], scores: [5,4,3,2] },
    { id: 4, text: "What kind of legacy do you want to leave behind?", options: ["Scientific discoveries or technological breakthroughs", "Artistic masterpieces that inspire generations", "A healthier, happier society", "A successful empire or organization"], scores: [5,4,3,2] },
    { id: 5, text: "In 10 years, where do you see yourself?", options: ["Leading research and innovation in my field", "Expressing myself through creative work", "Making a direct impact on people's lives", "Running a successful company or organization"], scores: [5,4,3,2] }
  ];

  const handleAnswerChange = (questionId, score) => {
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);
    saveAssessmentProgress('module7', newAnswers);
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert('Please answer all 5 questions before proceeding.');
      return;
    }
    localStorage.setItem('module7', JSON.stringify(answers));
    navigate('/scoring');
  };

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      <div style={styles.header}>
        <span style={styles.module}>Module 7 of 7 | Future Goals</span>
        <h2 style={styles.title}>Future Goals Assessment</h2>
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
        View Results →
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

export default Module7_FutureGoals;