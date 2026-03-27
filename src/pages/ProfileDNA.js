import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileDNA() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    qualification: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (formData.age && formData.qualification && formData.location) {
      navigate('/personal-dna');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Extreme Profile DNA</h1>
        <p style={styles.subtitle}>Guided setup for Navya Adla</p>
      </div>

      <div style={styles.progressSection}>
        <div style={styles.progressLabel}>
          <span>Profile Effectiveness</span>
          <span>0%</span>
        </div>
        <div style={styles.progressBar}>
          <div style={{...styles.progress, width: '0%'}}></div>
        </div>
      </div>

      <div style={styles.formSection}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Age</label>
          <input
            style={styles.input}
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="# 18"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Qualification</label>
          <select
            style={styles.select}
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          >
            <option value="">Select Qualification</option>
            <optgroup label="School Level">
              <option value="8th">8th Grade</option>
              <option value="9th">9th Grade</option>
              <option value="10th">10th Grade</option>
              <option value="11th">11th Grade</option>
              <option value="12th">12th Grade</option>
            </optgroup>
            <optgroup label="Undergraduate Degree">
              <option value="btech">B.Tech / B.E.</option>
              <option value="bsc">B.Sc</option>
              <option value="bcom">B.Com</option>
              <option value="ba">B.A</option>
              <option value="bba">BBA</option>
              <option value="bca">BCA</option>
            </optgroup>
            <optgroup label="Diploma">
              <option value="diploma-engineering">Diploma in Engineering</option>
              <option value="diploma-computer">Diploma in Computer Science</option>
              <option value="diploma-electrical">Diploma in Electrical</option>
              <option value="diploma-mechanical">Diploma in Mechanical</option>
              <option value="diploma-civil">Diploma in Civil</option>
              <option value="diploma-others">Other Diploma</option>
            </optgroup>
            <optgroup label="Post Graduate">
              <option value="mtech">M.Tech / M.E.</option>
              <option value="msc">M.Sc</option>
              <option value="mcom">M.Com</option>
              <option value="ma">M.A</option>
              <option value="mba">MBA</option>
              <option value="mca">MCA</option>
            </optgroup>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Current Location</label>
          <input
            style={styles.input}
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Hyderabad, India"
          />
        </div>
      </div>

      <button onClick={handleNext} style={styles.nextButton}>
        Next Step: Personal DNA →
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    background: 'rgba(30, 30, 47, 0.95)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  header: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    color: 'white'
  },
  subtitle: {
    color: '#aaa',
    fontSize: '0.95rem'
  },
  progressSection: {
    marginBottom: '2rem'
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    color: '#aaa'
  },
  progressBar: {
    height: '8px',
    background: '#2a2a3a',
    borderRadius: '4px'
  },
  progress: {
    height: '100%',
    background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
    borderRadius: '4px'
  },
  formSection: {
    marginBottom: '2rem'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#aaa'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    background: '#2a2a3a',
    border: '1px solid #333',
    borderRadius: '10px',
    color: 'white',
    fontSize: '1rem'
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    background: '#2a2a3a',
    border: '1px solid #333',
    borderRadius: '10px',
    color: 'white',
    fontSize: '1rem'
  },
  nextButton: {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default ProfileDNA;