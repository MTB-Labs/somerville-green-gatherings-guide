
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Mail } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'es';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-green-100 text-green-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'SomGreenEvents' : 'SomGreenEvents'}
            </h3>
            <p className="text-sm text-green-800">
              {language === 'en'
                ? 'Celebrate With Purpose: A Bilingual Guide to Sustainable Events in Somerville'
                : 'Celebra con Propósito: Guía Bilingüe para Eventos Sostenibles en Somerville'}
            </p>
            <div className="flex items-center mt-4 text-sm">
              <Heart size={16} className="mr-1" />
              <span>
                {language === 'en'
                  ? 'Made with love for our community'
                  : 'Hecho con amor para nuestra comunidad'}
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Navigate' : 'Navegar'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  {language === 'en' ? 'Home' : 'Inicio'}
                </Link>
              </li>
              <li>
                <Link to="/planning" className="hover:underline">
                  {language === 'en' ? 'Planning' : 'Planificación'}
                </Link>
              </li>
              <li>
                <Link to="/checklist" className="hover:underline">
                  {language === 'en' ? 'Checklist' : 'Lista de Verificación'}
                </Link>
              </li>
              <li>
                <Link to="/vendors" className="hover:underline">
                  {language === 'en' ? 'Vendors' : 'Proveedores'}
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:underline">
                  {language === 'en' ? 'Resources' : 'Recursos'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Contact' : 'Contacto'}
            </h3>
            <div className="flex items-center text-sm mb-3">
              <Mail size={16} className="mr-2" />
              <a href="mailto:contact@somgreenevents.org" className="hover:underline">
                contact@somgreenevents.org
              </a>
            </div>
            <div className="flex items-center text-sm">
              <Leaf size={16} className="mr-2" />
              <span>
                {language === 'en'
                  ? 'Join our sustainability community'
                  : 'Únete a nuestra comunidad sostenible'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-200 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} SomGreenEvents. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
