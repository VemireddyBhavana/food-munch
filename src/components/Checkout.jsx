import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../data/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, CreditCard, MapPin, Wallet } from 'lucide-react';

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

      const savedOrders = JSON.parse(localStorage.getItem('foodmunch_orders') || '[]');
      localStorage.setItem('foodmunch_orders', JSON.stringify([...savedOrders, newOrder]));

      clearCart();
      setIsProcessing(false);
      navigate(`/order-tracking/${orderId}`);
    }, 2500);
  };

  if (cartItems.length === 0 && step === 1) {
    return (
      <div className="section container text-center" style={{ paddingBlock: '150px' }}>
        <h2 className="headline-2" style={{ marginBlockEnd: '30px' }}>Your cart is empty.</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary" style={{ marginInline: 'auto' }}>
          <span className="text text-1">Go Back Home</span>
          <span className="text text-2">Go Back Home</span>
        </button>
      </div>
    );
  }

  return (
    <div className="section container" style={{ paddingBlock: '120px', maxWidth: '800px' }}>
      <div className="checkout-steps" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBlockEnd: '50px' }}>
        <div className={`step-item ${step >= 1 ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="step-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: step >= 1 ? 'var(--gold-crayola)' : 'var(--white-alpha-10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: step >= 1 ? 'black' : 'white' }}><MapPin size={18} /></div>
          <span className="label-2">Address</span>
        </div>
        <div style={{ width: '60px', height: '2px', backgroundColor: step >= 2 ? 'var(--gold-crayola)' : 'var(--white-alpha-10)' }} />
        <div className={`step-item ${step >= 2 ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="step-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: step >= 2 ? 'var(--gold-crayola)' : 'var(--white-alpha-10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: step >= 2 ? 'black' : 'white' }}><CreditCard size={18} /></div>
          <span className="label-2">Payment</span>
        </div>
        <div style={{ width: '60px', height: '2px', backgroundColor: step >= 3 ? 'var(--gold-crayola)' : 'var(--white-alpha-10)' }} />
        <div className={`step-item ${step >= 3 ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="step-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: step >= 3 ? 'var(--gold-crayola)' : 'var(--white-alpha-10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: step >= 3 ? 'black' : 'white' }}><CheckCircle2 size={18} /></div>
          <span className="label-2">Review</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="address"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="card-dark"
            style={{ padding: '40px', backgroundColor: 'var(--smoky-black-1)', borderRadius: '8px' }}
          >
            <h2 className="headline-2" style={{ marginBlockEnd: '30px', textAlign: 'center' }}>Delivery Address</h2>
            <form onSubmit={handleNextStep}>
              <div style={{ marginBlockEnd: '20px' }}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input-field"
                  required
                  value={address.name}
                  onChange={(e) => setAddress({ ...address, name: e.target.value })}
                />
              </div>
              <div style={{ marginBlockEnd: '20px' }}>
                <input
                  type="text"
                  placeholder="Street"
                  className="input-field"
                  required
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                />
              </div>
              <div style={{ marginBlockEnd: '20px' }}>
                <input
                  type="text"
                  placeholder="City"
                  className="input-field"
                  required
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                />
              </div>
              <div style={{ marginBlockEnd: '40px' }}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input-field"
                  required
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span className="text text-1">Continue to Payment</span>
                <span className="text text-2">Continue to Payment</span>
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
            className="card-dark"
            style={{ padding: '40px', backgroundColor: 'var(--smoky-black-1)', borderRadius: '8px' }}
          >
            <h2 className="headline-2" style={{ marginBlockEnd: '30px', textAlign: 'center' }}>Payment Method</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBlockEnd: '30px' }}>
              <div 
                className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
                style={{ padding: '20px', border: '1px solid var(--white-alpha-10)', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: paymentMethod === 'card' ? 'var(--white-alpha-10)' : 'transparent', transition: 'var(--transition-1)' }}
              >
                <CreditCard size={24} color={paymentMethod === 'card' ? 'var(--gold-crayola)' : 'white'} />
                <span className="label-1">Credit / Debit Card</span>
              </div>
              <div 
                className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('upi')}
                style={{ padding: '20px', border: '1px solid var(--white-alpha-10)', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: paymentMethod === 'upi' ? 'var(--white-alpha-10)' : 'transparent', transition: 'var(--transition-1)' }}
              >
                <Wallet size={24} color={paymentMethod === 'upi' ? 'var(--gold-crayola)' : 'white'} />
                <span className="label-1">UPI / Digital Wallet</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <button onClick={() => setStep(1)} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                <span className="text text-1">Back</span>
                <span className="text text-2">Back</span>
              </button>
              <button onClick={() => setStep(3)} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                <span className="text text-1">Next</span>
                <span className="text text-2">Next</span>
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="review"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-dark"
            style={{ padding: '40px', backgroundColor: 'var(--smoky-black-1)', borderRadius: '8px' }}
          >
            <h2 className="headline-2" style={{ marginBlockEnd: '30px', textAlign: 'center' }}>Review Order</h2>
            <div style={{ backgroundColor: 'var(--eerie-black-3)', padding: '20px', borderRadius: '8px', marginBlockEnd: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBlockEnd: '10px' }}>
                <span className="label-2">Items Subtotal</span>
                <span className="label-2">₹{cartTotal}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBlockEnd: '15px' }}>
                <span className="label-2">Delivery Fee</span>
                <span className="label-2">₹40</span>
              </div>
              <div style={{ height: '1px', backgroundColor: 'var(--white-alpha-10)', marginBlockEnd: '15px' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="title-3">Grand Total</span>
                <span className="title-3" style={{ color: 'var(--gold-crayola)' }}>₹{cartTotal + 40}</span>
              </div>
            </div>

            <div style={{ marginBlockEnd: '40px' }}>
              <p className="label-2" style={{ color: 'var(--quick-silver)', marginBlockEnd: '5px' }}>Delivery to:</p>
              <p className="label-1">{address.name}</p>
              <p className="body-4">{address.street}, {address.city}</p>
            </div>

            <button 
              onClick={handlePlaceOrder} 
              className="btn btn-secondary" 
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <span className="text text-1">Processing...</span>
              ) : (
                <>
                  <span className="text text-1">Pay ₹{cartTotal + 40} Now</span>
                  <span className="text text-2">Pay ₹{cartTotal + 40} Now</span>
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Checkout;
