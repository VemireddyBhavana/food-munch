import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../data/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, CreditCard, Home, MapPin, Wallet, ArrowRight, Loader2 } from 'lucide-react';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const orderId = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
      const newOrder = {
        id: orderId,
        items: cartItems,
        total: cartTotal + 40,
        address,
        status: 'placed',
        createdAt: new Date().toISOString(),
      };

      // Save to history
      const savedOrders = JSON.parse(localStorage.getItem('foodmunch_orders') || '[]');
      localStorage.setItem('foodmunch_orders', JSON.stringify([...savedOrders, newOrder]));

      clearCart();
      setIsProcessing(false);
      navigate(`/order-tracking/${orderId}`);
    }, 2500);
  };

  if (cartItems.length === 0 && step === 1) {
    return (
      <div className="section container text-center" style={{ marginTop: '100px' }}>
        <h2 className="headline-2">Your cart is empty.</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary mt-4">Go Back Home</button>
      </div>
    );
  }

  return (
    <div className="section container" style={{ marginTop: '100px', maxWidth: '800px' }}>
      <div className="checkout-steps mb-5">
        <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
          <div className="step-icon"><MapPin size={20} /></div>
          <span>Address</span>
        </div>
        <div className="step-line" />
        <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
          <div className="step-icon"><CreditCard size={20} /></div>
          <span>Payment</span>
        </div>
        <div className="step-line" />
        <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
          <div className="step-icon"><CheckCircle2 size={20} /></div>
          <span>Review</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="address"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="card p-4 shadow-sm"
          >
            <h2 className="headline-3 mb-4">Delivery Address</h2>
            <form onSubmit={handleNextStep}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input-field"
                  required
                  value={address.name}
                  onChange={(e) => setAddress({ ...address, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Street"
                  className="input-field"
                  required
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="City"
                  className="input-field"
                  required
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input-field"
                  required
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Continue to Payment <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="payment"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="card p-4 shadow-sm"
          >
            <h2 className="headline-3 mb-4">Select Payment Method (Simulation)</h2>
            <div className="payment-options mb-4">
              <div 
                className={`payment-card ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard size={24} />
                <span>Credit / Debit Card</span>
              </div>
              <div 
                className={`payment-card ${paymentMethod === 'upi' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <Wallet size={24} />
                <span>UPI / PhonePe</span>
              </div>
            </div>
            
            {paymentMethod === 'card' && (
              <div className="card-simulation bg-dark p-3 rounded mb-4 text-white">
                <p className="label-3 mb-2 opacity-50">Mock Card Details</p>
                <div className="d-flex justify-content-between">
                  <span>**** **** **** 4242</span>
                  <span>12/28</span>
                </div>
              </div>
            )}

            <div className="d-flex gap-3">
              <button onClick={() => setStep(1)} className="btn btn-secondary flex-grow-1">Back</button>
              <button onClick={() => setStep(3)} className="btn btn-primary flex-grow-1">Next</button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="review"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card p-4 shadow-sm"
          >
            <h2 className="headline-3 mb-4">Review Your Order</h2>
            <div className="order-summary-box p-3 rounded mb-4 bg-light">
              <div className="d-flex justify-content-between mb-2">
                <span>Items Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between font-weight-bold">
                <span>Grand Total</span>
                <span className="color-gold">₹{cartTotal + 40}</span>
              </div>
            </div>

            <div className="address-preview mb-4">
              <p className="label-3 opacity-50">Delivery to:</p>
              <p className="label-1">{address.name}</p>
              <p className="label-2">{address.street}, {address.city}</p>
            </div>

            <button 
              onClick={handlePlaceOrder} 
              className="btn btn-secondary w-100"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="animate-spin mr-2" /> Processing Your Payment...
                </>
              ) : (
                `Pay ₹${cartTotal + 40} Now`
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Checkout;
