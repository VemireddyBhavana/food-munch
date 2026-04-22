import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Heart, Star } from 'lucide-react';
import { menuData } from '../data/menuData';

const MealDetail = () => {
  const { category, id } = useParams();
  const currentCategory = category?.toLowerCase();
  const meal = menuData[currentCategory]?.find(item => item.id === id);

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

      <section className="section meal-detail-premium" aria-label="meal-detail">
        <div className="container">
          
          {/* 1. Header Section (Centered Title & Rating) */}
          <div className="detail-header text-center">
            <h1 className="headline-1 dish-detail-title">{meal.name}</h1>
            <div className="detail-rating">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  fill={i < Math.floor(meal.rating) ? "#1a2b47" : "none"} 
                  color="#1a2b47" 
                  strokeWidth={2.5}
                />
              ))}
            </div>
            <p className="dish-detail-tags">{meal.tags || `${category} • Special`}</p>
            
            {/* Ornament Divider (Leaf Design) */}
            <div className="ornament-divider">
              <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15H60M90 15H140" stroke="#c2a265" strokeWidth="1" strokeLinecap="round"/>
                <path d="M75 5C75 5 73 13 67 15C73 17 75 25 75 25C75 25 77 17 83 15C77 13 75 5 75 5Z" fill="#c2a265"/>
                <path d="M75 5C75 5 78 10 85 10C80 12 75 15 75 15" stroke="#c2a265" strokeWidth="0.5"/>
                <path d="M75 5C75 5 72 10 65 10C70 12 75 15 75 15" stroke="#c2a265" strokeWidth="0.5"/>
              </svg>
            </div>
          </div>

          {/* 2. Hero Section (Circular Image & Ingredients Card) */}
          <div className="detail-hero-grid">
            <div className="dish-image-col">
              <div className="dish-circle-container">
                <img src={meal.image} alt={meal.name} className="img-cover circle-dish-img" />
                <button 
                  className={`heart-float-btn ${isLiked ? 'active' : ''}`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart size={20} fill={isLiked ? "#ff4d4d" : "none"} color={isLiked ? "#ff4d4d" : "#333"} />
                </button>
              </div>
            </div>

            <div className="ingredients-col">
              <div className="detail-premium-card ingredients-card">
                <h2 className="card-inner-title text-center">Ingredients</h2>
                <div className="ingredients-multi-table">
                  {meal.ingredients && meal.ingredients.length > 0 ? (
                    meal.ingredients.map((ing, idx) => (
                      <div className="ingredient-row" key={idx}>
                        <span className="ing-qty">{ing.qty}</span>
                        <span className="ing-name">{ing.name}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-center label-2">Secret family recipe ingredients!</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Instructions Section (Full-Width Card) */}
          <div className="instructions-full-section">
            <div className="detail-premium-card instructions-full-card">
              <h2 className="card-inner-title text-center">Instructions</h2>
              <p className="instruction-text">
                {meal.instructions || meal.description}
              </p>
            </div>
          </div>

          {/* Back Nav */}
          <div className="detail-nav-footer text-center">
            <Link to={`/menu/${category.toLowerCase()}`} className="btn-text hover-underline label-1">
              ← Back to {category} list
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default MealDetail;
