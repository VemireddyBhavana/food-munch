import React from 'react';
import { motion } from 'framer-motion';
import { badge_1, shape_4, shape_9 } from '../data/imageAssets';

const SpecialDish = () => {
  return (
    <section className="special-dish text-center bg-black-10" aria-labelledby="dish-label">
      <div className="special-dish-banner">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://res.cloudinary.com/de8opipom/image/upload/v1777105998/ChatGPT_Image_Apr_25_2026_02_01_19_PM_b42qwm.png"
          width="940"
          height="900"
          loading="lazy"
          alt="Special dish — Hyderabadi Dum Biryani"
          className="img-cover"
        />
      </div>

      <div className="special-dish-content bg-black-10">
        <div className="container">
          <img src={badge_1} width="28" height="41" loading="lazy" alt="Chef's special badge" className="abs-img" />
          <p className="section-subtitle label-2" id="dish-label">Chef's Special</p>
          <h2 className="headline-1 section-title">Hyderabadi Dum Biryani</h2>
          <p className="section-text">
            Our crown jewel — slow-cooked in a sealed handi with aged Basmati rice, tender mutton, and a
            secret masala passed down through three generations. Every grain tells the story of Hyderabad's
            Nizami culinary legacy. Served with raita, salan, and a wedge of lemon.
          </p>

          <div className="wrapper">
            <del className="del body-3">₹699</del>
            <span className="span body-1">₹499</span>
          </div>

          <a
            href="#reservation"
            className="btn btn-primary special-dish-btn"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text text-1">Order Now</span>
            <span className="text text-2" aria-hidden="true">Order Now</span>
          </a>
        </div>
      </div>

      <img src={shape_4} width="179" height="359" loading="lazy" alt="" className="shape shape-1" />
      <img src={shape_9} width="351" height="462" loading="lazy" alt="" className="shape shape-2" />
    </section>
  );
};

export default SpecialDish;
