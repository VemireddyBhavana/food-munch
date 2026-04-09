import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY >= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a 
      href="#top" 
      className={`back-top-btn ${isActive ? 'active' : ''}`} 
      aria-label="back to top" 
      data-back-top-btn
    >
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>
  );
};

export default BackToTop;
