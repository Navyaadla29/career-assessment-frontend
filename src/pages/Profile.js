import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    educationLevel: '10th'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.age) {
      alert('Please fill all fields');
      return;
    }

    try {
      const BACKEND_URL = 'https://career-assessment-backend-y4bm.onrender.com';
      const response = await axios.post(`${BACKEND_URL}/api/users/register`, formData);
      
      if (response.data.success) {
        localStorage.setItem('userId', response.data.data._id);
        alert('Profile created successfully!');
        navigate('/assessment');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving profile. Please try again.');
    }
  };

  const containerStyle = {
    maxWidth: '500px',
    margin: '3rem auto',
    padding: '2rem',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '2rem'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#555'
  };

  const inputStyle = {
    padding: '0.75rem',
    border: '2px solid #e0e0e0',
    borderRadius: '5px',
    fontSize: '1rem'
  };

  const buttonStyle = {
    background: '#667eea',
    color: 'white',
    border: 'none',
    padding: '1rem',
    fontSize: '1.1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '1rem'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Create Your Profile</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={inputStyle}
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={inputStyle}
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
            style={inputStyle}
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Education Level</label>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="8th">8th Grade</option>
            <option value="9th">9th Grade</option>
            <option value="10th">10th Grade</option>
            <option value="11th">11th Grade</option>
            <option value="12th">12th Grade</option>
            <option value="College">College</option>
          </select>
        </div>
        
        <button type="submit" style={buttonStyle}>
          Start Assessment →
        </button>
      </form>
    </div>
  );
}

export default Profile;