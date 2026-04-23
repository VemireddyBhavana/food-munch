import React, { useEffect, useRef } from 'react';

const About = () => {
  const bannerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Parallax effect
    const parallaxItems = document.querySelectorAll('[data-parallax-item]');
    const handleMouseMove = (event) => {
      let x = (event.clientX / window.innerWidth * 10) - 5;
      let y = (event.clientY / window.innerHeight * 10) - 5;
      x = -x;
      y = -y;
      for (let i = 0; i < parallaxItems.length; i++) {
        const speed = Number(parallaxItems[i].dataset.parallaxSpeed);
        parallaxItems[i].style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll-based slide-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section about text-center" aria-labelledby="about-label" id="about">
      <div className="container">
        <div className="about-content slide-in-left" ref={contentRef}>
          <p className="label-2 section-subtitle" id="about-label">Our Story</p>
          <h2 className="headline-1 section-title">A Legacy Rooted in <br /> Hyderabad's Heart</h2>
          <p className="section-text">
            Born in the bustling lanes of Banjara Hills, Food Munch was founded in 2008 with a simple belief —
            that every meal should tell a story. Inspired by Hyderabad's rich Nizami culinary traditions and
            fused with modern flavours, our kitchen brings together authentic dum biryanis, kebabs, and
            contemporary global cuisine under one roof. Every dish is crafted with locally sourced ingredients
            and cooked with generations of passion.
          </p>

          <div className="contact-label">Reserve by Phone</div>
          <a href="tel:+914066778899" className="body-1 contact-number hover-underline">+91 40 6677 8899</a>

          <a href="#menu" className="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="text text-1">Explore Menu</span>
            <span className="text text-2" aria-hidden="true">Explore Menu</span>
          </a>
        </div>

        <figure className="about-banner slide-in-right" ref={bannerRef}>
          <img
            src="/assets/images/about-banner.jpg"
            width="570"
            height="570"
            loading="lazy"
            alt="Our restaurant kitchen"
            className="w-100"
            data-parallax-item
            data-parallax-speed="1"
          />

          <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
            <img src="/assets/images/about-abs-image.jpg" width="285" height="285" loading="lazy" alt="Chef preparing food" className="w-100" />
          </div>

          <div className="abs-img abs-img-2 has-before" data-parallax-item data-parallax-speed="0.5">
            <img src="/assets/images/badge-2.png" width="133" height="134" loading="lazy" alt="Award badge" />
          </div>
        </figure>

        <img src="/assets/images/shape-3.png" width="197" height="194" loading="lazy" alt="" className="shape" />
      </div>
    </section>
  );
};

export default About;
