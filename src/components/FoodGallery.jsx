import React from 'react';

const FoodGallery = () => {
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800', alt: 'Healthy Salad' },
    { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', alt: 'Italian Pizza' },
    { src: 'https://images.unsplash.com/photo-1484723046838-4a1801c18118?auto=format&fit=crop&q=80&w=800', alt: 'Gourmet Toast' },
    { src: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800', alt: 'Fresh Pasta' },
    { src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800', alt: 'Buddha Bowl' },
    { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800', alt: 'Fresh Veggies' }
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
                <ion-icon name="instagram-outline" aria-hidden="true"></ion-icon>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FoodGallery;
