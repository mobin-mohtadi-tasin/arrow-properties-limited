
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
