import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';
import { saveAssessmentProgress, loadAssessmentProgress, hasSavedProgress, getResumeModule } from '../utils/saveProgress';

function Module1_Interest() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [showResumePrompt, setShowResumePrompt] = useState(false);

  useEffect(() => {
    // Check if there's saved progress for this module
    const savedProgress = loadAssessmentProgress('module1');
    if (savedProgress && savedProgress.answers && Object.keys(savedProgress.answers).length > 0) {
      setShowResumePrompt(true);
      setAnswers(savedProgress.answers);
    }
  }, []);

  const questions = [
    { id: 1, text: "I enjoy solving complex mathematical equations and logical puzzles.", options: [1, 2, 3, 4, 5], labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 2, text: "I love designing graphic art, user interfaces, or painting.", options: [1, 2, 3, 4, 5], labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 3, text: "I find researching scientific phenomena and conducting experiments fascinating.", options: [1, 2, 3, 4, 5], labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 4, text: "I enjoy writing stories, articles, or creating content.", options: [1, 2, 3, 4, 5], labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 5, text: "I like building or fixing mechanical things and understanding how they work.", options: [1, 2, 3, 4, 5], labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] }
  ];

  const handleAnswerChange = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    // Save progress automatically after each answer
    saveAssessmentProgress('module1', newAnswers);
  };

  const handleResume = () => {
    const saved = loadAssessmentProgress('module1');
    if (saved && saved.answers) {
      setAnswers(saved.answers);
    }
    setShowResumePrompt(false);
  };

  const handleReset = () => {
    setAnswers({});
    saveAssessmentProgress('module1', {});
    setShowResumePrompt(false);
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert('Please answer all 5 questions before proceeding.');
      return;
    }
    localStorage.setItem('module1', JSON.stringify(answers));
    navigate('/module2');
  };

  return (
    <div style={styles.container}>
      <Timer onTimeUp={() => alert('Time is up! Your answers will be saved.')} />
      
      {showResumePrompt && (
        <div style={styles.resumePrompt}>
          <p>You have saved progress for this module. Would you like to resume where you left off?</p>
          <div>
            <button onClick={handleResume} style={styles.resumeYes}>Yes, Resume</button>
            <button onClick={handleReset} style={styles.resumeNo}>No, Start Over</button>
          </div>
        </div>
      )}

      <div style={styles.header}>
        <span style={styles.module}>Module 1 of 7 | Interest</span>
        <h2 style={styles.title}>Interests Assessment</h2>
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
              {q.options.map(value => (
                <button
                  key={value}
                  style={{
                    ...styles.optionButton,
                    background: answers[q.id] === value ? '#a855f7' : 'rgba(255, 255, 255, 0.1)'
                  }}
                  onClick={() => handleAnswerChange(q.id, value)}
                >
                  {q.labels[value-1]}
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
  resumePrompt: { background: 'rgba(168,85,247,0.2)', border: '1px solid #a855f7', borderRadius: '10px', padding: '1rem', marginBottom: '1rem', textAlign: 'center' },
  resumeYes: { background: '#a855f7', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', color: 'white', cursor: 'pointer', margin: '0.5rem' },
  resumeNo: { background: 'rgba(255,255,255,0.2)', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', color: 'white', cursor: 'pointer', margin: '0.5rem' },
  questionsContainer: { display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' },
  questionCard: { background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)' },
  questionNumber: { color: '#a855f7', fontSize: '0.8rem', marginBottom: '0.5rem' },
  questionText: { fontSize: '1rem', color: 'white', marginBottom: '1rem', lineHeight: '1.5' },
  optionsGrid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' },
  optionButton: { padding: '0.6rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', color: 'white', fontSize: '0.7rem', cursor: 'pointer', transition: 'all 0.3s ease' },
  submitButton: { width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #a855f7, #4f46e5)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginTop: '1rem' }
};

export default Module1_Interest;