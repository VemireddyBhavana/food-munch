import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Navbar from './Navbar';
import FoodGallery from './FoodGallery';
import Footer from './Footer';
import BackToTop from './BackToTop';
import CartDrawer from './CartDrawer';
import Preloader from './Preloader';

import { useEffect } from 'react';

const Layout = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal-item, .slide-in-left, .slide-in-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Preloader />
      <Topbar />
      <Navbar />
      <CartDrawer />
      <main>
        <article>
          <Outlet />
        </article>
      </main>
      <FoodGallery />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
