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
                <div key={item.id} className="menu-card">
                  <Link to={`/menu/breakfast/${item.id}`} className="card-link">
                    <figure className="card-banner img-holder" style={{ '--width': 400, '--height': 400 }}>
                      <img
                        src={item.image}
                        width="400"
                        height="400"
                        loading="lazy"
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                  </Link>
                  
                  <div className="card-content text-center">
                    <div className="flex justify-between items-start">
                      <h3 className="card-title label-1">{item.name}</h3>
                      <button 
                        onClick={() => removeFavorite(item.id)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <Heart size={20} fill="currentColor" />
                      </button>
                    </div>
                    <p className="card-price label-2">{item.price}</p>
                    
                    <button 
                      className="btn btn-secondary add-to-cart-btn"
                      onClick={() => addToCart(item)}
                    >
                      <ShoppingCart size={16} className="cart-icon" />
                      <span className="text text-1">Add to Cart</span>
                      <span className="text text-2">Add to Cart</span>
                    </button>
                  </div>
                </div>
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
