import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useIntersectionObserver } from '../../utils/lazyLoading';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  from, 
  to, 
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const { ref, isVisible } = useIntersectionObserver(0.5);
  const count = useMotionValue(from);
  const rounded = useTransform(count, latest => {
    const value = Math.round(latest);
    return `${prefix}${value}${suffix}`;
  });

  useEffect(() => {
    if (isVisible) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isVisible, count, to, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {rounded}
    </motion.span>
  );
};

export default AnimatedCounter;