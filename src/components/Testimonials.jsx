import React from 'react';

const Testimonials = () => {
  return (
    <section
      className="section testi text-center has-bg-image"
      style={{ backgroundImage: "url('/assets/images/testimonial-bg.jpg')" }}
      aria-label="testimonials"
    >
      <div className="container">
        <div className="quote">"</div>

        <p className="headline-2 testi-text">
          Food Munch is hands down the best dining experience in Hyderabad. The Dum Biryani was
          absolutely divine — perfectly spiced, incredibly aromatic. We celebrate every family occasion here!
        </p>

        <div className="wrapper">
          <div className="separator"></div>
          <div className="separator"></div>
          <div className="separator"></div>
        </div>

        <div className="profile">
          <img
            src="/assets/images/testi-avatar.jpg"
            width="100"
            height="100"
            loading="lazy"
            alt="Priya Sharma, loyal guest"
            className="img"
          />
          <p className="label-2 profile-name">Priya Sharma</p>
          <p className="testi-role label-2">Loyal Guest &mdash; Hyderabad</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
