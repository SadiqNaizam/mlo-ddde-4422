import React from 'react';
import { motion } from 'framer-motion';

// This component is designed to wrap page content.
// For exit animations to work correctly, it should be used
// within the <AnimatePresence> component from framer-motion,
// which would typically be placed in your main App layout component.

interface AnimatedPageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    scale: 0.95,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4,
};

const AnimatedPageTransition: React.FC<AnimatedPageTransitionProps> = ({ children, className }) => {
  console.log('AnimatedPageTransition loaded');

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageTransition;