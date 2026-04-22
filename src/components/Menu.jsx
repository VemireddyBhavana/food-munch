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
  { title: 'Starter', id: 'starter', desc: 'Delicious starters.', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=400' },
  { title: 'Drinks', id: 'drinks', desc: 'Refreshing beverages.', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400' },
  { title: 'Side', id: 'side', desc: 'Perfect accompaniments.', img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800' },
  { title: 'Vegan', id: 'vegan', desc: 'Wholesome plant-based.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400' },
  { title: 'Vegetarian', id: 'vegetarian', desc: 'Flavorful meat-free dishes.', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400' },
  { title: 'Breakfast', id: 'breakfast', desc: 'Essential morning meals.', img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=400' }
];

const Menu = ({ selectedCategory, onCategoryChange }) => {
  const [animKey, setAnimKey] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const menuGridRef = useRef(null);

  useEffect(() => {
    setAnimKey(prev => prev + 1);
  }, [selectedCategory]);

  const handleFilterClick = (catId) => {
    onCategoryChange(catId);
    // Smooth scroll to the menu grid if needed
    document.getElementById('menu-grid-start')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filtered = selectedCategory === 'All'
    ? allMenuItems
    : allMenuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <h2 className="headline-1 section-title text-center">Our Delicious Menu</h2>

        {/* Categories Grid (Overhaul Design) */}
        <div className="category-grid">
          {categoryData.map((item, index) => {
            const catId = item.id.toLowerCase();
            const isExpanded = expandedCategory === catId;
            
            return (
              <div 
                className={`category-card ${isExpanded ? 'active' : ''}`}
                key={index}
                onClick={() => setExpandedCategory(isExpanded ? null : catId)}
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
                  {isExpanded ? 'Close Meals' : 'View Meals'}
                </div>
              </div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {expandedCategory && (
            <motion.div
              key={expandedCategory}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="dedicated-meals-container"
              style={{ overflow: 'hidden', marginBlockStart: '40px' }}
            >
              <h3 className="headline-2 text-center" style={{ marginBlockEnd: '30px', textTransform: 'capitalize' }}>
                Dedicated {expandedCategory} Selection
              </h3>
              <div className="grid-list" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {(menuData[expandedCategory] || []).map((meal, i) => (
                  <motion.div
                    key={meal.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="meal-card"
                    style={{ 
                      background: 'var(--eerie-black-2)', 
                      padding: '20px', 
                      borderRadius: '16px',
                      border: '1px solid var(--white-alpha-10)'
                    }}
                  >
                    <figure className="card-banner img-holder" style={{ aspectRatio: '16/9', borderRadius: '12px', marginBlockEnd: '15px' }}>
                      <img src={meal.image} alt={meal.name} className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBlockEnd: '10px' }}>
                        <h4 className="title-4">{meal.name}</h4>
                        {meal.price && <span className="body-3" style={{ color: 'var(--gold-crayola)' }}>{meal.price}</span>}
                      </div>
                      <p className="body-4" style={{ color: 'var(--quick-silver)', fontSize: '1.4rem' }}>{meal.description || 'Delicious meal prepared with fresh ingredients.'}</p>
                      
                      <Link to={`/menu/${expandedCategory}/${meal.id}`} className="btn-text hover-underline" style={{ marginBlockStart: '15px', display: 'inline-block' }}>
                        View Details →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
