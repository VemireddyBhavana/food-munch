import React, { useState, useEffect, useRef } from 'react';

const allMenuItems = [
  // ===== BREAKFAST (12 items) =====
  { img: '/assets/images/menu-1.png', title: 'Idly (2 Pcs)', price: '₹79', badge: null, category: 'Breakfast', text: 'Fluffy steamed rice cakes served with coconut chutney and sambar — a timeless South Indian classic.' },
  { img: '/assets/images/menu-2.png', title: 'Plain Dosa', price: '₹89', badge: null, category: 'Breakfast', text: 'Crispy golden crepe made from fermented rice-lentil batter, served with chutneys and sambar.' },
  { img: '/assets/images/menu-3.png', title: 'Masala Dosa', price: '₹119', badge: 'Bestseller', category: 'Breakfast', text: 'Crisp dosa stuffed with spiced potato masala — the iconic South Indian breakfast favourite.' },
  { img: '/assets/images/menu-4.png', title: 'Rava Dosa', price: '₹109', badge: null, category: 'Breakfast', text: 'Semolina-based thin and crispy dosa with onions and green chillies — quick, crunchy, and delicious.' },
  { img: '/assets/images/menu-5.png', title: 'Pongal', price: '₹99', badge: null, category: 'Breakfast', text: 'Warm, comforting rice-lentil porridge tempered with cumin, pepper, cashews, and ghee.' },
  { img: '/assets/images/menu-6.png', title: 'Upma', price: '₹79', badge: null, category: 'Breakfast', text: 'Semolina cooked with mustard seeds, curry leaves, onions, and assorted vegetables.' },
  { img: '/assets/images/menu-1.png', title: 'Poori Bhaji', price: '₹109', badge: null, category: 'Breakfast', text: 'Deep-fried puffy whole wheat bread served with a spiced potato curry — hearty and satisfying.' },
  { img: '/assets/images/menu-2.png', title: 'Medu Vada (2 Pcs)', price: '₹89', badge: null, category: 'Breakfast', text: 'Golden, crispy urad dal fritters with a fluffy centre — paired perfectly with chutney and sambar.' },
  { img: '/assets/images/menu-3.png', title: 'Set Dosa (3 Pcs)', price: '₹99', badge: null, category: 'Breakfast', text: 'Soft, spongy mini dosas — slightly thicker than regular dosa, great for soaking up chutneys.' },
  { img: '/assets/images/menu-4.png', title: 'Uttapam', price: '₹99', badge: 'New', category: 'Breakfast', text: 'Thick pancake topped with onions, tomatoes, and green chillies — a savoury, filling delight.' },
  { img: '/assets/images/menu-5.png', title: 'Pesarattu', price: '₹109', badge: null, category: 'Breakfast', text: 'Healthy green gram crepe from Andhra — protein-rich, crispy, and perfect with ginger chutney.' },
  { img: '/assets/images/menu-6.png', title: 'Aloo Paratha', price: '₹99', badge: null, category: 'Breakfast', text: 'Flaky whole wheat flatbread stuffed with spiced potato filling, served with curd and pickle.' },

  // ===== APPETIZERS (12 items) =====
  { img: '/assets/images/menu-4.png', title: 'Chicken Wings', price: '₹269', badge: null, category: 'Appetizers', text: 'Crispy-fried chicken wings tossed in a tangy, spicy glaze — finger-licking bar-style perfection.' },
  { img: '/assets/images/menu-1.png', title: 'Chicken 65', price: '₹249', badge: 'Bestseller', category: 'Appetizers', text: 'Fiery, marinated boneless chicken deep fried with curry leaves and dried chillies — Hyderabadi legend.' },
  { img: '/assets/images/menu-2.png', title: 'Paneer Tikka', price: '₹229', badge: null, category: 'Appetizers', text: 'Cubes of paneer marinated in spiced yoghurt, chargrilled in tandoor till smoky and lightly charred.' },
  { img: '/assets/images/menu-5.png', title: 'Veg Manchurian', price: '₹189', badge: null, category: 'Appetizers', text: 'Deep-fried veggie balls tossed in a sweet, tangy Indo-Chinese sauce with bell peppers and spring onion.' },
  { img: '/assets/images/menu-3.png', title: 'Spring Rolls (4 Pcs)', price: '₹179', badge: null, category: 'Appetizers', text: 'Crispy golden rolls stuffed with seasoned vegetables — crunchy on the outside, flavourful inside.' },
  { img: '/assets/images/menu-6.png', title: 'Chilli Chicken', price: '₹259', badge: 'New', category: 'Appetizers', text: 'Boneless chicken stir-fried with green chillies, soy sauce, and garlic — bold Indo-Chinese flavour.' },
  { img: '/assets/images/menu-4.png', title: 'Tandoori Chicken (Half)', price: '₹349', badge: null, category: 'Appetizers', text: 'Bone-in chicken marinated overnight in yoghurt and spices, roasted in a clay tandoor to perfection.' },
  { img: '/assets/images/menu-1.png', title: 'Hara Bhara Kebab', price: '₹189', badge: null, category: 'Appetizers', text: 'Vibrant green patties of spinach, peas, and potato — lightly spiced, pan-fried, and delightfully crisp.' },
  { img: '/assets/images/menu-5.png', title: 'Fish Fry', price: '₹299', badge: null, category: 'Appetizers', text: 'Fresh fish fillets marinated with Andhra masala and shallow fried till golden — spicy and tender.' },
  { img: '/assets/images/menu-2.png', title: 'Garlic Prawns', price: '₹379', badge: 'Seasonal', category: 'Appetizers', text: 'Succulent prawns sautéed in butter, garlic, and herbs — simple, elegant, and bursting with flavour.' },
  { img: '/assets/images/menu-3.png', title: 'Mutton Seekh Kebab', price: '₹389', badge: null, category: 'Appetizers', text: 'Minced mutton blended with herbs, chargrilled on skewers to smoky, juicy perfection.' },
  { img: '/assets/images/menu-6.png', title: 'Vegetable Samosa Chaat', price: '₹129', badge: null, category: 'Appetizers', text: 'Crispy samosas crushed and topped with chutney, curd, onion, and a riot of tangy spices.' },

  // ===== DRINKS (12 items) =====
  { img: '/assets/images/menu-3.png', title: 'Mango Lassi', price: '₹129', badge: 'Bestseller', category: 'Drinks', text: 'Thick, creamy yoghurt blended with Alphonso mango pulp — sweet, chilled, and irresistibly smooth.' },
  { img: '/assets/images/menu-5.png', title: 'Sweet Lassi', price: '₹99', badge: null, category: 'Drinks', text: 'Classic Punjabi chilled yoghurt drink, lightly sweetened and topped with a hint of cardamom.' },
  { img: '/assets/images/menu-1.png', title: 'Fresh Lime Soda', price: '₹79', badge: null, category: 'Drinks', text: 'Freshly squeezed lime juice with soda water — choose sweet, salty, or mixed for the perfect refresher.' },
  { img: '/assets/images/menu-6.png', title: 'Watermelon Juice', price: '₹99', badge: 'Seasonal', category: 'Drinks', text: 'Freshly pressed watermelon juice with a touch of mint — hydrating, refreshing, and naturally sweet.' },
  { img: '/assets/images/menu-2.png', title: 'Pineapple Juice', price: '₹109', badge: null, category: 'Drinks', text: 'Tangy, tropical fresh pineapple juice — packed with vitamin C and natural sweetness.' },
  { img: '/assets/images/menu-4.png', title: 'Cold Coffee', price: '₹149', badge: null, category: 'Drinks', text: 'Rich, creamy cold coffee blended with ice cream and chocolate syrup — an indulgent caffeine fix.' },
  { img: '/assets/images/menu-3.png', title: 'Chocolate Shake', price: '₹169', badge: null, category: 'Drinks', text: 'Thick chocolate milkshake topped with whipped cream and cocoa powder — a dessert in a glass.' },
  { img: '/assets/images/menu-1.png', title: 'Virgin Mojito', price: '₹149', badge: 'New', category: 'Drinks', text: 'Refreshing mix of muddled mint, lime, sugar, and soda — a cool, zesty non-alcoholic classic.' },
  { img: '/assets/images/menu-5.png', title: 'Blue Lagoon Mocktail', price: '₹169', badge: null, category: 'Drinks', text: 'A vibrant blue curacao and lemon fusion — tangy, sweet, and visually stunning in every sip.' },
  { img: '/assets/images/menu-6.png', title: 'Strawberry Smoothie', price: '₹159', badge: null, category: 'Drinks', text: 'Lush blend of fresh strawberries, yoghurt, and honey — creamy, fruity, and delightfully pink.' },
  { img: '/assets/images/menu-2.png', title: 'Masala Chai', price: '₹49', badge: null, category: 'Drinks', text: 'Strong CTC tea brewed with ginger, cardamom, and cloves — the quintessential Indian cuppa.' },
  { img: '/assets/images/menu-4.png', title: 'Rose Milk', price: '₹89', badge: null, category: 'Drinks', text: 'Chilled milk flavoured with fragrant rose syrup and sabja seeds — nostalgic, sweet, and aromatic.' },

  // ===== MAIN COURSE / SPECIALS (original items, category: Specials) =====
  { img: '/assets/images/menu-1.png', title: 'Chicken Dum Biryani', price: '₹349', badge: 'Bestseller', category: 'Specials', text: 'Slow-cooked with fragrant basmati, whole spices, and tender chicken — a soulful Hyderabadi classic.' },
  { img: '/assets/images/menu-2.png', title: 'Paneer Tikka Masala', price: '₹249', badge: null, category: 'Specials', text: 'Grilled cottage cheese cubes dunked in a rich, smoky tomato-cashew gravy. A vegetarian favourite.' },
  { img: '/assets/images/menu-3.png', title: 'Pumpkin Shorba', price: '₹149', badge: 'Seasonal', category: 'Specials', text: 'Velvety roasted pumpkin soup with cream, cumin, and a hint of ginger — warm and comforting.' },
  { img: '/assets/images/menu-4.png', title: 'Mutton Rogan Josh', price: '₹429', badge: 'New', category: 'Specials', text: 'Slow-braised mutton in a rich Kashmiri gravy of fennel, ginger, and aromatic whole spices.' },
  { img: '/assets/images/menu-5.png', title: 'Dal Makhani', price: '₹199', badge: null, category: 'Specials', text: 'Black lentils simmered overnight with butter and cream — rich, velvety, and utterly indulgent.' },
  { img: '/assets/images/menu-6.png', title: 'Grilled Fish Masala', price: '₹449', badge: null, category: 'Specials', text: 'Fresh river fish marinated in Hyderabadi masala and grilled to tender, flavorful perfection.' },
];

