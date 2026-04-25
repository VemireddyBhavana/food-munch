import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const InteractiveRating = ({ initialRating = 0, onRate, size = 20, className = "", readOnly = false }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleRating = (value) => {
    if (readOnly) return;
    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <div className={`rating-interactive ${className}`} style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((num) => (
        <motion.button
          key={num}
          whileHover={readOnly ? {} : { scale: 1.2 }}
          whileTap={readOnly ? {} : { scale: 0.9 }}
          onClick={() => handleRating(num)}
          onMouseEnter={() => !readOnly && setHover(num)}
          onMouseLeave={() => !readOnly && setHover(0)}
          className="star-btn"
          style={{ cursor: readOnly ? 'default' : 'pointer' }}
          aria-label={`Rate ${num} stars`}
        >
          <Star
            size={size}
            fill={(hover || rating) >= num ? "var(--gold-crayola)" : "none"}
            color="var(--gold-crayola)"
            strokeWidth={2}
            style={{ transition: 'fill 0.2s ease' }}
          />
        </motion.button>
      ))}
      <span className="rating-value label-2" style={{ marginLeft: '8px', color: 'var(--gold-crayola)' }}>
        {rating > 0 ? rating.toFixed(1) : "No rating"}
      </span>
    </div>
  );
};

export default InteractiveRating;
