import React, { useEffect } from 'react';
import Preloader from './components/Preloader';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import SpecialDish from './components/SpecialDish';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Features from './components/Features';
import Event from './components/Event';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    // Top-level document setup if needed
    document.body.classList.add('loaded');
  }, []);

  return (
    <>
      <Preloader />
      <Topbar />
      <Navbar />
      <main>
        <article>
          <Hero />
          <Service />
          <About />
          <SpecialDish />
          <Menu />
          <Testimonials />
          <Reservation />
          <Features />
          <Event />
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
