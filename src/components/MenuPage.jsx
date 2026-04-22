import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { menuData } from '../data/menuData';

const MenuPage = () => {
  const { category } = useParams();
  const currentCategory = category?.toLowerCase();
  const items = menuData[currentCategory];
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  if (!items) {
    return (
      <section className="section bg-black-10 text-center" style={{ minHeight: '100vh', display: 'grid', placeContent: 'center' }}>
        <div className="container">
          <h2 className="headline-1 section-title">Category not found</h2>
          <Link to="/" className="btn btn-primary">
            <span className="text text-1">Back to Home</span>
            <span className="text text-2" aria-hidden="true">Back to Home</span>
          </Link>
        </div>
      </section>
    );
  }

  const categoryTitle = `${category.charAt(0).toUpperCase() + category.slice(1)} Meals`;

  return (
    <>
      <Helmet>
        <title>{categoryTitle} | FoodMunch</title>
        <meta name="description" content={`Explore our delicious ${category} selection at FoodMunch.`} />
      </Helmet>

      <section className="section meal-page bg-black-10" aria-label="meal-page">
        <div className="container">
          {/* Header Section */}
          <div className="meal-page-header text-center">
            <h2 className="headline-1 meal-section-title">{categoryTitle}</h2>
          </div>

          {/* Meal Grid (Matching Reference Design) */}
          <div className="meal-grid">
            {items.map((item, index) => (
              <div 
                key={item.id} 
                className="meal-card-wrapper stagger-anim"
                style={{ '--animation-order': index }}
              >
                <div className="meal-card">
                  <Link to={`/menu/${category}/${item.id}`} className="card-link">
                    <figure className="card-banner img-holder">
                      <img
                        src={item.image}
                        width="400"
                        height="400"
                        loading="lazy"
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="card-content">
                      <h3 className="meal-card-title">{item.name}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pager Dots (Matching Reference) */}
          <div className="pager-dots">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`dot ${i === 0 ? 'active' : ''}`}></div>
            ))}
          </div>
          
          <div className="back-home-link text-center">
            <Link to="/" className="btn-text hover-underline label-2">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
