import React, { useState, useEffect } from 'react';

function Timer({ onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes = 300 seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeUp) onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={styles.timerContainer}>
      <div style={styles.timerIcon}>⏱️</div>
      <div style={styles.timerText}>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <div style={styles.timerLabel}>Time Remaining</div>
    </div>
  );
}

const styles = {
  timerContainer: {
    position: 'fixed',
    top: '80px',
    right: '20px',
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(10px)',
    padding: '12px 20px',
    borderRadius: '15px',
    textAlign: 'center',
    border: '1px solid rgba(168,85,247,0.5)',
    zIndex: 1000,
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
  },
  timerIcon: {
    fontSize: '20px',
    marginBottom: '5px'
  },
  timerText: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#a855f7',
    fontFamily: 'monospace'
  },
  timerLabel: {
    fontSize: '10px',
    color: '#aaa',
    marginTop: '5px'
  }
};

export default Timer;