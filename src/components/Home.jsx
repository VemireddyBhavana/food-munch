import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Service from './Service';
import About from './About';
import SpecialDish from './SpecialDish';
import Menu from './Menu';
import Reservation from './Reservation';
import Features from './Features';
import Testimonials from './Testimonials';

const RevealSection = ({ children, zIndex }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ position: 'relative', zIndex: zIndex || 1 }}
  >
    {children}
  </motion.div>
);

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <>
      <Hero />
      <RevealSection><Service /></RevealSection>
      <RevealSection><About /></RevealSection>
      <RevealSection><SpecialDish /></RevealSection>
      <RevealSection>
        <Menu selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      </RevealSection>
      <RevealSection zIndex={10}><Reservation /></RevealSection>
      <RevealSection><Features /></RevealSection>
      <RevealSection><Testimonials /></RevealSection>
    </>
  );
}

export default Home;
