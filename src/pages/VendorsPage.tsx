
import React, { useEffect, useState } from 'react';
import { Search, ExternalLink, ShoppingBag, UtensilsCrossed, Leaf, Heart, Music, Package, Camera, MapPin } from 'lucide-react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import BilingualText from '../components/BilingualText';

type VendorCategory = 'all' | 'catering' | 'photo-video' | 'products' | 'other';

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
    // Catering
    {
      id: 1,
      nameEn: "Koshari Mama",
      nameEs: "Koshari Mama",
      category: 'catering',
      descriptionEn: "585 Somerville Ave, Somerville MA 02143",
      descriptionEs: "585 Somerville Ave, Somerville MA 02143",
      website: "www.kosharimama.com",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 2,
      nameEn: "Carolicious",
      nameEs: "Carolicious",
      category: 'catering',
      descriptionEn: "6 Bow Market Way, Somerville, MA 02143",
      descriptionEs: "6 Bow Market Way, Somerville, MA 02143",
      website: "www.carolicious.net",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 3,
      nameEn: "Tasty Mo:Mo",
      nameEs: "Tasty Mo:Mo",
      category: 'catering',
      descriptionEn: "508 Medford St, Somerville, MA 02145",
      descriptionEs: "508 Medford St, Somerville, MA 02145",
      website: "tastymomo.com",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 4,
      nameEn: "Lotus Xpress",
      nameEs: "Lotus Xpress",
      category: 'catering',
      descriptionEn: "167 Broadway, Somerville, MA 02145",
      descriptionEs: "167 Broadway, Somerville, MA 02145",
      website: "lotusxpressma.com",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 5,
      nameEn: "Dave's Fresh Pasta",
      nameEs: "Dave's Fresh Pasta",
      category: 'catering',
      descriptionEn: "81 Holland St, Somerville, MA 02144",
      descriptionEs: "81 Holland St, Somerville, MA 02144",
      website: "www.davesfreshpasta.com",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 6,
      nameEn: "Tipping Cow Ice Cream",
      nameEs: "Tipping Cow Ice Cream",
      category: 'catering',
      descriptionEn: "415 Medford St, Somerville MA 02145",
      descriptionEs: "415 Medford St, Somerville MA 02145",
      website: "www.tippingcowicecream.com",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 7,
      nameEn: "Greencrab.org",
      nameEs: "Greencrab.org",
      category: 'catering',
      descriptionEn: "101 School St, Somerville MA 02143",
      descriptionEs: "101 School St, Somerville MA 02143",
      website: "www.greencrab.org",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 8,
      nameEn: "Tasting Counter",
      nameEs: "Tasting Counter",
      category: 'catering',
      descriptionEn: "14 Tyler Street, Somerville MA 02143",
      descriptionEs: "14 Tyler Street, Somerville MA 02143",
      website: "tastingcounter.com",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 9,
      nameEn: "Mei Mei Dumplings",
      nameEs: "Mei Mei Dumplings",
      category: 'catering',
      descriptionEn: "58 Old Colony Ave, Boston MA 02127",
      descriptionEs: "58 Old Colony Ave, Boston MA 02127",
      website: "meimeidumplings.com",
      icon: <UtensilsCrossed size={28} />
    },
    {
      id: 10,
      nameEn: "Chappy's Pickles LLC",
      nameEs: "Chappy's Pickles LLC",
      category: 'catering',
      descriptionEn: "32 Cambridge St, Charlestown MA 02129",
      descriptionEs: "32 Cambridge St, Charlestown MA 02129",
      website: "chappyspickles.com",
      icon: <UtensilsCrossed size={28} />
    },
    // Photo / Video
    {
      id: 11,
      nameEn: "Family Ties Media LLC ★",
      nameEs: "Family Ties Media LLC ★",
      category: 'photo-video',
      descriptionEn: "25 Walnut Road, Somerville MA 02145",
      descriptionEs: "25 Walnut Road, Somerville MA 02145",
      website: "www.familytiesmedia.com",
      icon: <Camera size={28} />
    },
    // Products
    {
      id: 12,
      nameEn: "Picnic & Pantry",
      nameEs: "Picnic & Pantry",
      category: 'products',
      descriptionEn: "1 Bow Market Way, Unit 3, Somerville MA 02143",
      descriptionEs: "1 Bow Market Way, Unit 3, Somerville MA 02143",
      website: "www.instagram.com/picnicandpantrysomerville",
      icon: <Package size={28} />
    },
    // Other vendors
    {
      id: 13,
      nameEn: "Somerville Sustainable Cleaning, LLC",
      nameEs: "Somerville Sustainable Cleaning, LLC",
      category: 'other',
      descriptionEn: "18 Dorrance Street, Unit #2, Boston MA 02129",
      descriptionEs: "18 Dorrance Street, Unit #2, Boston MA 02129",
      website: "somervillecleaning.com",
      icon: <Leaf size={28} />
    },
    {
      id: 14,
      nameEn: "Serenity Wellness Massage ★",
      nameEs: "Serenity Wellness Massage ★",
      category: 'other',
      descriptionEn: "62 Summer St, Somerville MA 02143",
      descriptionEs: "62 Summer St, Somerville MA 02143",
      website: "www.serenitywellnessmassage.com",
      icon: <Heart size={28} />
    }
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
    'photo-video': { en: 'Photo & Video', es: 'Foto y Video' },
    products: { en: 'Products', es: 'Productos' },
    other: { en: 'Other Services', es: 'Otros Servicios' },
  };

  const getCategoryIcon = (category: VendorCategory) => {
    switch(category) {
      case 'catering': return <UtensilsCrossed size={20} />;
      case 'photo-video': return <Camera size={20} />;
      case 'products': return <Package size={20} />;
      case 'other': return <Leaf size={20} />;
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
                <span className="en-content">Submit Your Business</span>
                <span className="es-content hidden-language">Registra tu Negocio</span>
                <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VendorsPage;
