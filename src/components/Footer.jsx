import React from 'react';
import { Mail } from 'lucide-react';
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

          {/* Social Links */}
          <ul className="footer-list">
            {[
              { href: 'https://facebook.com', label: 'Facebook' },
              { href: 'https://instagram.com', label: 'Instagram' },
              { href: 'https://twitter.com', label: 'Twitter / X' },
              { href: 'https://youtube.com', label: 'YouTube' },
              { href: 'https://maps.google.com/', label: 'Google Maps' },
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-2 footer-link hover-underline"
                >
                  {label}
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

