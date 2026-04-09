import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
      document.body.classList.add('loaded');
    };

    // If document is already complete, run immediately
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className={`preload ${loaded ? 'loaded' : ''}`} data-preaload>
      <div className="circle"></div>
      <p className="text">Food Munch</p>
    </div>
  );
};

export default Preloader;
