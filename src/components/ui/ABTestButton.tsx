import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useABTest } from '../../utils/abTesting';

interface ABTestButtonProps {
  testId: string;
  className?: string;
  onClick?: () => void;
}

const ABTestButton: React.FC<ABTestButtonProps> = ({
  testId,
  className = '',
  onClick
}) => {
  const { variant, trackView, trackConversion } = useABTest(testId);

  // Track view when component mounts
  useEffect(() => {
    if (variant) {
      trackView();
    }
  }, [variant, trackView]);

  const handleClick = () => {
    trackConversion();
    if (onClick) {
      onClick();
    }
  };

  // If no variant is assigned, don't render anything
  if (!variant) return null;

  const buttonData = variant.data;

  return (
    <motion.button
      className={`${buttonData.baseClasses} ${className}`}
      style={{
        backgroundColor: buttonData.backgroundColor,
        color: buttonData.textColor,
        ...buttonData.customStyles
      }}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-ab-test={testId}
      data-ab-variant={variant.id}
    >
      {buttonData.icon && (
        <span className="mr-2">
          {buttonData.icon}
        </span>
      )}
      {buttonData.text}
    </motion.button>
  );
};

export default ABTestButton;