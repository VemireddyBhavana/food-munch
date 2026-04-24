import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { hero_slider_1, hero_slider_2, hero_slider_3, hero_icon } from '../data/imageAssets';

const slides = [
  {
    img: hero_slider_1,
    subtitle: 'Traditional & Hygienic',
    title: <>For the Love of <br /> Delicious Food</>,
    text: 'Gather around the table, share stories, and savour every bite of our handcrafted Hyderabadi cuisine.'
  },
  {
    img: hero_slider_2,
    subtitle: 'A Delightful Experience',
    title: <>Flavours Inspired by <br /> Rich Traditions</>,
    text: 'From dum biryanis to sizzling kebabs — each dish is a tribute to Hyderabad\'s legendary culinary heritage.'
  },
  {
    img: hero_slider_3,
    subtitle: 'Amazing & Authentic',
    title: <>Where Every Flavour <br /> Tells a Story</>,
    text: 'Step into Food Munch and let your senses journey through spices, aromas, and unforgettable flavours.'
  }
];

const Hero = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const totalSlides = slides.length;

  const slideNext = useCallback(() => {
    setCurrentSlidePos((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const slidePrev = () => {
    setCurrentSlidePos((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(slideNext, 7000);
    return () => clearInterval(autoSlideInterval);
  }, [slideNext, currentSlidePos]);

  return (
    <section className="hero text-center" aria-label="home" id="home">
      {/* Dark overlay for text readability */}
      <div className="hero-overlay"></div>

      <ul className="hero-slider" data-hero-slider>
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`slider-item ${currentSlidePos === index ? 'active' : ''}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img src={slide.img} width="1880" height="950" alt="" className="img-cover" />
            </div>
            <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>
            <h1 className="display-1 hero-title slider-reveal">{slide.title}</h1>
            <p className="body-2 hero-text slider-reveal">{slide.text}</p>
            <a href="#menu" className="btn btn-primary slider-reveal" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">View Our Menu</span>
            </a>
          </li>
        ))}
      </ul>

      <button className="slider-btn prev" aria-label="slide to previous" onClick={slidePrev}>
        <ChevronLeft size={30} />
      </button>

      <button className="slider-btn next" aria-label="slide to next" onClick={slideNext}>
        <ChevronRight size={30} />
      </button>

      {/* Slide dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${currentSlidePos === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlidePos(index)}
          />
        ))}
      </div>

      <a href="#reservation" className="hero-btn has-after" onClick={(e) => {
        e.preventDefault();
        document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={hero_icon} width="48" height="48" alt="booking icon" />
        <span className="label-2 text-center span">Book A Table</span>
      </a>
    </section>
  );
};

export default Hero;

