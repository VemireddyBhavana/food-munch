import React from 'react';

const events = [
  {
    img: '/assets/images/event-1.jpg',
    subtitle: 'Food & Lifestyle',
    title: 'Hyderabad Food Festival 2026'
  },
  {
    img: '/assets/images/event-2.jpg',
    subtitle: 'Live Cooking',
    title: "Chef's Table — Live Biryani Night"
  },
  {
    img: '/assets/images/event-3.jpg',
    subtitle: 'Family Special',
    title: 'Sunday Brunch Fiesta with Live Music'
  }
];

const Event = () => {
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
                  <img
                    src={event.img}
                    width="350"
                    height="450"
                    loading="lazy"
                    alt={event.title}
                    className="img-cover event-img"
                  />
                </div>
                <div className="card-content">
                  <p className="card-subtitle label-2 text-center">{event.subtitle}</p>
                  <h3 className="card-title title-2 text-center">
                    <a href="#">{event.title}</a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center" style={{ marginBlockStart: '40px' }}>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">View All Events</span>
            <span className="text text-2" aria-hidden="true">View All Events</span>
          </a>
        </div>

        <img src="/assets/images/shape-5.png" width="921" height="1036" loading="lazy" alt="shape" className="shape shape-1" />
        <img src="/assets/images/shape-6.png" width="343" height="345" loading="lazy" alt="shape" className="shape shape-2" />
      </div>
    </section>
  );
};

export default Event;
