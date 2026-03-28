import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/profile', name: 'Profile' },
    { path: '/personal-dna', name: 'Personal' },
    { path: '/career-aspirations', name: 'Aspirations' },
    { path: '/scoring', name: 'Scoring' },
    { path: '/career-match', name: 'Match' },
    { path: '/stream-recommendation', name: 'Stream' },
    { path: '/roadmap', name: 'Roadmap' },
    { path: '/dashboard', name: 'Dashboard' }
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          Career<span style={styles.logoHighlight}>Assessment</span>
        </Link>
        <ul style={styles.navMenu}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                style={{
                  ...styles.navLink,
                  color: location.pathname === link.path ? '#a855f7' : '#aaa'
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
    padding: '1rem 2rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none'
  },
  logoHighlight: {
    color: '#a855f7'
  },
  navMenu: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    flexWrap: 'wrap'
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease'
  }
};

export default Navbar;