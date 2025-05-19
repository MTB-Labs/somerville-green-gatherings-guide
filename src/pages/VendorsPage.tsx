import React, { useEffect, useState } from 'react';
import { Search, ExternalLink, ShoppingBag, UtensilsCrossed, Leaf, Palette, Music, Package } from 'lucide-react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import BilingualText from '../components/BilingualText';

type VendorCategory = 'all' | 'catering' | 'rentals' | 'waste' | 'decor' | 'artists' | 'products';

const VendorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<VendorCategory>('all');

  // Set initial language content visibility
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') || 'en';
    
    document.querySelectorAll('.en-content, .es-content').forEach(el => {
      el.classList.add('hidden-language');
    });
    
    document.querySelectorAll(`.${savedLanguage}-content`).forEach(el => {
      el.classList.remove('hidden-language');
    });
  }, []);

  const vendors = [
    {
      id: 1,
      nameEn: "Julie's Kitchen",
      nameEs: "Julie's Kitchen",
      category: 'catering',
      descriptionEn: "Plant-forward, zero-waste catering. Local produce, fully compostable setup.",
      descriptionEs: "Catering sin desperdicio, basado en plantas. Ingredientes locales y materiales compostables.",
      website: "www.julieskitchen.com",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 2,
      nameEn: "Tierra Viva Foods",
      nameEs: "Tierra Viva Foods",
      category: 'catering',
      descriptionEn: "Latinx-owned catering business offering vegan and vegetarian Latin American menus.",
      descriptionEs: "Negocio de catering latino con menús veganos y vegetarianos de América Latina.",
      website: "www.tierravivafoods.com",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 3,
      nameEn: "Simple Gatherings Rentals",
      nameEs: "Simple Gatherings Rentals",
      category: 'rentals',
      descriptionEn: "Reusable dishware, tables, solar lights. Delivery available.",
      descriptionEs: "Alquiler de vajilla, mesas e iluminación solar. Entrega incluida.",
      website: "www.simplegatherings.com",
      icon: <ShoppingBag size={28} />
    },
    {
      id: 4,
      nameEn: "Loop Party Rentals",
      nameEs: "Loop Party Rentals",
      category: 'rentals',
      descriptionEn: "Circular economy-based rentals. Everything is reused, cleaned, and returned.",
      descriptionEs: "Alquileres basados en economía circular. Todo se reutiliza, limpia y regresa.",
      website: "www.loopparty.com",
      icon: <ShoppingBag size={28} />
    },
    {
      id: 5,
      nameEn: "Bootstrap Compost",
      nameEs: "Bootstrap Compost",
      category: 'waste',
      descriptionEn: "Compost pickup for events, waste tracking reports included.",
      descriptionEs: "Recolección de compost para eventos, con reportes de residuos.",
      website: "www.bootstrapcompost.com",
      icon: <Leaf size={28} />
    },
    {
      id: 6,
      nameEn: "Waste Wise",
      nameEs: "Waste Wise",
      category: 'waste',
      descriptionEn: "Zero-waste event consulting, bin rentals, and staff support.",
      descriptionEs: "Asesoría para eventos sin residuos, alquiler de botes y asistencia en sitio.",
      website: "www.wastewiseevents.com",
      icon: <Leaf size={28} />
    },
    {
      id: 7,
      nameEn: "EcoFlora Events",
      nameEs: "EcoFlora Events",
      category: 'decor',
      descriptionEn: "Florals with native, seasonal plants. Reusable vases and low-impact design.",
      descriptionEs: "Arreglos florales con plantas nativas y de temporada. Diseño de bajo impacto.",
      website: "www.ecofloraevents.com",
      icon: <Palette size={28} />
    },
    {
      id: 8,
      nameEn: "Upcycled Party Co.",
      nameEs: "Upcycled Party Co.",
      category: 'decor',
      descriptionEn: "Party decorations made from recycled, secondhand, or natural materials.",
      descriptionEs: "Decoraciones hechas con materiales reciclados, reutilizados o naturales.",
      website: "www.upcycledparty.com",
      icon: <Palette size={28} />
    },
    {
      id: 9,
      nameEn: "The Upcycle Collective",
      nameEs: "The Upcycle Collective",
      category: 'artists',
      descriptionEn: "Stage and installation artists using repurposed materials.",
      descriptionEs: "Artistas escénicos que trabajan con materiales reutilizados.",
      website: "www.upcyclecollective.org",
      icon: <Music size={28} />
    },
    {
      id: 10,
      nameEn: "EcoSound DJ",
      nameEs: "EcoSound DJ",
      category: 'artists',
      descriptionEn: "Low-energy sound systems, playlists with community & culture focus.",
      descriptionEs: "Equipos de sonido de bajo consumo, música con enfoque comunitario.",
      website: "www.ecosounddj.com",
      icon: <Music size={28} />
    },
    {
      id: 11,
      nameEn: "Uvida Zero Waste Shop",
      nameEs: "Uvida Zero Waste Shop",
      category: 'products',
      descriptionEn: "Bulk snacks, compostables, and reusable party supplies.",
      descriptionEs: "Snacks a granel, productos compostables y utensilios reutilizables para fiestas.",
      website: "www.uvidashop.com",
      icon: <Package size={28} />
    },
    {
      id: 12,
      nameEn: "The Jar Lady",
      nameEs: "The Jar Lady",
      category: 'products',
      descriptionEn: "Rentable mason jar kits for parties (cups, decor, favors).",
      descriptionEs: "Kits de frascos reutilizables para fiestas (vasos, decoración, recuerdos).",
      website: "www.thejarlady.com",
      icon: <Package size={28} />
    },
  ];

  const filteredVendors = vendors.filter(vendor => {
    const matchesCategory = activeCategory === 'all' || vendor.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      vendor.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
      vendor.nameEs.toLowerCase().includes(searchTerm.toLowerCase()) || 
      vendor.descriptionEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
      vendor.descriptionEs.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const categoryLabels = {
    all: { en: 'All Vendors', es: 'Todos los Proveedores' },
    catering: { en: 'Catering', es: 'Catering' },
    rentals: { en: 'Rentals', es: 'Alquileres' },
    waste: { en: 'Waste Services', es: 'Gestión de Residuos' },
    decor: { en: 'Decor', es: 'Decoración' },
    artists: { en: 'Artists & Performers', es: 'Artistas y Músicos' },
    products: { en: 'Products', es: 'Productos' },
  };

  const getCategoryIcon = (category: VendorCategory) => {
    switch(category) {
      case 'catering': return <UtensilsCrossed size={20} />;
      case 'rentals': return <ShoppingBag size={20} />;
      case 'waste': return <Leaf size={20} />;
      case 'decor': return <Palette size={20} />;
      case 'artists': return <Music size={20} />;
      case 'products': return <Package size={20} />;
      default: return null;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-100 to-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            <BilingualText
              english="Sustainable Event Vendors Directory"
              spanish="Directorio de Proveedores para Eventos Sostenibles"
            />
          </h1>
          <div className="max-w-2xl mx-auto">
            <BilingualText
              english={
                <p className="text-lg text-gray-700">
                  Explore local businesses and organizations offering eco-conscious services for events in Somerville and surrounding areas.
                </p>
              }
              spanish={
                <p className="text-lg text-gray-700">
                  Explora negocios locales y organizaciones que ofrecen servicios sostenibles para eventos en Somerville y alrededores.
                </p>
              }
              className="mt-4"
            />
          </div>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-auto md:flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Search vendors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Categories (scrollable on mobile) */}
              <div className="w-full md:w-auto flex-none overflow-x-auto">
                <div className="flex space-x-2 min-w-max">
                  {Object.entries(categoryLabels).map(([category, labels]) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category as VendorCategory)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center whitespace-nowrap ${
                        activeCategory === category 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {getCategoryIcon(category as VendorCategory)}
                      <span className="ml-1.5">
                        <span className="en-content">{labels.en}</span>
                        <span className="es-content hidden-language">{labels.es}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vendors Listing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredVendors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredVendors.map(vendor => (
                  <div key={vendor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-green-500 mb-2">
                            <span className="en-content">{vendor.nameEn}</span>
                            <span className="es-content hidden-language">{vendor.nameEs}</span>
                          </h3>
                          <p className="text-gray-600 mb-4">
                            <span className="en-content">{vendor.descriptionEn}</span>
                            <span className="es-content hidden-language">{vendor.descriptionEs}</span>
                          </p>
                          <a 
                            href={`https://${vendor.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-green-600 hover:text-green-700"
                          >
                            {vendor.website} <ExternalLink size={14} className="ml-1" />
                          </a>
                        </div>
                        <div className="p-2 bg-green-100 rounded-md text-green-500 ml-4">
                          {vendor.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  <BilingualText
                    english="No vendors found matching your criteria. Please try different search terms or categories."
                    spanish="No se encontraron proveedores que coincidan con tus criterios. Intenta con otros términos de búsqueda o categorías."
                  />
                </p>
              </div>
            )}
            
            {/* Vendor Application */}
            <div className="mt-16 bg-earth-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-earth-500 mb-4">
                <BilingualText
                  english="Want to be listed here?"
                  spanish="¿Quieres aparecer aquí?"
                />
              </h3>
              <p className="text-earth-700 max-w-2xl mx-auto mb-6">
                <BilingualText
                  english="If you're a business or organization offering sustainable event services in Somerville or nearby, we'd love to include you!"
                  spanish="Si eres un negocio u organización que ofrece servicios sostenibles para eventos en Somerville o alrededores, ¡nos encantaría incluirte!"
                />
              </p>
              <a 
                href="https://forms.gle/5yPxz2pPot8iUn6Z7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
              >
                <BilingualText
                  english={<>Submit Your Business <ExternalLink size={16} className="ml-1" /></>}
                  spanish={<>Registra tu Negocio <ExternalLink size={16} className="ml-1" /></>}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VendorsPage;
