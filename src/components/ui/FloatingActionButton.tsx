import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar, X } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const actions = [
    {
      icon: Phone,
      label: 'Call Now',
      color: 'bg-green-600 hover:bg-green-700',
      href: 'tel:(917)250-2222',
      delay: 0.1
    },
    {
      icon: MessageCircle,
      label: 'Text Us',
      color: 'bg-blue-600 hover:bg-blue-700',
      href: 'sms:(917)250-2222',
      delay: 0.2
    },
    {
      icon: Calendar,
      label: 'Schedule',
      color: 'bg-amber-600 hover:bg-amber-700',
      href: '#contact',
      delay: 0.3,
      onClick: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsExpanded(false);
      }
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Items */}
      <AnimatePresence>
        {isExpanded && (
          <div className="absolute bottom-16 right-0 flex flex-col space-y-3">
            {actions.map((action) => {
              const IconComponent = action.icon;
              return (
                <motion.div
                  key={action.label}
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: action.delay,
                    ease: "easeOut"
                  }}
                  className="flex items-center"
                >
                  {/* Label */}
                  <div className="bg-gray-800 text-white px-3 py-2 rounded-lg mr-3 text-sm font-medium whitespace-nowrap shadow-lg">
                    {action.label}
                  </div>
                  
                  {/* Button */}
                  <motion.a
                    href={action.href}
                    onClick={action.onClick}
                    className={`w-12 h-12 ${action.color} text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        className={`w-14 h-14 ${isExpanded ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isExpanded ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6" />
        )}
      </motion.button>

      {/* Pulsing animation when closed */}
      {!isExpanded && (
        <motion.div
          className="absolute inset-0 bg-green-600 rounded-full -z-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </div>
  );
};

export default FloatingActionButton;