import React from 'react';
import { motion } from 'motion/react';
import logoUrl from '../images/APL.png';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
  layoutId?: string;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
}

const Logo: React.FC<LogoProps> = ({ 
  className = 'h-10', 
  isScrolled = false,
  layoutId,
  initial,
  animate,
  exit,
  transition
}) => {
  return (
    <motion.img 
      layoutId={layoutId}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      src={logoUrl} 
      alt="Arrow Properties Limited Logo" 
      className={`${className} object-contain`}
      id="arrow-properties-logo-img"
    />
  );
};

export default Logo;
