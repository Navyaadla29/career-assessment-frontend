import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PersonalDNA() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedStrengths, setSelectedStrengths] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const interests = ['Technology', 'Art & Design', 'Business', 'Healthcare', 'Social Work', 'Science', 'Sports', 'Music'];
  const strengths = ['Logical Thinking', 'Public Speaking', 'Creativity', 'Team Leadership', 'Problem Solving', 'Empathy', 'Writing', 'Analysis'];
  const languages = ['English', 'Hindi', 'Telugu', 'Tamil', 'Spanish', 'French', 'German', 'Mandarin'];

  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const getEffectiveness = () => {
    const total = selectedInterests.length + selectedStrengths.length + selectedLanguages.length;
    const maxTotal = interests.length + strengths.length + languages.length;
    return Math.round((total / maxTotal) * 100);
  };

  const handleNext = () => {
    navigate('/career-aspirations');
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
          <span>{getEffectiveness()}%</span>
        </div>
        <div style={styles.progressBar}>
          <div style={{...styles.progress, width: `${getEffectiveness()}%`}}></div>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Primary Interests</h3>
        <div style={styles.grid}>
          {interests.map(interest => (
            <button
              key={interest}
              onClick={() => toggleItem(interest, selectedInterests, setSelectedInterests)}
              style={{
                ...styles.optionButton,
                background: selectedInterests.includes(interest) ? '#4f46e5' : '#2a2a3a'
              }}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Key Strengths</h3>
        <div style={styles.grid}>
          {strengths.map(strength => (
            <button
              key={strength}
              onClick={() => toggleItem(strength, selectedStrengths, setSelectedStrengths)}
              style={{
                ...styles.optionButton,
                background: selectedStrengths.includes(strength) ? '#4f46e5' : '#2a2a3a'
              }}
            >
              {strength}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Languages Proficiency</h3>
        <div style={styles.grid}>
          {languages.map(language => (
            <button
              key={language}
              onClick={() => toggleItem(language, selectedLanguages, setSelectedLanguages)}
              style={{
                ...styles.optionButton,
                background: selectedLanguages.includes(language) ? '#4f46e5' : '#2a2a3a'
              }}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      <button onClick={handleNext} style={styles.nextButton}>
        Next Step: Career Aspirations →
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    background: '#1e1e2f',
    borderRadius: '20px'
  },
  header: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
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
  section: {
    marginBottom: '2rem'
  },
  sectionTitle: {
    marginBottom: '1rem',
    color: '#aaa'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.5rem'
  },
  optionButton: {
    padding: '0.75rem',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontSize: '0.9rem',
    cursor: 'pointer'
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
    marginTop: '2rem'
  }
};

export default PersonalDNA;