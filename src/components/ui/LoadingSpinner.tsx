import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-green-800 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;