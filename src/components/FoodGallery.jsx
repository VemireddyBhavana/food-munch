import React from 'react';
import { Camera } from 'lucide-react';
import { service_2, service_3, event_1, event_2, event_3, about_banner } from '../data/imageAssets';

const FoodGallery = () => {
  const galleryImages = [
    { src: service_2, alt: 'Healthy Salad' },
    { src: service_3, alt: 'Italian Pizza' },
    { src: event_1, alt: 'Gourmet Toast' },
    { src: event_2, alt: 'Fresh Pasta' },
    { src: event_3, alt: 'Buddha Bowl' },
    { src: about_banner, alt: 'Fresh Veggies' }
  ];

  return (
    <section className="section food-gallery no-padding" aria-label="food-gallery">
      <ul className="gallery-list has-after">
        {galleryImages.map((img, index) => (
          <li className="gallery-item" key={index}>
            <div className="gallery-card has-before hover:shine">
              <figure className="card-banner img-holder" style={{ '--width': 400, '--height': 400 }}>
                <img
                  src={img.src}
                  width="400"
                  height="400"
                  loading="lazy"
                  alt={img.alt}
                  className="img-cover"
                />
              </figure>
              <div className="gallery-content">
                <Camera size={24} color="white" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};


export default FoodGallery;

