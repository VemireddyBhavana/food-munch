import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../data/CartContext';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="cart-drawer-overlay"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="cart-drawer"
          >
            {/* Header */}
            <div className="cart-drawer-header">
              <div className="cart-drawer-title">
                <ShoppingBag className="icon" size={24} />
                <h2 className="headline-3 text-white">Your Cart ({cartCount})</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="cart-drawer-close"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="cart-drawer-body custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="cart-empty">
                  <div className="cart-empty-icon">
                    <ShoppingBag size={80} />
                  </div>
                  <p className="label-1">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="btn btn-primary"
                  >
                    <span className="text text-1">Go Shopping</span>
                    <span className="text text-2">Go Shopping</span>
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-img">
                      <img src={item.image} alt={item.name} className="img-cover" />
                    </div>
                    <div className="cart-item-info">
                      <div className="cart-item-header">
                        <h3 className="cart-item-name label-1">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="cart-item-remove"
                          title="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      
                      <div className="cart-item-controls">
                        <p className="cart-item-price label-2">{item.price}</p>
                        
                        <div className="quantity-control">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="label-2">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-summary">
                  <div className="cart-summary-item label-2">
                    <span>Subtotal</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="cart-summary-item label-2">
                    <span>Delivery Fee</span>
                    <span>₹40</span>
                  </div>
                  <div className="cart-total headline-3">
                    <span>Total</span>
                    <span className="color-gold">₹{cartTotal + 40}</span>
                  </div>
                </div>
                
                <Link to="/checkout" className="btn btn-secondary cart-checkout-btn" onClick={() => setIsCartOpen(false)}>
                  <span className="text text-1">Checkout Now</span>
                  <span className="text text-2">Checkout Now</span>
                </Link>
                
                <p className="label-3 text-center" style={{ marginTop: '15px', opacity: 0.4 }}>
                  Taxes and additional charges may apply
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
