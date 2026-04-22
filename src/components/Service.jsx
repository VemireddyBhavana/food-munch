import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  const services = [
    {
      img: '/assets/images/service-1.jpg',
      title: 'Breakfast',
      category: 'breakfast',
      desc: 'Start your mornings right with our wholesome South Indian and continental breakfast spreads.'
    },
    {
      img: '/assets/images/service-2.jpg',
      title: 'Appetizers',
      category: 'starter',
      desc: 'From crispy kebabs to tangy chaats — our starters set the perfect tone for an indulgent meal.'
    },
    {
      img: '/assets/images/service-3.jpg',
      title: 'Signature Drinks',
      category: 'drinks',
      desc: 'Sip on freshly blended mocktails, lassis, and premium beverages curated to refresh you.'
    }
  ];

  return (
    <section className="section service bg-black-10 text-center" aria-label="service" id="categories">
      <div className="container">
        <p className="section-subtitle label-2">Flavours For Royalty</p>
        <h2 className="headline-1 section-title">We Offer Top Notch</h2>
        <p className="section-text">
          From hearty breakfasts to curated appetizers and handcrafted beverages, every visit to Food Munch
          promises an experience that delights all the senses.
        </p>

        <ul className="grid-list">
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-card">
                <Link to={`/menu/${service.category}`} className="has-before hover:shine">
                  <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                    <img
                      src={service.img}
                      width="285"
                      height="336"
                      loading="lazy"
                      alt={service.title}
                      className="img-cover service-img"
                    />
                  </figure>
                </Link>
                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <Link to={`/menu/${service.category}`}>{service.title}</Link>
                  </h3>
                  <p className="service-card-desc">{service.desc}</p>
                  <Link
                    to={`/menu/${service.category}`}
                    className="btn-text hover-underline label-2"
                  >
                    ☰ View Menu
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <img src="/assets/images/shape-1.png" width="246" height="412" loading="lazy" alt="shape" className="shape shape-1 move-anim" />
        <img src="/assets/images/shape-2.png" width="343" height="345" loading="lazy" alt="shape" className="shape shape-2 move-anim" />
      </div>
    </section>
  );
};

export default Service;
