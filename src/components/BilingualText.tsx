
import React from 'react';

interface BilingualTextProps {
  english: string | React.ReactNode;
  spanish: string | React.ReactNode;
  className?: string;
}

const BilingualText: React.FC<BilingualTextProps> = ({ english, spanish, className = '' }) => {
  return (
    <div className={className}>
      <div className="en-content">{english}</div>
      <div className="es-content hidden-language">{spanish}</div>
    </div>
  );
};

export default BilingualText;
