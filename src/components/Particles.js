import React, { useEffect, useState } from 'react';

function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 10
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </>
  );
}

export default Particles;