const categories = ['All', 'Breakfast', 'Appetizers', 'Drinks', 'Specials'];

const Menu = ({ selectedCategory, onCategoryChange }) => {
  const [animKey, setAnimKey] = useState(0);
  const menuGridRef = useRef(null);

  // When selectedCategory changes externally (from Service), trigger animation reset
  useEffect(() => {
    setAnimKey(prev => prev + 1);
  }, [selectedCategory]);

  const handleFilterClick = (cat) => {
    onCategoryChange(cat);
  };

  const filtered = selectedCategory === 'All'
    ? allMenuItems
    : allMenuItems.filter(item => item.category === selectedCategory);

  const categoryLabel = selectedCategory === 'All' ? 'All Items' : `${selectedCategory} Items`;

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Special Selection</p>
        <h2 className="headline-1 section-title text-center">Our Delicious Menu</h2>

        {/* Category Filter Tabs */}
        <div className="menu-filter-tabs" role="group" aria-label="Filter menu items">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => handleFilterClick(cat)}
            >
              {cat === 'All' && <span>🍽 All Items</span>}
              {cat === 'Breakfast' && <span>🍳 Breakfast</span>}
              {cat === 'Appetizers' && <span>🍗 Appetizers</span>}
              {cat === 'Drinks' && <span>🥤 Drinks</span>}
              {cat === 'Specials' && <span>⭐ Specials</span>}
            </button>
          ))}
        </div>

        {/* Showing Label */}
        <p className="menu-showing-label text-center label-1">
          Showing: <span className="menu-showing-highlight">{categoryLabel}</span>
          <span className="menu-showing-count"> ({filtered.length} items)</span>
        </p>

        {/* Menu Grid with stagger animation */}
        <ul className="grid-list menu-grid" key={animKey} ref={menuGridRef}>
          {filtered.map((item, index) => (
            <li
              key={`${selectedCategory}-${index}`}
              className="menu-list-item menu-fade-in"
              style={{ animationDelay: `${Math.min(index * 60, 600)}ms` }}
            >
              <div className="menu-card hover:card">
                <figure className="card-banner img-holder" style={{ '--width': 100, '--height': 100 }}>
                  <img
                    src={item.img}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt={item.title}
                    className="img-cover"
                  />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">{item.title}</a>
                    </h3>
                    {item.badge && <span className="badge label-1">{item.badge}</span>}
                    <span className="span title-2">{item.price}</span>
                  </div>
                  <p className="card-text label-1">{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="menu-text text-center">
          Served daily from <span className="span">11:00 am</span> to <span className="span">11:00 pm</span>
        </p>

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
