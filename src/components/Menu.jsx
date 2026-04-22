import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';

const categoryData = [
  { title: 'Breakfast', id: 'breakfast', desc: 'Start your mornings right with our wholesome South Indian and continental breakfast spreads.', img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=400' },
  { title: 'Vegetarian', id: 'vegetarian', desc: 'A gourmet celebration of vegetables, featuring rich gravies and garden-fresh textures.', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400' },
  { title: 'Beef', id: 'beef', desc: 'Savour the rich, succulent flavours of our premium aged beef cuts, slow-cooked to perfection.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400' },
  { title: 'Chicken', id: 'chicken', desc: 'Tender, farm-fresh chicken prepared with aromatic spices and global techniques for a delightful bite.', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400' },
  { title: 'Dessert', id: 'dessert', desc: 'Indulge in our artisanal sweets, from decadent chocolate lava cakes to traditional Hyderabadi delights.', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400' },
  { title: 'Goat', id: 'goat', desc: 'Authentic Nizami-style goat meat, marinated overnight and cooked in traditional handis for ultimate tenderness.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400' },
  { title: 'Lamb', id: 'lamb', desc: 'Exquisite lamb specialities infused with saffron and rare herbs, celebrating the legacy of Royal kitchens.', img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=400' },
  { title: 'Miscellaneous', id: 'miscellaneous', desc: 'A collection of unique, seasonal delicacies and chef-curated surprises from around the globe.', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400' },
  { title: 'Pasta', id: 'pasta', desc: 'Hand-crafted Italian pasta tossed in rich, home-made sauces with fresh basil and premium cheeses.', img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=400' },
  { title: 'Pork', id: 'pork', desc: 'Succulent pork selections, glazed with honey and spice, providing a perfect balance of sweet and savoury.', img: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=400' },
  { title: 'Seafood', id: 'seafood', desc: 'Freshly caught treasures from the ocean, grilled or pan-seared to preserve their delicate, natural flavours.', img: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800' },
  { title: 'Appetizers', id: 'appetizers', desc: 'From crispy kebabs to tangy chaats — our starters set the perfect tone for an indulgent meal.', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=400' },
  { title: 'Drinks', id: 'drinks', desc: 'Sip on freshly blended mocktails, lassis, and premium beverages curated to refresh you.', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400' },
  { title: 'Side', id: 'side', desc: 'The perfect accompaniments, from truffle fries to garlic naans, designed to elevate your main course.', img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800' },
  { title: 'Vegan', id: 'vegan', desc: 'Vibrant, plant-based creations that never compromise on flavour, using the freshest organic produce.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400' }
];

const Menu = ({ selectedCategory, onCategoryChange }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const menuGridRef = useRef(null);

  return (
    <section className="section menu bg-black-10 text-center" aria-label="menu" id="menu">
      <div className="container">
        <p className="section-subtitle label-2">Flavours For Royalty</p>
        <h2 className="headline-1 section-title">Our Delicious Menu</h2>
        <p className="section-text">
          Explore our wide range of categories, each offering a curated selection of the finest international dishes.
        </p>

        {/* Categories Grid (Exact Service-Card structure) */}
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
