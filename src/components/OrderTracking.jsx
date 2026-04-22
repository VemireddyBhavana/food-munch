import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, ChefHat, Bike, MapPin, Phone, MessageSquare, ArrowLeft } from 'lucide-react';

const OrderTracking = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState('placed'); // placed, preparing, shipping, delivered
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('foodmunch_orders') || '[]');
    const currentOrder = savedOrders.find(o => o.id === orderId);
    
    if (currentOrder) {
      setOrder(currentOrder);
      // Determine initial status based on how long ago it was placed
      // For this demo, we'll just start from 'placed'
    } else {
      navigate('/');
    }

    // SIMULATION ENGINE: Update status every 45-60 seconds
    const statusSequence = [
      { status: 'placed', progress: 25 },
      { status: 'preparing', progress: 50 },
      { status: 'shipping', progress: 75 },
      { status: 'delivered', progress: 100 }
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < statusSequence.length) {
        setStatus(statusSequence[currentIndex].status);
        setProgress(statusSequence[currentIndex].progress);
      } else {
        clearInterval(interval);
      }
    }, 45000); // 45 seconds per stage for a quick demo

    return () => clearInterval(interval);
  }, [orderId, navigate]);

  if (!order) return <div className="section container text-center">Loading Tracking...</div>;

  const getStatusIcon = (stepStatus) => {
    switch (stepStatus) {
      case 'placed': return <Clock size={24} />;
      case 'preparing': return <ChefHat size={24} />;
      case 'shipping': return <Bike size={24} />;
      case 'delivered': return <CheckCircle2 size={24} />;
      default: return null;
    }
  };

  const getStatusText = (stepStatus) => {
    switch (stepStatus) {
      case 'placed': return 'Order Placed';
      case 'preparing': return 'Food is being prepared';
      case 'shipping': return 'Agent is on the way';
      case 'delivered': return 'Order Delivered';
      default: return '';
    }
  };

  return (
    <div className="section container" style={{ marginTop: '100px', maxWidth: '1000px' }}>
      <button onClick={() => navigate('/')} className="btn-link mb-4">
        <ArrowLeft size={18} /> Back to Home
      </button>

      <div className="tracking-header mb-5">
        <h1 className="headline-1">Tracking Your Order</h1>
        <p className="label-2 opacity-50">Order ID: {orderId}</p>
      </div>

      <div className="row">
        <div className="col-12 col-md-8">
          {/* Progress Bar */}
          <div className="tracking-progress-container mb-5 p-4 rounded bg-dark text-white shadow-lg overflow-hidden relative">
            <div className="tracking-progress-bar">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="progress-fill" 
              />
            </div>
            
            <div className="d-flex justify-content-between mt-4">
              {['placed', 'preparing', 'shipping', 'delivered'].map((s, idx) => (
                <div key={s} className={`status-step ${status === s ? 'active' : ''} ${progress > (idx * 25 + 10) ? 'done' : ''}`}>
                  <div className="status-icon-wrapper">
                    {getStatusIcon(s)}
                  </div>
                  <span className="label-3 d-none d-md-block text-center mt-2">{getStatusText(s)}</span>
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
             <motion.div 
               key={status}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="card p-4 shadow-sm text-center mb-4"
             >
                <div className="status-badge mb-3">
                   {getStatusIcon(status)}
                   <span className="ml-2 font-weight-bold">{getStatusText(status).toUpperCase()}</span>
                </div>
                <h2 className="headline-3">
                  {status === 'placed' && "We've received your order! Hang tight."}
                  {status === 'preparing' && "Our expert chefs are crafting your meal."}
                  {status === 'shipping' && "Fresh food is on its way to your doorstep!"}
                  {status === 'delivered' && "Enjoy your delicious meal!"}
                </h2>
             </motion.div>
          </AnimatePresence>

          <div className="delivery-agent-card p-4 rounded shadow-sm d-flex align-items-center justify-content-between bg-light">
             <div className="d-flex align-items-center">
                <div className="agent-avatar mr-3">
                   <Bike size={32} />
                </div>
                <div>
                   <p className="label-1 mb-0">Rahul Sharma</p>
                   <p className="label-3 opacity-50 mb-0">Your Delivery Partner</p>
                </div>
             </div>
             <div className="d-flex gap-3">
                <button className="btn-icon"><Phone size={20} /></button>
                <button className="btn-icon"><MessageSquare size={20} /></button>
             </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <div className="card p-4 shadow-sm h-100">
             <h3 className="headline-3 mb-4">Summary</h3>
             <div className="order-items-list mb-4 custom-scrollbar" style={{ maxHeight: '300px' }}>
                {order.items.map(item => (
                  <div key={item.id} className="d-flex justify-content-between mb-3">
                    <span className="label-2">{item.quantity} x {item.name}</span>
                    <span className="label-2">{item.price}</span>
                  </div>
                ))}
             </div>
             <hr />
             <div className="address-preview mt-3">
                <p className="label-3 opacity-50 mb-1">Delivering to:</p>
                <p className="label-2 font-weight-bold mb-0">{order.address.name}</p>
                <p className="label-3 mb-0">{order.address.street}, {order.address.city}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
