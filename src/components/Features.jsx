import React from 'react';
import { motion } from 'framer-motion';
import { features_icon_1, features_icon_2, features_icon_3, features_icon_4, shape_7, shape_8 } from '../data/imageAssets';

const Features = () => {
  const features = [
    {
      img: features_icon_1,
      title: 'Hygienic Kitchen',
      text: 'Our kitchen follows strict FSSAI food safety standards — every dish is prepared in a clean, certified environment.'
    },
    {
      img: features_icon_2,
      title: 'Fresh Ingredients',
      text: 'We source locally grown, farm-fresh produce daily to ensure bold flavours and maximum nutrition in every meal.'
    },
    {
      img: features_icon_3,
      title: 'Expert Chefs',
      text: 'Our chefs bring 20+ years of experience in Hyderabadi, Mughlai, and modern fusion cuisines to your plate.'
    },
    {
      img: features_icon_4,
      title: 'Events & Catering',
      text: 'From intimate family dinners to grand corporate banquets — our event team crafts experiences you\'ll remember.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">
        <p className="section-subtitle label-2">Why Choose Us</p>
        <h2 className="headline-1 section-title">Our Strengths</h2>

        <motion.ul 
          className="grid-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.li 
              className="feature-item" 
              key={index}
              variants={itemVariants}
            >
              <div className="feature-card">
                <div className="card-icon">
                  <img src={feature.img} width="100" height="80" loading="lazy" alt={feature.title} />
                </div>
                <h3 className="title-2 card-title">{feature.title}</h3>
                <p className="label-1 card-text">{feature.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <img src={shape_7} width="208" height="178" loading="lazy" alt="shape" className="shape shape-1" />
        <img src={shape_8} width="120" height="115" loading="lazy" alt="shape" className="shape shape-2" />
      </div>
    </section>
  );
};

export default Features;
