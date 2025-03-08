import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, useInView } from 'framer-motion';

/**
 * A drop-in replacement for react-reveal/Fade using framer-motion
 * Supports the same API as react-reveal/Fade: left, right, top, bottom, delay, duration, distance
 * Elements will only animate when they come into view while scrolling
 */
function Fade({
  children,
  left,
  right,
  top,
  bottom,
  delay,
  duration,
  distance = '30px',
  ...props
}) {
  // Create a ref for the element
  const ref = useRef(null);

  // Monitor when the element is in view
  const isInView = useInView(ref, {
    once: true, // Only trigger the animation once
    amount: 0.2, // When at least 20% of the element is visible
  });

  // Determine the initial position based on the direction props
  const initial = { opacity: 0 };

  if (left) initial.x = `-${distance}`;
  else if (right) initial.x = distance;

  if (top) initial.y = `-${distance}`;
  else if (bottom) initial.y = distance;

  // Configure the animation
  const animate = isInView
    ? {
        opacity: 1,
        x: 0,
        y: 0,
      }
    : initial;

  // Configure transition options
  const transition = {
    duration: duration ? duration / 1000 : 0.8, // react-reveal uses ms, framer-motion uses seconds
    delay: delay ? delay / 1000 : 0,
    ease: 'easeOut',
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={initial}
        animate={animate}
        exit={{ opacity: 0 }}
        transition={transition}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  delay: PropTypes.number,
  duration: PropTypes.number,
  distance: PropTypes.string,
};

export default Fade;
