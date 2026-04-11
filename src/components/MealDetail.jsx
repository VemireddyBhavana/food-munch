import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../data/CartContext';
import { menuData } from '../data/menuData';

const MealDetail = () => {
  const { category, id } = useParams();
  const currentCategory = category?.toLowerCase();
  const meal = menuData[currentCategory]?.find(item => item.id === id);

  const { addToCart } = useCart();
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isLiked, setIsLiked] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('foodmunch_favorites') || '[]');
    return favorites.includes(id);
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (meal) {
      setCurrentRating(meal.rating);
    }
  }, [id, meal]);

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
          <Link to={`/menu/${category}`} className="btn btn-primary">
            <span className="text text-1">Back to Menu</span>
            <span className="text text-2" aria-hidden="true">Back to Menu</span>
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

      <section className="section meal-detail bg-black-10" aria-label="meal-detail">
        <div className="container">
          {/* Header with Title and Rating */}
          <div className="detail-header text-center">
            <h2 className="headline-1 section-title">{meal.name}</h2>
            <div className="rating-wrapper">
              {[...Array(5)].map((_, i) => {
                const starValue = i + 1;
                return (
                  <span 
                    key={i} 
                    className={`star interactive-star ${starValue <= (hoverRating || currentRating) ? 'filled' : ''}`}
                    onMouseEnter={() => setHoverRating(starValue)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setCurrentRating(starValue)}
                    role="button"
                    aria-label={`Rate ${starValue} stars`}
                  >
                    ★
                  </span>
                );
              })}
              <span className="rating-num label-2">{(hoverRating || currentRating).toFixed(1)}</span>
            </div>
            <p className="detail-tags label-2">{category.toUpperCase()} • AUTHENTIC</p>
            
            {/* Gold Decorative Divider */}
            <div className="gold-divider">
              <div className="line"></div>
              <div className="symbol">✨</div>
              <div className="line heart-line"></div>
            </div>
          </div>

          {/* Hero Section: Side-by-Side Image and Ingredients */}
          <div className="detail-hero-section">
            <div className="detail-image-wrapper">
              <figure className="detail-img-holder">
                <img src={meal.image} alt={meal.name} className="img-cover circle-img" />
                <button 
                  className={`heart-btn ${isLiked ? 'active' : ''}`} 
                  aria-label={isLiked ? "remove from favorites" : "add to favorites"}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <ion-icon name={isLiked ? "heart" : "heart-outline"} aria-hidden="true"></ion-icon>
                </button>
              </figure>
            </div>

            <div className="detail-content-side">
              <div className="detail-card ingredients-card">
                <h3 className="title-3 card-title text-center">Ingredients</h3>
                <div className="ingredients-grid">
                  {meal.ingredients.map((ing, index) => (
                    <div key={index} className="ing-item">
                      <span className="ing-name label-1">{ing}</span>
                      <span className="ing-spacer"></span>
                      <span className="ing-qty label-2">to taste</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-action text-center">
                <p className="price-label headline-1">{meal.price}</p>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => addToCart(meal)}
                  style={{ width: '100%', maxWidth: 'none' }}
                >
                  <ShoppingCart size={18} style={{ display: 'inline', marginRight: '10px' }} />
                  <span className="text text-1">Add to Cart</span>
                  <span className="text text-2" aria-hidden="true">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>

          {/* Instructions Block */}
          <div className="detail-card instructions-card">
            <h3 className="title-3 card-title text-center">Instructions</h3>
            <div className="instructions-box">
              <p className="section-text label-1">{meal.instructions}</p>
            </div>
          </div>

          {/* Back Button */}
          <div className="detail-footer text-center">
            <Link to={`/menu/${category}`} className="btn-text hover-underline label-2">
              ← Back to {category.charAt(0).toUpperCase() + category.slice(1)} List
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MealDetail;
