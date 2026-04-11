import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { useCart } from '../data/CartContext';
import { menuData } from '../data/menuData';

const MenuPage = () => {
  const { category } = useParams();
  const currentCategory = category?.toLowerCase();
  const items = menuData[currentCategory];
  
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high', 'rating'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchQuery('');
  }, [category]);

  const filteredAndSortedItems = useMemo(() => {
    if (!items) return [];

    let result = items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === 'price-low') {
      result.sort((a, b) => parseFloat(a.price.replace('₹', '')) - parseFloat(b.price.replace('₹', '')));
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => parseFloat(b.price.replace('₹', '')) - parseFloat(a.price.replace('₹', '')));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [items, searchQuery, sortBy]);

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

  return (
    <>
      <Helmet>
        <title>{category.charAt(0).toUpperCase() + category.slice(1)} Menu | FoodMunch</title>
        <meta name="description" content={`Explore our delicious ${category} selection at FoodMunch.`} />
      </Helmet>

      <section className="section menu-page bg-black-10" aria-label="menu-page">
        <div className="container">
          {/* Header Section */}
          <div className="menu-page-header text-center">
            <p className="section-subtitle label-2">Special Selection</p>
            <h2 className="headline-1 section-title">{category.charAt(0).toUpperCase() + category.slice(1)} Menu</h2>
            <div className="back-btn-wrapper">
              <Link to="/" className="btn-text hover-underline label-2">
                ← Back to Home
              </Link>
            </div>
          </div>

          {/* Category Switcher Tabs */}
          <div className="category-switcher">
            <ul className="switcher-list">
              {['breakfast', 'appetizers', 'drinks'].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/menu/${cat}`}
                    className={`switcher-btn label-2 ${category.toLowerCase() === cat ? 'active' : ''}`}
                  >
                    {cat.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Controls: Search and Sort */}
          <div className="menu-controls">
            <div className="search-wrapper">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search for dishes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="sort-wrapper">
              <ArrowUpDown className="sort-icon" size={18} />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="default">Sort By: Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="menu-grid">
            {filteredAndSortedItems.length > 0 ? (
              filteredAndSortedItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="menu-card-wrapper stagger-anim"
                  style={{ '--animation-order': index }}
                >
                  <div className="menu-card">
                    <Link to={`/menu/${category}/${item.id}`} className="card-link">
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
                      <div className="card-title-row">
                        <Link to={`/menu/${category}/${item.id}`}>
                          <h3 className="card-title label-1">{item.name}</h3>
                        </Link>
                      </div>
                      <p className="card-price label-2">{item.price}</p>
                      
                      <button 
                        className="btn btn-secondary add-to-cart-btn"
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingCart size={16} className="cart-icon" />
                        <span className="text text-1">Add</span>
                        <span className="text text-2">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results text-center">
                <p className="body-3">No dishes found matching "{searchQuery}"</p>
              </div>
            )}
          </div>

          {/* Pager Dots */}
          <div className="pager-dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
