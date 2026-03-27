import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const BACKEND_URL = 'https://career-assessment-backend-y4bm.onrender.com';
      
      if (isLogin) {
        // LOGIN
        const response = await axios.post(`${BACKEND_URL}/api/auth/login`, {
          email: formData.email,
          password: formData.password
        });
        
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('userName', response.data.name);
          navigate('/profile');
        }
      } else {
        // SIGNUP
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        
        const response = await axios.post(`${BACKEND_URL}/api/auth/register`, {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('userName', response.data.name);
          navigate('/profile');
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>🎯</span>
          <h1 style={styles.logoText}>Career<span style={styles.logoHighlight}>Assessment</span></h1>
        </div>
        
        <div style={styles.tabs}>
          <button
            style={{...styles.tab, ...(isLogin ? styles.activeTab : {})}}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            style={{...styles.tab, ...(!isLogin ? styles.activeTab : {})}}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                style={styles.input}
              />
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              style={styles.input}
            />
          </div>

          {!isLogin && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                style={styles.input}
              />
            </div>
          )}

          {error && <div style={styles.error}>{error}</div>}

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Create Account')}
          </button>
        </form>

        <p style={styles.footer}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} style={styles.switchButton}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  },
  card: {
    maxWidth: '450px',
    width: '100%',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    borderRadius: '20px',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  logo: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  logoIcon: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '0.5rem'
  },
  logoText: {
    fontSize: '1.5rem',
    color: 'white'
  },
  logoHighlight: {
    color: '#a855f7'
  },
  tabs: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '0.5rem'
  },
  tab: {
    flex: 1,
    background: 'none',
    border: 'none',
    padding: '0.5rem',
    fontSize: '1rem',
    color: '#aaa',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  activeTab: {
    color: '#a855f7',
    borderBottom: '2px solid #a855f7'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    color: '#aaa',
    fontSize: '0.8rem'
  },
  input: {
    padding: '0.75rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '1rem'
  },
  button: {
    padding: '0.75rem',
    background: 'linear-gradient(135deg, #a855f7, #4f46e5)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1rem'
  },
  error: {
    color: '#f87171',
    fontSize: '0.8rem',
    textAlign: 'center'
  },
  footer: {
    textAlign: 'center',
    marginTop: '1.5rem',
    color: '#aaa',
    fontSize: '0.8rem'
  },
  switchButton: {
    background: 'none',
    border: 'none',
    color: '#a855f7',
    cursor: 'pointer',
    fontSize: '0.8rem'
  }
};

export default Login;