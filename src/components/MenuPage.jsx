import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { menuData } from '../data/menuData';

const MenuPage = () => {
  const { categoryName } = useParams();
  const currentCategory = decodeURIComponent(categoryName || '').toLowerCase();
  const items = menuData[currentCategory] || [];
  
  const sliderRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Update itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 992) setItemsPerPage(5);
      else if (window.innerWidth >= 768) setItemsPerPage(3);
      else setItemsPerPage(2);
    };
    
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalDots = Math.ceil(items.length / itemsPerPage);

  // Scroll listener to update active dot
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;
    
    // Direct calculation of active dot based on scroll position
    const newActiveDot = Math.round(scrollLeft / clientWidth);
    
    if (!isNaN(newActiveDot) && newActiveDot !== activeDot) {
      setActiveDot(newActiveDot);
    }
  };

  const scrollToPage = (index) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    
    container.scrollTo({
      left: index * container.clientWidth,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveDot(0);
  }, [categoryName]);

  if (!items.length) {
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

  const categoryTitle = `${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} Meals`;

  return (
    <>
      <Helmet>
        <title>{categoryTitle} | FoodMunch</title>
        <meta name="description" content={`Explore our delicious ${currentCategory} selection at FoodMunch.`} />
      </Helmet>

      <section className="section meal-page bg-black-10" aria-label="meal-page">
        <div className="container">
          {/* Header Section */}
          <div className="meal-page-header text-center">
            <h2 className="headline-1 meal-section-title">{categoryTitle}</h2>
          </div>

          {/* Meal Slider Container */}
          <div className="meal-slider-container">
            <div 
              className="meal-slider" 
              ref={sliderRef}
              onScroll={handleScroll}
            >
              {items.map((item, index) => (
                <div 
                  key={item.id} 
                  className="meal-slider-item"
                >
                  <div className="meal-card">
                    <Link to={`/recipe/${item.id}`} className="card-link">
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
          </div>

          {/* Pager Dots */}
          {totalDots > 1 && (
            <div className="pager-dots">
              {[...Array(totalDots)].map((_, i) => (
                <button 
                  key={i} 
                  className={`dot ${i === activeDot ? 'active' : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollToPage(i)}
                ></button>
              ))}
            </div>
          )}
          
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
