import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../data/CartContext';
import { menuData } from '../data/menuData';

const FavoritesPage = () => {
  const { addToCart } = useCart();
  const [favorites, setFavorites] = React.useState(() => {
    return JSON.parse(localStorage.getItem('foodmunch_favorites') || '[]');
  });

  const allMeals = Object.values(menuData).flat();
  const favoriteMeals = allMeals.filter(meal => favorites.includes(meal.id));

  const removeFavorite = (id) => {
    const updated = favorites.filter(favId => favId !== id);
    setFavorites(updated);
    localStorage.setItem('foodmunch_favorites', JSON.stringify(updated));
  };

  return (
    <>
      <Helmet>
        <title>My Favorites | FoodMunch</title>
      </Helmet>

      <section className="section bg-black-10" style={{ minHeight: '80vh' }}>
        <div className="container">
          <div className="text-center" style={{ marginBlockEnd: '60px' }}>
            <p className="section-subtitle label-2">Your Collection</p>
            <h2 className="headline-1 section-title">My Favorites</h2>
          </div>

          {favoriteMeals.length > 0 ? (
            <div className="menu-grid">
              {favoriteMeals.map((item) => (
                <Link key={item.id} to={`/recipe/${item.id}`} className="menu-card-link">
                  <div className="menu-card">
                    <figure className="card-banner">
                      <img
                        src={item.image}
                        width="400"
                        height="400"
                        loading="lazy"
                        alt={item.name}
                      />
                    </figure>
                    
                    <div className="card-content">
                      <div className="card-title-wrapper" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <h3 className="card-title">{item.name}</h3>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            removeFavorite(item.id);
                          }}
                          className="remove-fav-btn"
                          style={{ color: '#ef4444', zIndex: 5 }}
                        >
                          <Heart size={18} fill="#ef4444" />
                        </button>
                      </div>
                      <p className="card-price">{item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                <Heart size={48} className="text-white/20" />
              </div>
              <p className="body-3 text-white/40">You haven't saved any favorites yet.</p>
              <Link to="/" className="btn btn-primary mx-auto">
                <span className="text text-1">Explore Menu</span>
                <span className="text text-2">Explore Menu</span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
