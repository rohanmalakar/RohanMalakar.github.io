import React from 'react';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  width = 400, 
  height = 300, 
  text = "Project Image", 
  className = "" 
}) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 text-gray-600 dark:text-gray-300 font-semibold ${className}`}
      style={{ width, height }}
    >
      <div className="text-center">
        <div className="text-lg mb-2">📷</div>
        <div className="text-sm">{text}</div>
        <div className="text-xs opacity-70">{width}x{height}</div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
