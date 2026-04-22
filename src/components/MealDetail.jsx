import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, Star } from 'lucide-react';
import { menuData } from '../data/menuData';

const MealDetail = () => {
  const { id } = useParams();
  
  // Find the meal across all categories
  let foundCategory = '';
  const meal = Object.entries(menuData).reduce((found, [catName, items]) => {
    if (found) return found;
    const item = items.find(i => i.id === id);
    if (item) {
      foundCategory = catName;
      return item;
    }
    return null;
  }, null);

  const [isLiked, setIsLiked] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('foodmunch_favorites') || '[]');
    return favorites.includes(id);
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('foodmunch_favorites') || '[]');
    if (isLiked) {
      if (!favorites.includes(id)) {
        favorites.push(id);
      }
    } else {
      const index = favorites.indexOf(id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem('foodmunch_favorites', JSON.stringify(favorites));
  }, [isLiked, id]);

  if (!meal) {
    return (
      <section className="section bg-black-10 text-center" style={{ minHeight: '100vh', display: 'grid', placeContent: 'center' }}>
        <div className="container">
          <h2 className="headline-1 section-title">Meal not found</h2>
          <Link to="/" className="btn btn-primary">
            <span className="text text-1">Back to Home</span>
            <span className="text text-2" aria-hidden="true">Back to Home</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{meal.name} | FoodMunch</title>
        <meta name="description" content={meal.description} />
      </Helmet>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section meal-detail bg-black-10 text-center" 
        aria-label="meal-detail"
      >
        <div className="container">
          
          <div className="detail-header text-center">
            <p className="section-subtitle label-2">Special Recipe</p>
            <h1 className="headline-1 dish-detail-title">{meal.name}</h1>
            
            <div className="rating-wrapper">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  fill={i < Math.floor(meal.rating) ? "var(--gold-crayola)" : "none"} 
                  color="var(--gold-crayola)" 
                  strokeWidth={2}
                />
              ))}
              <span className="rating-num">{meal.rating}</span>
            </div>

            <p className="detail-tags">{meal.tags || `${foundCategory} • Special`}</p>
            
            <div className="gold-divider">
              <span className="line"></span>
              <span className="symbol">❦</span>
              <span className="line"></span>
            </div>
          </div>

          <div className="detail-hero-section">
            <div className="detail-image-wrapper">
              <div className="detail-img-holder">
                <img src={meal.image} alt={meal.name} className="img-cover" />
              </div>
              <button 
                className={`heart-btn ${isLiked ? 'active' : ''}`}
                onClick={() => setIsLiked(!isLiked)}
                aria-label="Add to favorites"
              >
                <Heart size={24} fill={isLiked ? "#ef4444" : "none"} strokeWidth={2.5} />
              </button>
            </div>

            <div className="detail-card">
              <h2 className="title-2 card-title">Ingredients</h2>
              <div className="ingredients-grid">
                {meal.ingredients && meal.ingredients.length > 0 ? (
                  meal.ingredients.map((ing, idx) => (
                    <div className="ing-item" key={idx}>
                      <span className="ing-name">{ing.name}</span>
                      <span className="ing-spacer"></span>
                      <span className="ing-qty">{ing.qty}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-center label-2" style={{ color: 'var(--quick-silver)' }}>Secret ingredients!</p>
                )}
              </div>
            </div>
          </div>

          <div className="detail-card instructions-card">
            <h2 className="title-2 card-title text-center">Preparation</h2>
            <div className="instructions-box">
              <p className="instruction-text">
                {meal.instructions || meal.description}
              </p>
            </div>
          </div>

          <div className="detail-footer text-center">
            <Link to={`/categories/${encodeURIComponent(foundCategory)}`} className="btn-text hover-underline label-1">
              ← Back to {foundCategory} list
            </Link>
          </div>

        </div>
      </motion.section>
    </>
  );
};

export default MealDetail;
