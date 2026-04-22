import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';

const categoryData = [
  { title: 'Beef', id: 'beef', desc: 'Hearty beef dishes.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400' },
  { title: 'Chicken', id: 'chicken', desc: 'Tender chicken favorites.', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400' },
  { title: 'Dessert', id: 'dessert', desc: 'Sweet treats.', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400' },
  { title: 'Goat', id: 'goat', desc: 'Savory goat meat.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400' },
  { title: 'Lamb', id: 'lamb', desc: 'Aromatic lamb specialties.', img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=400' },
  { title: 'Miscellaneous', id: 'miscellaneous', desc: 'Unique food finds.', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400' },
  { title: 'Pasta', id: 'pasta', desc: 'Authentic Italian pasta.', img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=400' },
  { title: 'Pork', id: 'pork', desc: 'Succulent pork selections.', img: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=400' },
  { title: 'Seafood', id: 'seafood', desc: 'Fresh from the ocean.', img: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800' },
  { title: 'Appetizers', id: 'appetizers', desc: 'Delicious starters.', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=400' },
  { title: 'Drinks', id: 'drinks', desc: 'Refreshing beverages.', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400' },
  { title: 'Side', id: 'side', desc: 'Perfect accompaniments.', img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800' },
  { title: 'Vegan', id: 'vegan', desc: 'Wholesome plant-based.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400' },
  { title: 'Vegetarian', id: 'vegetarian', desc: 'Flavorful meat-free dishes.', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400' },
  { title: 'Breakfast', id: 'breakfast', desc: 'Essential morning meals.', img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=400' }
];

const Menu = ({ selectedCategory, onCategoryChange }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const menuGridRef = useRef(null);

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <h2 className="headline-1 section-title text-center">Our Delicious Menu</h2>

        {/* Categories Grid (Overhaul Design) */}
        <div className="category-grid">
          {categoryData.map((item, index) => {
            const catId = item.id.toLowerCase();
            
            return (
              <Link 
                to={`/categories/${encodeURIComponent(catId)}`}
                className="category-card"
                key={index}
                style={{ cursor: 'pointer' }}
              >
                <figure className="card-banner img-holder">
                  <img
                    src={item.img}
                    width="80"
                    height="80"
                    loading="lazy"
                    alt={item.title}
                    className="img-cover"
                  />
                </figure>
                
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
                </div>

                <div className="btn-meals">
                  View Meals
                </div>
              </Link>
            );
          })}
        </div>

        <a
          href="#reservation"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text text-1">Book A Table</span>
          <span className="text text-2" aria-hidden="true">Book A Table</span>
        </a>

        <img src="/assets/images/shape-5.png" width="921" height="1036" loading="lazy" alt="shape" className="shape shape-2 move-anim" />
        <img src="/assets/images/shape-6.png" width="343" height="345" loading="lazy" alt="shape" className="shape shape-3 move-anim" />
      </div>
    </section>
  );
};

export default Menu;
