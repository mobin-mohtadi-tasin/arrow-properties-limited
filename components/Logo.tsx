import React from 'react';
import logoUrl from '../images/APL.png';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10', isScrolled = false }) => {
  return (
    <img 
      src={logoUrl} 
      alt="Arrow Properties Limited Logo" 
      className={`${className} object-contain transition-all duration-300`}
      id="arrow-properties-logo-img"
    />
  );
};

export default Logo;
