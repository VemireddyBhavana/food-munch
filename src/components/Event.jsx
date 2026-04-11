import React from 'react';

const events = [
  {
    img: '/assets/images/event-1.jpg',
    date: '2026-06-15',
    displayDate: '15 Jun 2026',
    subtitle: 'Food & Lifestyle',
    title: 'Hyderabad Food Festival 2026'
  },
  {
    img: '/assets/images/event-2.jpg',
    date: '2026-07-08',
    displayDate: '08 Jul 2026',
    subtitle: 'Live Cooking',
    title: 'Chef\'s Table — Live Biryani Night'
  },
  {
    img: '/assets/images/event-3.jpg',
    date: '2026-07-20',
    displayDate: '20 Jul 2026',
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
                  <time className="publish-date label-2" dateTime={event.date}>{event.displayDate}</time>
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

        <a href="#" className="btn btn-primary">
          <span className="text text-1">View All Events</span>
          <span className="text text-2" aria-hidden="true">View All Events</span>
        </a>
      </div>
    </section>
  );
};

export default Event;
