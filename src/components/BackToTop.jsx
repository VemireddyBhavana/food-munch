import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

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
      <ChevronUp size={24} aria-hidden="true" />
    </button>
  );
};

export default BackToTop;

