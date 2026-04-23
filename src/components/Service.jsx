import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  const services = [
    {
      img: 'https://res.cloudinary.com/de8opipom/image/upload/v1776955706/9da44767-94a0-4e31-bbea-4b56ba6d8fec-md_xvl108.jpg',
      title: 'Breakfast',
      category: 'breakfast',
      desc: 'Start your mornings right with our wholesome South Indian and continental breakfast spreads.'
    },
    {
      img: 'https://res.cloudinary.com/de8opipom/image/upload/v1776956563/a94f3d20-5189-4dec-8606-a26ca4cdd2f1_xsd3s1.png',
      title: 'Appetizers',
      category: 'appetizers',
      desc: 'From crispy kebabs to tangy chaats — our starters set the perfect tone for an indulgent meal.'
    },
    {
      img: 'https://res.cloudinary.com/de8opipom/image/upload/v1776956791/4533f494-9f56-4107-961a-22651c9cddd8-md_gt3ems.jpg',
      title: 'Drinks',
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
                <Link to={`/categories/${encodeURIComponent(service.category)}`} className="has-before hover:shine">
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
                    <Link to={`/categories/${encodeURIComponent(service.category)}`}>{service.title}</Link>
                  </h3>
                  <p className="service-card-desc">{service.desc}</p>
                  <Link
                    to={`/categories/${encodeURIComponent(service.category)}`}
                    className="btn-text hover-underline label-2"
                  >
                    ☰ View Menu
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* 
        <img src="/assets/images/shape-1.png" width="246" height="412" loading="lazy" alt="shape" className="shape shape-1 move-anim" /> */}
        <img src="/assets/images/shape-2.png" width="343" height="345" loading="lazy" alt="shape" className="shape shape-2 move-anim" />
      </div>
    </section>
  );
};

export default Service;
