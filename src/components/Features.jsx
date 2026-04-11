import React from 'react';

const Features = () => {
  const features = [
    {
      img: '/assets/images/features-icon-1.png',
      title: 'Hygienic Kitchen',
      text: 'Our kitchen follows strict FSSAI food safety standards — every dish is prepared in a clean, certified environment.'
    },
    {
      img: '/assets/images/features-icon-2.png',
      title: 'Fresh Ingredients',
      text: 'We source locally grown, farm-fresh produce daily to ensure bold flavours and maximum nutrition in every meal.'
    },
    {
      img: '/assets/images/features-icon-3.png',
      title: 'Expert Chefs',
      text: 'Our chefs bring 20+ years of experience in Hyderabadi, Mughlai, and modern fusion cuisines to your plate.'
    },
    {
      img: '/assets/images/features-icon-4.png',
      title: 'Events & Catering',
      text: 'From intimate family dinners to grand corporate banquets — our event team crafts experiences you\'ll remember.'
    }
  ];

  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">
        <p className="section-subtitle label-2">Why Choose Us</p>
        <h2 className="headline-1 section-title">Our Strengths</h2>

        <ul className="grid-list">
          {features.map((feature, index) => (
            <li className="feature-item scroll-reveal-item" key={index}>
              <div className="feature-card">
                <div className="card-icon">
                  <img src={feature.img} width="100" height="80" loading="lazy" alt={feature.title} />
                </div>
                <h3 className="title-2 card-title">{feature.title}</h3>
                <p className="label-1 card-text">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <img src="/assets/images/shape-7.png" width="208" height="178" loading="lazy" alt="shape" className="shape shape-1" />
        <img src="/assets/images/shape-8.png" width="120" height="115" loading="lazy" alt="shape" className="shape shape-2" />
      </div>
    </section>
  );
};

export default Features;
