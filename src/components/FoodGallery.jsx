import React from 'react';
import { Camera } from 'lucide-react';

const FoodGallery = () => {
  const galleryImages = [
    { src: '/assets/images/menu-1.png', alt: 'Healthy Salad' },
    { src: '/assets/images/menu-2.png', alt: 'Italian Pizza' },
    { src: '/assets/images/menu-3.png', alt: 'Gourmet Toast' },
    { src: '/assets/images/menu-4.png', alt: 'Fresh Pasta' },
    { src: '/assets/images/menu-5.png', alt: 'Buddha Bowl' },
    { src: '/assets/images/menu-6.png', alt: 'Fresh Veggies' }
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

