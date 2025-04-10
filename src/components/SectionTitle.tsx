
import React from 'react';

interface SectionTitleProps {
  englishTitle: string;
  spanishTitle: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  englishTitle, 
  spanishTitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-10 eco-divider ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-1">
        <span className="en-content">{englishTitle}</span>
        <span className="es-content hidden-language">{spanishTitle}</span>
      </h2>
    </div>
  );
};

export default SectionTitle;
