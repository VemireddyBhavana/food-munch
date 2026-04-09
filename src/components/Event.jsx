import React from 'react';

const Event = () => {
  const events = [
    {
      img: '/assets/images/event-1.jpg',
      date: '15/09/2022',
      title: 'Food, Flavour n\' Lifestyle'
    },
    {
      img: '/assets/images/event-2.jpg',
      date: '08/09/2022',
      title: 'Flavour so good you\'ll try'
    },
    {
      img: '/assets/images/event-3.jpg',
      date: '03/09/2022',
      title: 'Flavour so good you\'ll try'
    }
  ];

  return (
    <section className="section event bg-black-10" aria-label="event">
      <div className="container">
        <p className="section-subtitle label-2 text-center">Recent Updates</p>
        <h2 className="headline-1 section-title text-center">Latest News & Events</h2>

        <ul className="grid-list">
          {events.map((event, index) => (
            <li key={index}>
              <div className="event-card has-before hover:shine">
                <div className="card-banner img-holder" style={{ '--width': 350, '--height': 450 }}>
                  <img src={event.img} width="350" height="450" loading="lazy" alt={event.title} className="img-cover" />
                  <time className="publish-date label-2" dateTime={event.date.split('/').reverse().join('-')}>{event.date}</time>
                </div>
                <div className="card-content">
                  <p className="card-subtitle label-2 text-center">Food, Flavour</p>
                  <h3 className="card-title title-2 text-center">
                    <a href="#">{event.title}</a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <a href="#" className="btn btn-primary">
          <span className="text text-1">View Our Blog</span>
          <span className="text text-2" aria-hidden="true">View Our Blog</span>
        </a>
      </div>
    </section>
  );
};

export default Event;
