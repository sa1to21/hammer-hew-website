import { motion } from 'framer-motion';

interface MicroInteractionProps {
  children: React.ReactNode;
  type?: 'button' | 'card' | 'icon' | 'link';
  className?: string;
}

const MicroInteraction: React.FC<MicroInteractionProps> = ({ 
  children, 
  type = 'button',
  className = ''
}) => {

  const variants = {
    button: {
      whileHover: { 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 }
      },
      whileTap: { 
        scale: 0.95,
        transition: { duration: 0.1 }
      }
    },
    card: {
      whileHover: { 
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      },
      whileTap: { 
        scale: 0.98,
        y: -4
      }
    },
    icon: {
      whileHover: { 
        rotate: [0, -10, 10, 0],
        scale: 1.1,
        transition: { duration: 0.5 }
      },
      whileTap: { 
        scale: 0.9,
        rotate: 0
      }
    },
    link: {
      whileHover: { 
        x: 5,
        color: "#166534", // green-800
        transition: { duration: 0.2 }
      },
      whileTap: { 
        x: 2
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      whileHover={variants[type].whileHover}
      whileTap={variants[type].whileTap}
    >
      {children}
    </motion.div>
  );
};

export default MicroInteraction;