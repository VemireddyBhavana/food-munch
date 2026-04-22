import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const allMenuItems = [
  // ===== BREAKFAST (Breakfast Category) =====
  { img: '/assets/images/menu-1.png', title: 'Idly (2 Pcs)', price: '₹79', badge: null, category: 'Breakfast', text: 'Fluffy steamed rice cakes served with coconut chutney and sambar.' },
  { img: '/assets/images/menu-2.png', title: 'Plain Dosa', price: '₹89', badge: null, category: 'Breakfast', text: 'Crispy golden crepe made from fermented rice-lentil batter.' },
  { img: '/assets/images/menu-3.png', title: 'Masala Dosa', price: '₹119', badge: 'Bestseller', category: 'Breakfast', text: 'Crisp dosa stuffed with spiced potato masala — an iconic favourite.' },
  
  // ===== CHICKEN (Chicken Category) =====
  { img: '/assets/images/menu-4.png', title: 'Chicken Wings', price: '₹269', badge: null, category: 'Chicken', text: 'Crispy-fried chicken wings tossed in a tangy, spicy glaze.' },
  { img: '/assets/images/menu-1.png', title: 'Chicken 65', price: '₹249', badge: 'Bestseller', category: 'Chicken', text: 'Fiery, marinated boneless chicken deep fried with curry leaves.' },
  { img: '/assets/images/menu-6.png', title: 'Chilli Chicken', price: '₹259', badge: 'New', category: 'Chicken', text: 'Boneless chicken stir-fried with green chillies and soy sauce.' },
  { img: '/assets/images/menu-4.png', title: 'Tandoori Chicken', price: '₹349', badge: null, category: 'Chicken', text: 'Bone-in chicken marinated in yoghurt and spices, roasted in tandoor.' },
  { img: '/assets/images/menu-1.png', title: 'Chicken Dum Biryani', price: '₹349', badge: 'Bestseller', category: 'Chicken', text: 'Slow-cooked with fragrant basmati and tender chicken — a soulful classic.' },

  // ===== VEGETARIAN (Vegetarian Category) =====
  { img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800', title: 'Air fryer patatas bravas', price: '₹249', badge: 'New', category: 'Vegetarian', text: 'Crispy potato chunks with smoky tomato sauce and garlic aioli.' },
  { img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800', title: 'Aubergine & hummus grills', price: '₹279', badge: null, category: 'Vegetarian', text: 'Grilled aubergine topped with creamy hummus and toasted walnuts.' },
  { img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400', title: 'Baingan Bharta', price: '₹249', badge: 'Authentic', category: 'Vegetarian', text: 'Fire-roasted eggplant mashed and sautéed with aromatic Indian spices.' },

  // ===== SEAFOOD (Seafood Category) =====
  { img: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800', title: 'Arroz con gambas y calamar', price: '₹549', badge: 'New', category: 'Seafood', text: 'Classic Spanish seafood rice with king prawns, squid, and aromatic saffron.' },
  { img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80&w=800', title: 'Bang bang prawn salad', price: '₹489', badge: 'Bestseller', category: 'Seafood', text: 'Crispy prawns tossed in a creamy, sweet and spicy dynamite sauce.' },
  { img: 'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?auto=format&fit=crop&q=80&w=800', title: 'Cajun spiced fish tacos', price: '₹399', badge: null, category: 'Seafood', text: 'Zesty pan-seared white fish with bold Cajun spices in warm tortillas.' },

  // ===== DRINKS (Drinks Category) =====
  { img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800', title: 'Mango Lassi', price: '₹129', badge: 'Bestseller', category: 'Drinks', text: 'Thick, creamy yoghurt blended with Alphonso mango pulp.' },
  { img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800', title: 'Cold Coffee', price: '₹189', badge: null, category: 'Drinks', text: 'Premium chilled espresso blended with milk and vanilla ice cream.' },

  // ===== SIDE (Side Category) =====
  { img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800', title: 'Air Fryer Egg Rolls', price: '₹249', badge: 'New', category: 'Side', text: 'Crispy, golden egg rolls filled with savory ground pork and fresh vegetables.' },
  { img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800', title: 'Algerian Carrots', price: '₹189', badge: null, category: 'Side', text: 'Tender carrots marinated in a bold garlic "dersa" sauce with caraway.' },
  { img: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&q=80&w=800', title: 'Brie in Prosciutto', price: '₹589', badge: 'Premium', category: 'Side', text: 'Golden brioche encasing a whole Brie wheel wrapped in salty prosciutto.' },

  // ===== STARTER (Starter Category) =====
  { img: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&q=80&w=800', title: 'Ajo blanco', price: '₹289', badge: 'Authentic', category: 'Starter', text: 'Chilled Spanish almond soup from Andalusia, creamy and refreshing.' },
  { img: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80&w=800', title: 'Clam chowder', price: '₹349', badge: 'Premium', category: 'Starter', text: 'Rich New England style clam chowder with tender clams and smoky bacon.' },

  // ===== VEGAN (Vegan Category) =====
  { img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800', title: 'Fasoliyyeh Bi Z-Zayt', price: '₹269', badge: 'New', category: 'Vegan', text: 'Syrian-style green beans steamed in extra virgin olive oil and cilantro.' },
  { img: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800', title: 'Vegan banh mi', price: '₹329', badge: 'Bestseller', category: 'Vegan', text: 'Crispy baguette with marinated tofu, pickled carrots, and fresh herbs.' },

  // ===== VEGETARIAN (Vegetarian Category) =====
  { img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800', title: 'Air fryer patatas bravas', price: '₹249', badge: 'New', category: 'Vegetarian', text: 'Crispy potato chunks with smoky tomato sauce and garlic aioli.' },
  { img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800', title: 'Aubergine & hummus grills', price: '₹279', badge: null, category: 'Vegetarian', text: 'Grilled aubergine topped with creamy hummus and toasted walnuts.' },

  // ===== BEEF (Beef Category) =====
  { img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400', title: 'Beef Steak', price: '₹549', badge: 'Premium', category: 'Beef', text: 'Juicy beef steak grilled to perfection with herbs and garlic butter.' },
  
  // ===== PASTA (Pasta Category) =====
  { img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=400', title: 'Penne Arrabbiata', price: '₹299', badge: null, category: 'Pasta', text: 'Classic Italian pasta in a spicy tomato sauce with garlic and chillies.' }
];

const categoryData = [
  { title: 'Beef', id: 'Beef', desc: 'Hearty beef dishes.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400' },
  { title: 'Chicken', id: 'Chicken', desc: 'Tender chicken favorites.', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400' },
  { title: 'Dessert', id: 'Dessert', desc: 'Sweet treats.', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400' },
  { title: 'Goat', id: 'Goat', desc: 'Savory goat meat.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400' },
  { title: 'Lamb', id: 'Lamb', desc: 'Aromatic lamb specialties.', img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=400' },
  { title: 'Miscellaneous', id: 'Miscellaneous', desc: 'Unique food finds.', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400' },
  { title: 'Pasta', id: 'Pasta', desc: 'Authentic Italian pasta.', img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=400' },
  { title: 'Pork', id: 'Pork', desc: 'Succulent pork selections.', img: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=400' },
  { title: 'Seafood', id: 'Seafood', desc: 'Fresh from the ocean.', img: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800' },
  { title: 'Starter', id: 'Starter', desc: 'Delicious starters.', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=400' },
  { title: 'Drinks', id: 'Drinks', desc: 'Refreshing beverages.', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400' },
  { title: 'Side', id: 'Side', desc: 'Perfect accompaniments.', img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800' },
  { title: 'Vegan', id: 'Vegan', desc: 'Wholesome plant-based.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400' },
  { title: 'Vegetarian', id: 'Vegetarian', desc: 'Flavorful meat-free dishes.', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400' },
  { title: 'Breakfast', id: 'Breakfast', desc: 'Essential morning meals.', img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=400' }
];

const Menu = ({ selectedCategory, onCategoryChange }) => {
  const [animKey, setAnimKey] = useState(0);
  const menuGridRef = useRef(null);

  useEffect(() => {
    setAnimKey(prev => prev + 1);
  }, [selectedCategory]);

  const handleFilterClick = (catId) => {
    onCategoryChange(catId);
    // Smooth scroll to the menu grid if needed
    document.getElementById('menu-grid-start')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filtered = selectedCategory === 'All'
    ? allMenuItems
    : allMenuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <h2 className="headline-1 section-title text-center">Our Delicious Menu</h2>

        {/* Categories Grid (Overhaul Design) */}
        <div className="category-grid">
          {categoryData.map((item, index) => (
            <Link 
              to={`/menu/${item.id.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="category-card" 
              key={index}
            >
              <figure className="card-banner img-holder">
                <img
                  src={item.img}
                  width="80"
                  height="80"
                  loading="lazy"
                  alt={item.title}
                  className="img-cover"
                />
              </figure>
              
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.desc}</p>
              </div>

              <div className="btn-meals">
                View Meals
              </div>
            </Link>
          ))}
        </div>

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
