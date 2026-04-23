import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const categoryData = [
  { title: 'Breakfast', id: 'breakfast', desc: 'Start your mornings right with our wholesome South Indian and continental breakfast spreads.', img: 'https://res.cloudinary.com/de8opipom/image/upload/v1776955706/9da44767-94a0-4e31-bbea-4b56ba6d8fec-md_xvl108.jpg' },
  { title: 'Vegetarian', id: 'vegetarian', desc: 'A gourmet celebration of vegetables, featuring rich gravies and garden-fresh textures.', img: '/assets/images/menu-2.png' },
  { title: 'Beef', id: 'beef', desc: 'Savour the rich, succulent flavours of our premium aged beef cuts, slow-cooked to perfection.', img: '/assets/images/menu-3.png' },
  { title: 'Chicken', id: 'chicken', desc: 'Tender, farm-fresh chicken prepared with aromatic spices and global techniques for a delightful bite.', img: '/assets/images/menu-4.png' },
  { title: 'Dessert', id: 'dessert', desc: 'Indulge in our artisanal sweets, from decadent chocolate lava cakes to traditional Hyderabadi delights.', img: '/assets/images/menu-5.png' },
  { title: 'Goat', id: 'goat', desc: 'Authentic Nizami-style goat meat, marinated overnight and cooked in traditional handis for ultimate tenderness.', img: '/assets/images/menu-6.png' },
  { title: 'Lamb', id: 'lamb', desc: 'Exquisite lamb specialities infused with saffron and rare herbs, celebrating the legacy of Royal kitchens.', img: '/assets/images/menu-1.png' },
  { title: 'Miscellaneous', id: 'miscellaneous', desc: 'A collection of unique, seasonal delicacies and chef-curated surprises from around the globe.', img: '/assets/images/menu-2.png' },
  { title: 'Pasta', id: 'pasta', desc: 'Hand-crafted Italian pasta tossed in rich, home-made sauces with fresh basil and premium cheeses.', img: '/assets/images/menu-3.png' },
  { title: 'Pork', id: 'pork', desc: 'Succulent pork selections, glazed with honey and spice, providing a perfect balance of sweet and savoury.', img: '/assets/images/menu-4.png' },
  { title: 'Seafood', id: 'seafood', desc: 'Freshly caught treasures from the ocean, grilled or pan-seared to preserve their delicate, natural flavours.', img: '/assets/images/menu-5.png' },
  { title: 'Appetizers', id: 'appetizers', desc: 'From crispy kebabs to tangy chaats — our starters set the perfect tone for an indulgent meal.', img: 'https://res.cloudinary.com/de8opipom/image/upload/v1776956563/a94f3d20-5189-4dec-8606-a26ca4cdd2f1_xsd3s1.png' },
  { title: 'Drinks', id: 'drinks', desc: 'Sip on freshly blended mocktails, lassis, and premium beverages curated to refresh you.', img: 'https://res.cloudinary.com/de8opipom/image/upload/v1776956791/4533f494-9f56-4107-961a-22651c9cddd8-md_gt3ems.jpg' },
  { title: 'Side', id: 'side', desc: 'The perfect accompaniments, from truffle fries to garlic naans, designed to elevate your main course.', img: '/assets/images/menu-2.png' },
  { title: 'Vegan', id: 'vegan', desc: 'Vibrant, plant-based creations that never compromise on flavour, using the freshest organic produce.', img: '/assets/images/menu-3.png' }
];

const Menu = () => {
  return (
    <section className="section menu bg-black-10 text-center" aria-label="menu" id="menu">
      <div className="container">
        <p className="section-subtitle label-2">Flavours For Royalty</p>
        <h2 className="headline-1 section-title">Our Delicious Menu</h2>
        <p className="section-text">
          Explore our wide range of categories, each offering a curated selection of the finest international dishes.
        </p>

        <ul className="grid-list">
          {categoryData.map((item, index) => {
            const catId = item.id.toLowerCase();
            
            return (
              <li key={index}>
                <div className="service-card">
                  <Link to={`/categories/${encodeURIComponent(catId)}`} className="has-before hover:shine">
                    <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                      <img
                        src={item.img}
                        width="285"
                        height="336"
                        loading="lazy"
                        alt={item.title}
                        className="img-cover service-img"
                      />
                    </figure>
                  </Link>
                  
                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <Link to={`/categories/${encodeURIComponent(catId)}`}>{item.title}</Link>
                    </h3>
                    <p className="service-card-desc">{item.desc}</p>
                    <Link
                      to={`/categories/${encodeURIComponent(catId)}`}
                      className="btn-text hover-underline label-2"
                    >
                      ☰ VIEW MENU
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
};

export default Menu;
