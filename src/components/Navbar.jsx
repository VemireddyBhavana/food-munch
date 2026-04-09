import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isHeaderHide, setIsHeaderHide] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const toggleNavbar = () => {
    setIsActive(!isActive);
    document.body.classList.toggle('nav-active');
  };

  const closeNavbar = () => {
    setIsActive(false);
    document.body.classList.remove('nav-active');
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrollBottom = lastScrollPos < window.scrollY;
      
      if (window.scrollY >= 50) {
        setIsHeaderActive(true);
        setIsHeaderHide(isScrollBottom);
      } else {
        setIsHeaderActive(false);
        setIsHeaderHide(false);
      }
      
      setLastScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''} ${isHeaderHide ? 'hide' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo logo-container">
          <span className="logo-text">Food Munch</span>
        </a>

        <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
          <button className="close-btn" aria-label="close menu" onClick={closeNavbar}>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          <a href="#" className="logo logo-container">
            <span className="logo-text">Food Munch</span>
          </a>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active" onClick={closeNavbar}>
                <div className="separator"></div>
                <span className="span">Home</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#menu" className="navbar-link hover-underline" onClick={closeNavbar}>
                <div className="separator"></div>
                <span className="span">Menus</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link hover-underline" onClick={closeNavbar}>
                <div className="separator"></div>
                <span className="span">About Us</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline" onClick={closeNavbar}>
                <div className="separator"></div>
                <span className="span">Our Chefs</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link hover-underline" onClick={closeNavbar}>
                <div className="separator"></div>
                <span className="span">Contact</span>
              </a>
            </li>
          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>
            <address className="body-4">
              Restaurant St, Delicious City, <br />
              London 9578, UK
            </address>
            <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
            <a href="mailto:booking@foodmunch.com" className="body-4 sidebar-link">booking@foodmunch.com</a>
            <div className="separator"></div>
            <p className="contact-label">Booking Request</p>
            <a href="tel:+88123123456" className="body-1 contact-number hover-underline">+88-123-123456</a>
          </div>
        </nav>

        <a href="#reservation" className="btn btn-secondary">
          <span className="text text-1">Find A Table</span>
          <span className="text text-2" aria-hidden="true">Find A Table</span>
        </a>

        <button className="nav-open-btn" aria-label="open menu" onClick={toggleNavbar}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div className={`overlay ${isActive ? 'active' : ''}`} onClick={closeNavbar} data-overlay></div>
      </div>
    </header>
  );
};

export default Navbar;
