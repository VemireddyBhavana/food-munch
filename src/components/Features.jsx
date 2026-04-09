import React from 'react';

const Features = () => {
  const features = [
    {
      img: '/assets/images/features-icon-1.png',
      title: 'Hygienic Food',
      text: 'Lorem Ipsum is simply dummy printing and typesetting.'
    },
    {
      img: '/assets/images/features-icon-2.png',
      title: 'Fresh Environment',
      text: 'Lorem Ipsum is simply dummy printing and typesetting.'
    },
    {
      img: '/assets/images/features-icon-3.png',
      title: 'Skilled Chefs',
      text: 'Lorem Ipsum is simply dummy printing and typesetting.'
    },
    {
      img: '/assets/images/features-icon-4.png',
      title: 'Event & Party',
      text: 'Lorem Ipsum is simply dummy printing and typesetting.'
    }
  ];

  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">
        <p className="section-subtitle label-2">Why Choose Us</p>
        <h2 className="headline-1 section-title">Our Strength</h2>

        <ul className="grid-list">
          {features.map((feature, index) => (
            <li className="feature-item" key={index}>
              <div className="feature-card">
                <div className="card-icon">
                  <img src={feature.img} width="100" height="80" loading="lazy" alt="icon" />
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
