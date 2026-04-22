import React from 'react';
import { Mail, MapPin } from 'lucide-react';

// Custom SVG Icons for brands (missing in lucide-react 1.8.0)
const Facebook = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

import logo from '../assets/logo.png';

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    if (input && input.value) {
      alert(`🎉 Thank you! You'll now receive exclusive offers at ${input.value}`);
      input.value = '';
    }
  };

  return (
    <footer
      className="footer section has-bg-image text-center"
      style={{ backgroundImage: "url('/assets/images/footer-bg.jpg')" }}
      id="footer"
    >
      <div className="container">
        <div className="footer-top grid-list">

          {/* Brand + Newsletter */}
          <div className="footer-brand has-before has-after">
            <a
              href="#home"
              className="logo logo-container"
              style={{ marginInline: 'auto', justifyContent: 'center' }}
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <img src={logo} width="140" height="45" alt="Food Munch" className="logo-img" />
            </a>

            <address className="body-4">
              Road No. 12, Banjara Hills, Hyderabad,<br />
              Telangana 500034, India
            </address>
            <a href="mailto:reservations@foodmunch.in" className="body-4 contact-link">
              reservations@foodmunch.in
            </a>
            <a href="tel:+914066778899" className="body-4 contact-link">
              Reservations: +91 40 6677 8899
            </a>
            <p className="body-4">Open Daily: 11:00 am – 11:00 pm</p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <p className="title-1">Stay Updated</p>
            <p className="label-1">
              Subscribe &amp; Get <span className="span">25% Off</span> your first order.
            </p>

            <form className="input-wrapper" onSubmit={handleSubscribe}>
              <div className="icon-wrapper">
                <Mail size={18} className="icon" />
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email address"
                  autoComplete="off"
                  className="input-field"
                  required
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>
                <span className="text text-2" aria-hidden="true">Subscribe</span>
              </button>
            </form>
          </div>

          {/* Nav Links */}
          <ul className="footer-list">
            {[
              { href: '#home', label: 'Home' },
              { href: '#menu', label: 'Our Menu' },
              { href: '#about', label: 'About Us' },
              { href: '#categories', label: 'Categories' },
              { href: '#reservation', label: 'Book A Table' },
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="label-2 footer-link hover-underline"
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <ul className="footer-list">
            {[
              { href: 'https://facebook.com', icon: <Facebook size={20} />, label: 'Facebook' },
              { href: 'https://instagram.com', icon: <Instagram size={20} />, label: 'Instagram' },
              { href: 'https://twitter.com', icon: <Twitter size={20} />, label: 'Twitter' },
              { href: 'https://youtube.com', icon: <Youtube size={20} />, label: 'Youtube' },
              { href: 'https://maps.google.com/', icon: <MapPin size={20} />, label: 'Maps' },
            ].map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-icon"
                  aria-label={label}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  {icon} <span className="label-2">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2026 Food Munch, Hyderabad. All Rights Reserved &nbsp;|&nbsp; Crafted with ❤️ in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

