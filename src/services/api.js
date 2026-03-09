import axios from 'axios';

const API_URL = 'https://career-assessment-backend-y4bm.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = (userData) => api.post('/users/register', userData);
export const getQuestions = () => api.get('/questions');
export const submitAssessment = (userId, answers) => 
  api.post('/assessment/submit', { userId, answers });
export const getResults = (userId) => api.get(`/assessment/results/${userId}`);

export default api;