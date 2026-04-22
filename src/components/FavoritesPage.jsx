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
                <Link key={item.id} to={`/recipe/${item.id}`} className="menu-card-link" style={{ textDecoration: 'none' }}>
                  <div className="menu-card">
                    <figure className="card-banner">
                      <img
                        src={item.image}
                        width="400"
                        height="400"
                        loading="lazy"
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    
                    <div className="card-content" style={{ padding: '20px' }}>
                      <div className="card-title-wrapper" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBlockEnd: '15px' }}>
                        <h3 className="title-3">{item.name}</h3>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            removeFavorite(item.id);
                          }}
                          className="remove-fav-btn"
                          style={{ color: '#ef4444', zIndex: 5, background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <Heart size={22} fill="#ef4444" />
                        </button>
                      </div>
                      <p className="body-3" style={{ color: 'var(--gold-crayola)', fontWeight: 'bold' }}>{item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center" style={{ paddingBlock: '100px' }}>
              <div style={{ width: '120px', height: '120px', backgroundColor: 'var(--white-alpha-10)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginInline: 'auto', marginBlockEnd: '30px' }}>
                <Heart size={64} style={{ opacity: 0.2 }} />
              </div>
              <p className="body-3" style={{ color: 'var(--quick-silver)', marginBlockEnd: '40px' }}>Your collection is currently empty.</p>
              <Link to="/" className="btn btn-primary" style={{ marginInline: 'auto' }}>
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
