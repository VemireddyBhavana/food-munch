import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../data/CartContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isHeaderHide, setIsHeaderHide] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsActive(!isActive);
    document.body.classList.toggle('nav-active');
  };

  const closeNavbar = () => {
    setIsActive(false);
    document.body.classList.remove('nav-active');
  };

  // Enhanced Nav Click Handler
  const handleNavClick = (e, targetId) => {
    closeNavbar();
    
    // If we're on a sub-page (like /menu/...), navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Give a tiny delay for the home page to mount
      setTimeout(() => {
        const target = document.querySelector(targetId);
        if (target) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
          const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    // Standard smooth scroll for homepage
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollDown = lastScrollPos < currentScrollY;

      if (currentScrollY >= 50) {
        setIsHeaderActive(true);
        setIsHeaderHide(isScrollDown && currentScrollY > 300);
      } else {
        setIsHeaderActive(false);
        setIsHeaderHide(false);
      }

      setLastScrollPos(currentScrollY);

      if (location.pathname === '/') {
        const sections = ['home', 'menu', 'about', 'reservation', 'contact'];
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos, location.pathname]);

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#menu', label: 'Menus', id: 'menu' },
    { href: '#about', label: 'About Us', id: 'about' },
    { href: '#reservation', label: 'Book Table', id: 'reservation' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''} ${isHeaderHide ? 'hide' : ''}`} data-header>
      <div className="container">
        <Link to="/" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
          <img src={logo} width="160" height="40" alt="Food Munch Home" className="logo-img" />
        </Link>

        <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
          <button className="close-btn" aria-label="close menu" onClick={closeNavbar}>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          <Link to="/" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
            <img src={logo} width="160" height="40" alt="Food Munch Home" className="logo-img" />
          </Link>

          <ul className="navbar-list">
            {navLinks.map((link) => (
              <li className="navbar-item" key={link.id}>
                <a
                  href={`/${link.href}`}
                  className={`navbar-link hover-underline ${location.pathname === '/' && activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <div className="separator"></div>
                  <span className="span">{link.label}</span>
                </a>
              </li>
            ))}
            <li className="navbar-item">
              <Link to="/favorites" className="navbar-link hover-underline" onClick={closeNavbar}>
                <div className="separator"></div>
                <span className="span">Favorites</span>
              </Link>
            </li>
          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>
            <address className="body-4">
              Banjara Hills Road No. 12, <br />
              Hyderabad, Telangana 500034
            </address>
            <p className="body-4 navbar-text">Open: 11:00 am – 11:00 pm Daily</p>
            <a href="mailto:reservations@foodmunch.in" className="body-4 sidebar-link">reservations@foodmunch.in</a>
            <div className="separator"></div>
            <p className="contact-label">Booking Request</p>
            <a href="tel:+914066778899" className="body-1 contact-number hover-underline">+91 40 6677 8899</a>
          </div>
        </nav>

        <div className="header-actions">
          <button 
            className="cart-btn" 
            aria-label={`open cart, ${cartCount} items`}
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <Link to="/" onClick={(e) => handleNavClick(e, '#reservation')} className="btn btn-secondary">
            <span className="text text-1">Find A Table</span>
            <span className="text text-2" aria-hidden="true">Find A Table</span>
          </Link>

          <button className="nav-open-btn" aria-label="open menu" onClick={toggleNavbar}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
        </div>

        <div className={`overlay ${isActive ? 'active' : ''}`} onClick={closeNavbar} data-overlay></div>
      </div>
    </header>
  );
};

export default Navbar;
