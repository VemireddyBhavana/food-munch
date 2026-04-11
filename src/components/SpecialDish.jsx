import React from 'react';

const SpecialDish = () => {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
      <div className="special-dish-banner">
        <img
          src="/assets/images/special-dish-banner.jpg"
          width="940"
          height="900"
          loading="lazy"
          alt="Special dish — Hyderabadi Dum Biryani"
          className="img-cover"
        />
      </div>

      <div className="special-dish-content bg-black-10">
        <div className="container">
          <img src="/assets/images/badge-1.png" width="28" height="41" loading="lazy" alt="Chef's special badge" className="abs-img" />
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

      <img src="/assets/images/shape-4.png" width="179" height="359" loading="lazy" alt="" className="shape shape-1" />
      <img src="/assets/images/shape-9.png" width="351" height="462" loading="lazy" alt="" className="shape shape-2" />
    </section>
  );
};

export default SpecialDish;
