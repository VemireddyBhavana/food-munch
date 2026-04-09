import React, { useState, useEffect, useCallback } from 'react';

const Hero = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const totalSlides = 3;

  const slideNext = useCallback(() => {
    setCurrentSlidePos((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  }, []);

  const slidePrev = () => {
    setCurrentSlidePos((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    let autoSlideInterval = setInterval(() => {
      slideNext();
    }, 7000);
    return () => clearInterval(autoSlideInterval);
  }, [slideNext, currentSlidePos]);

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        {[
          {
            img: '/assets/images/hero-slider-1.jpg',
            subtitle: 'Tradational & Hygine',
            title: <>For the love of <br /> delicious food</>,
            text: 'Come with family & feel the joy of mouthwatering food'
          },
          {
            img: '/assets/images/hero-slider-2.jpg',
            subtitle: 'delightful experience',
            title: <>Flavors Inspired by <br /> the Seasons</>,
            text: 'Come with family & feel the joy of mouthwatering food'
          },
          {
            img: '/assets/images/hero-slider-3.jpg',
            subtitle: 'amazing & delicious',
            title: <>Where every flavor <br /> tells a story</>,
            text: 'Come with family & feel the joy of mouthwatering food'
          }
        ].map((slide, index) => (
          <li key={index} className={`slider-item ${currentSlidePos === index ? 'active' : ''}`} data-hero-slider-item>
            <div className="slider-bg">
              <img src={slide.img} width="1880" height="950" alt="" className="img-cover" />
            </div>
            <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>
            <h1 className="display-1 hero-title slider-reveal">{slide.title}</h1>
            <p className="body-2 hero-text slider-reveal">{slide.text}</p>
            <a href="#menu" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">View Our Menu</span>
            </a>
          </li>
        ))}
      </ul>

      <button className="slider-btn prev" aria-label="slide to previous" onClick={slidePrev}>
        <ion-icon name="chevron-back"></ion-icon>
      </button>

      <button className="slider-btn next" aria-label="slide to next" onClick={slideNext}>
        <ion-icon name="chevron-forward"></ion-icon>
      </button>

      <a href="#reservation" className="hero-btn has-after">
        <img src="/assets/images/hero-icon.png" width="48" height="48" alt="booking icon" />
        <span className="label-2 text-center span">Book A Table</span>
      </a>
    </section>
  );
};

export default Hero;
