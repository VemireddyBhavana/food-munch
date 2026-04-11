import React, { useState, useEffect } from 'react';

const Topbar = () => {
  const [address, setAddress] = useState('Road No. 12, Banjara Hills, Hyderabad');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      if ('geolocation' in navigator) {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
              );
              const data = await response.json();
              if (data && data.address) {
                const { road, city, town, village, country } = data.address;
                const cleanAddress = [road, city || town || village, country]
                  .filter(Boolean)
                  .join(', ');
                setAddress(cleanAddress || data.display_name);
              }
            } catch (error) {
              console.error('Error fetching address:', error);
            } finally {
              setLoading(false);
            }
          },
          (error) => {
            console.error('Geolocation error:', error);
            setLoading(false);
          }
        );
      }
    };
    fetchLocation();
  }, []);

  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">
            {loading ? 'Detecting location…' : address}
          </span>
        </address>

        <div className="separator"></div>

        <div className="topbar-item item-2">
          <div className="icon">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">Daily: 11:00 am – 11:00 pm</span>
        </div>

        <a href="tel:+914066778899" className="topbar-item link">
          <div className="icon">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">+91 40 6677 8899</span>
        </a>

        <div className="separator"></div>

        <a href="mailto:reservations@foodmunch.in" className="topbar-item link">
          <div className="icon">
            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">reservations@foodmunch.in</span>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
