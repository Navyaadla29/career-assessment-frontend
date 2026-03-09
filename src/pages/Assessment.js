import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Assessment() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const BACKEND_URL = 'https://career-assessment-backend-y4bm.onrender.com';
      const response = await axios.get(`${BACKEND_URL}/api/questions`);
      setQuestions(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      alert('Error loading questions');
    }
  };

  const handleAnswer = (score) => {
    const newAnswers = [...answers, {
      questionId: questions[currentIndex]._id,
      score: score
    }];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      submitAssessment(newAnswers);
    }
  };

  const submitAssessment = async (finalAnswers) => {
    try {
      const userId = localStorage.getItem('userId');
      const BACKEND_URL = 'https://career-assessment-backend-y4bm.onrender.com';
      
      await axios.post(`${BACKEND_URL}/api/assessment/submit`, {
        userId: userId,
        answers: finalAnswers
      });

      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting assessment');
    }
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem'
  };

  const headerStyle = {
    textAlign: 'center',
    color: 'white',
    marginBottom: '2rem'
  };

  const cardStyle = {
    background: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  };

  const questionStyle = {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '2rem'
  };

  const optionsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const buttonStyle = {
    padding: '1rem',
    background: '#f0f0f0',
    border: '2px solid #e0e0e0',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    textAlign: 'left'
  };

  if (loading) {
    return <div style={{textAlign: 'center', color: 'white', marginTop: '3rem'}}>Loading questions...</div>;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2>Career Assessment</h2>
        <p>Question {currentIndex + 1} of {questions.length}</p>
      </div>
      
      <div style={cardStyle}>
        <h3 style={questionStyle}>{currentQuestion.text}</h3>
        <div style={optionsStyle}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              style={buttonStyle}
              onClick={() => handleAnswer(currentQuestion.scores[index])}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assessment;