import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import InteractiveRating from './InteractiveRating';

const testimonials = [
  {
    name: 'Ananya Sharma',
    title: 'Food Blogger',
    quote: '"The Hyderabadi Dum Biryani here is hands down the best I\'ve had in the city. The spices are perfectly balanced and the meat is incredibly tender."',
    rating: 5,
    avatar: '/assets/images/avatar_1.png'
  },
  {
    name: 'Vikram Mehta',
    title: 'Corporate Executive',
    quote: '"Perfect place for a business lunch. The ambiance is elegant, and the service is top-notch. Their kebabs are a must-try for everyone."',
    rating: 5,
    avatar: '/assets/images/avatar_2.png'
  },
  {
    name: 'Rohan Deshmukh',
    title: 'Regular Guest',
    quote: '"Food Munch never disappoints. Whether it\'s a family dinner or a quick weekend brunch, the quality remains consistent. Love the new mocktails!"',
    rating: 4,
    avatar: '/assets/images/avatar_3.png'
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section testimonials" aria-label="testimonials" id="reviews">
      <div className="container">
        <p className="section-subtitle label-2 text-center">What Our Guests Say</p>
        <h2 className="headline-1 section-title text-center">Customer Reviews</h2>

        <motion.ul 
          className="grid-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.li key={index} variants={itemVariants}>
              <div className="testimonial-card">
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                
                <div className="rating">
                  <InteractiveRating size={16} initialRating={testimonial.rating} readOnly={true} />
                </div>

                <blockquote className="quote">{testimonial.quote}</blockquote>

                <div className="author">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-title">{testimonial.title}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Testimonials;
