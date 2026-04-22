import React, { useState } from 'react';
import { User, Calendar, Clock, ChevronDown } from 'lucide-react';

const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <form action="" className="form-left" onSubmit={handleSubmit}>
            <h2 className="headline-1 text-center">Online Reservation</h2>
            <p className="form-text text-center">
              Booking request{' '}
              <a href="tel:+914066778899" className="link">+91 40 6677 8899</a>
              {' '}or fill out the form below
            </p>

            {submitted && (
              <div className="booking-success" role="alert">
                ✅ Your table has been reserved! We'll confirm via call shortly.
              </div>
            )}

            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                autoComplete="off"
                className="input-field"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="off"
                className="input-field"
                required
              />
            </div>

            <div className="input-wrapper">
              <div className="icon-wrapper">
                <User size={14} className="icon" />
                <select name="person" className="input-field">
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={`${n}-person`}>{n} {n === 1 ? 'Person' : 'Persons'}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="icon" />
              </div>

              <div className="icon-wrapper">
                <Calendar size={14} className="icon" />
                <input type="date" name="reservation-date" className="input-field" required />
                <ChevronDown size={14} className="icon" />
              </div>

              <div className="icon-wrapper">
                <Clock size={14} className="icon" />
                <select name="time" className="input-field">
                  {['11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm',
                    '04:00 pm','05:00 pm','06:00 pm','07:00 pm','08:00 pm',
                    '09:00 pm','10:00 pm','10:30 pm'].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="icon" />
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Special requests or occasion details (optional)"
              autoComplete="off"
              className="input-field"
            ></textarea>

            <button type="submit" className="btn btn-secondary">
              <span className="text text-1">Reserve My Table</span>
              <span className="text text-2" aria-hidden="true">Reserve My Table</span>
            </button>
          </form>

          <div
            className="form-right text-center"
            style={{ backgroundImage: "url('/assets/images/form-pattern.png')" }}
            id="contact"
          >
            <h2 className="headline-1 text-center">Contact Us</h2>
            <p className="contact-label">Booking Request</p>
            <a href="tel:+914066778899" className="body-1 contact-number hover-underline">+91 40 6677 8899</a>

            <div className="separator"></div>

            <p className="contact-label">Location</p>
            <address className="body-4">
              Road No. 12, Banjara Hills, <br />
              Hyderabad, Telangana 500034
            </address>

            <p className="contact-label">Lunch Hours</p>
            <p className="body-4">
              Monday to Sunday <br />
              11:00 am – 3:30 pm
            </p>

            <p className="contact-label">Dinner Hours</p>
            <p className="body-4">
              Monday to Sunday <br />
              7:00 pm – 11:00 pm
            </p>

            <p className="contact-label">Email Us</p>
            <a href="mailto:reservations@foodmunch.in" className="body-4 contact-email-link">
              reservations@foodmunch.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

