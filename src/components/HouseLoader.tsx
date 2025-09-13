import React from 'react';
import { Home } from 'lucide-react';

interface HouseLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const HouseLoader: React.FC<HouseLoaderProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Home 
        className={`${sizeClasses[size]} text-primary house-loader`}
      />
    </div>
  );
};

export default HouseLoader;