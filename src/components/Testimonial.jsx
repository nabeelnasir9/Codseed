import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "../data/data";
import '../styles/Testimonial.css'  
const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    },
    exit: { opacity: 0, scale: 0.9 },
    hover: { scale: 1.02 }
  };

const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      }, 4000);
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [isHovered]);

  const testimonial = testimonialsData[index];

  return (
    <div className="testimonials-container" onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.id}
          variants={testimonialVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          className="testimonial"
        >
          <img src={testimonial.image} alt={testimonial.name} />
          <h2>{testimonial.name}</h2>
          <p>{testimonial.message}</p>
          <p>{'⭐'.repeat(testimonial.stars)}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Testimonial