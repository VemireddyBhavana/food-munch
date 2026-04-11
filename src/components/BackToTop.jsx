import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY >= 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-top-btn ${isActive ? 'active' : ''}`}
      aria-label="Back to top"
      onClick={handleClick}
      title="Back to top"
    >
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </button>
  );
};

export default BackToTop;
