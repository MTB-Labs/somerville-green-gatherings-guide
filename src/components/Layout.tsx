
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  // Check if user has a language preference saved
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: 'en' | 'es') => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
    
    // Add a class to all language-specific content
    document.querySelectorAll('.en-content, .es-content').forEach(el => {
      el.classList.add('hidden-language');
    });
    
    // Remove hidden class from the selected language content
    document.querySelectorAll(`.${lang}-content`).forEach(el => {
      el.classList.remove('hidden-language');
    });

    // Dispatch custom event for components that need to react to language changes
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Layout;
