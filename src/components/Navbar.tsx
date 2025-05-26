import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../images/SomerGreenEvents Logo.png';

interface NavbarProps {
  language: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', labelEn: 'Home', labelEs: 'Inicio', path: '/' },
    { id: 'planning', labelEn: 'Planning', labelEs: 'Planificación', path: '/planning' },
    { id: 'checklist', labelEn: 'Checklist', labelEs: 'Lista de Verificación', path: '/checklist' },
    { id: 'vendors', labelEn: 'Vendors', labelEs: 'Proveedores', path: '/vendors' },
    { id: 'resources', labelEn: 'Resources', labelEs: 'Recursos', path: '/resources' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="SomerGreenEvents logo" style={{ width: 150, height: 'auto' }} className="h-10 w-auto" />
              </Link>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="text-gray-700 hover:text-green-500 px-3 py-2 text-sm font-medium"
                >
                  {language === 'en' ? item.labelEn : item.labelEs}
                </Link>
              ))}
            </div>
            <div className="border-l border-gray-200 pl-4 flex space-x-2">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 ${language === 'en' ? 'language-toggle-active' : ''}`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-2 py-1 ${language === 'es' ? 'language-toggle-active' : ''}`}
              >
                ES
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {language === 'en' ? item.labelEn : item.labelEs}
              </Link>
            ))}
            <div className="flex space-x-4 px-4 py-3 border-t border-gray-200">
              <button
                onClick={() => {
                  onLanguageChange('en');
                  setIsOpen(false);
                }}
                className={`px-3 py-1 ${language === 'en' ? 'language-toggle-active' : ''}`}
              >
                English
              </button>
              <button
                onClick={() => {
                  onLanguageChange('es');
                  setIsOpen(false);
                }}
                className={`px-3 py-1 ${language === 'es' ? 'language-toggle-active' : ''}`}
              >
                Español
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
