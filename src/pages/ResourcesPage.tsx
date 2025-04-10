
import React, { useEffect } from 'react';
import { Calculator, FileText, Globe, Link as LinkIcon, ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import BilingualText from '../components/BilingualText';

const ResourcesPage: React.FC = () => {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-100 to-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            <BilingualText
              english="Resources & Tools"
              spanish="Recursos y Herramientas"
            />
          </h1>
          <div className="max-w-2xl mx-auto">
            <BilingualText
              english={
                <p className="text-lg text-gray-700">
                  Whether you're planning your first sustainable event or looking to improve one you've done before, 
                  these tools and links can help.
                </p>
              }
              spanish={
                <p className="text-lg text-gray-700">
                  Ya sea que estés organizando tu primer evento sostenible o quieras mejorar uno que ya hiciste, 
                  estas herramientas y enlaces pueden ayudarte.
                </p>
              }
              className="mt-4"
            />
          </div>
        </div>
      </section>
      
      {/* Calculators & Planning Tools */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              englishTitle="Calculators & Planning Tools" 
              spanishTitle="Calculadoras y herramientas de planificación" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* MeetGreen */}
              <div className="bg-green-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Calculator className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">MeetGreen® Sustainability Calculator</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <BilingualText
                          english="Track waste diversion and sustainability goals for events."
                          spanish="Calcula la reducción de residuos y metas de sostenibilidad para eventos."
                        />
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://meetgreen.com/tools-resources" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                  >
                    https://meetgreen.com/tools-resources <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* UN Climate Neutral */}
              <div className="bg-green-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Calculator className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">UN Climate Neutral Now Event Calculator</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <BilingualText
                          english="Estimate and offset the carbon footprint of your event."
                          spanish="Estima y compensa la huella de carbono de tu evento."
                        />
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://unfccc.int/climate-action/climate-neutral-now" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                  >
                    https://unfccc.int/climate-action/climate-neutral-now <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* CoolClimate Calculator */}
              <div className="bg-green-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Calculator className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">CoolClimate Event Calculator (UC Berkeley)</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <BilingualText
                          english="Estimate emissions based on size, food, transport, and materials."
                          spanish="Estima emisiones basado en tamaño, comida, transporte y materiales."
                        />
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://coolclimate.berkeley.edu/calculator" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                  >
                    https://coolclimate.berkeley.edu/calculator <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Green Events Checklist */}
              <div className="bg-green-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <FileText className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">Green Events Checklist – Sustainable Events Council</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <BilingualText
                          english="Free PDF checklist for planning with minimal impact."
                          spanish="Lista PDF gratuita para planificar con impacto mínimo."
                        />
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://sustainableeventalliance.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                  >
                    https://sustainableeventalliance.org <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Organizations & Guides */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              englishTitle="Organizations & Guides" 
              spanishTitle="Organizaciones y guías útiles" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* GMIC */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Globe className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">Green Meetings Industry Council (GMIC)</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <BilingualText
                          english="Best practices for corporate and community events."
                          spanish="Mejores prácticas para eventos corporativos y comunitarios."
                        />
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://www.gmicglobal.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                  >
                    https://www.gmicglobal.org <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Event Greening Forum */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Globe className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">Event Greening Forum (South Africa – globally relevant)</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <BilingualText
                          english="Event planning tools, case studies, and success stories."
                          spanish="Herramientas de planificación, casos prácticos e historias de éxito."
                        />
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://www.eventgreening.co.za" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                  >
                    https://www.eventgreening.co.za <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Zero Waste Events Guide */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <FileText className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">Zero Waste Events Guide – City of Austin</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <BilingualText
                          english="Practical city-level guide, adaptable for local use."
                          spanish="Guía práctica a nivel ciudad, adaptable para uso local."
                        />
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://www.austintexas.gov/department/zero-waste-events" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                  >
                    https://www.austintexas.gov/department/zero-waste-events <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* ReFED */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Globe className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">ReFED – Food Waste Solutions</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <BilingualText
                          english="Excellent food waste reduction tools."
                          spanish="Excelentes herramientas para reducir el desperdicio de alimentos."
                        />
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://refed.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                  >
                    https://refed.org <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Sustainable Somerville */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Globe className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">Sustainable Somerville & Green & Open Somerville</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <BilingualText
                          english="Local environmental orgs offering community education & resources."
                          spanish="Organizaciones ambientales locales que ofrecen educación y recursos comunitarios."
                        />
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://www.greenopensomerville.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                  >
                    https://www.greenopensomerville.org <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Local Somerville Resources */}
      <section className="py-16 bg-earth-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              englishTitle="Local Somerville Resources" 
              spanishTitle="Recursos locales de Somerville" 
            />
            
            <BilingualText
              english={
                <p className="mb-8 text-earth-700">
                  These local tools and programs can help you plan, promote, and green your event right here in Somerville.
                </p>
              }
              spanish={
                <p className="mb-8 text-earth-700">
                  Estas herramientas y programas locales pueden ayudarte a planificar, promover y hacer más sostenible tu evento aquí mismo en Somerville.
                </p>
              }
            />
            
            <div className="space-y-8">
              {/* Somerville Arts Council */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-semibold text-earth-500 mb-3">
                  <BilingualText
                    english="Somerville Arts Council – Event Support & Permits"
                    spanish="Consejo de las Artes de Somerville – Apoyo y permisos para eventos"
                  />
                </h3>
                <BilingualText
                  english={
                    <p className="text-gray-700 mb-4">
                      The SAC provides support for public events, especially those connected to arts and culture. 
                      You'll find permitting info, grant opportunities, and contacts to help you navigate the process.
                    </p>
                  }
                  spanish={
                    <p className="text-gray-700 mb-4">
                      El SAC brinda apoyo a eventos públicos, especialmente aquellos relacionados con arte y cultura. 
                      Aquí puedes encontrar información sobre permisos, oportunidades de financiamiento y contactos útiles para organizar tu evento.
                    </p>
                  }
                />
                <div className="flex items-center">
                  <LinkIcon className="text-green-500 w-5 h-5 mr-2" />
                  <a 
                    href="https://somervilleartscouncil.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                  >
                    Somerville Arts Council: https://somervilleartscouncil.org
                  </a>
                </div>
              </div>
              
              {/* City of Somerville */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-semibold text-earth-500 mb-3">
                  <BilingualText
                    english="City of Somerville – Public Event Permits & Sustainability Office"
                    spanish="Ciudad de Somerville – Permisos para eventos y Oficina de Sostenibilidad"
                  />
                </h3>
                <BilingualText
                  english={
                    <p className="text-gray-700 mb-4">
                      Organizing an event in a park, plaza, or street? You'll need a permit. The City's Special Events page 
                      includes forms, contact info, and guidelines. You can also connect with the Office of Sustainability & 
                      Environment for additional support.
                    </p>
                  }
                  spanish={
                    <p className="text-gray-700 mb-4">
                      ¿Organizas un evento en un parque, plaza o calle? Necesitarás un permiso. La página de Eventos Especiales 
                      de la Ciudad incluye formularios, contactos y requisitos. También puedes contactar a la Oficina de 
                      Sostenibilidad para obtener apoyo adicional.
                    </p>
                  }
                />
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <LinkIcon className="text-green-500 w-5 h-5 mr-2" />
                    <a 
                      href="https://www.somervillema.gov/events-permitting" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      <BilingualText
                        english="Permits / Permisos:"
                        spanish="Permisos:"
                      /> https://www.somervillema.gov/events-permitting
                    </a>
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="text-green-500 w-5 h-5 mr-2" />
                    <a 
                      href="https://www.somervillema.gov/sustainability" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      <BilingualText
                        english="Sustainability / Sostenibilidad:"
                        spanish="Sostenibilidad:"
                      /> https://www.somervillema.gov/sustainability
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Zero Waste Event Support */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-semibold text-earth-500 mb-3">
                  <BilingualText
                    english="Zero Waste Event Support – DPW & Local Partners"
                    spanish="Apoyo para eventos Cero Residuos – Departamento de Obras Públicas y organizaciones locales"
                  />
                </h3>
                <BilingualText
                  english={
                    <p className="text-gray-700 mb-4">
                      For larger events, contact the Department of Public Works to request extra bins (recycling/compost) 
                      or to coordinate pickup. You can also partner with local organizations like Green & Open Somerville 
                      or Bootstrap Compost.
                    </p>
                  }
                  spanish={
                    <p className="text-gray-700 mb-4">
                      Para eventos grandes, contacta al Departamento de Obras Públicas para pedir más contenedores 
                      (reciclaje/compostaje) o coordinar recolección. También puedes colaborar con organizaciones locales 
                      como Green & Open Somerville o Bootstrap Compost.
                    </p>
                  }
                />
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <LinkIcon className="text-green-500 w-5 h-5 mr-2" />
                    <a 
                      href="https://www.somervillema.gov/departments/dpw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      <BilingualText
                        english="DPW / Obras Públicas:"
                        spanish="Obras Públicas:"
                      /> https://www.somervillema.gov/departments/dpw
                    </a>
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="text-green-500 w-5 h-5 mr-2" />
                    <a 
                      href="https://bootstrapcompost.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      Bootstrap Compost: https://bootstrapcompost.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="text-green-500 w-5 h-5 mr-2" />
                    <a 
                      href="https://www.greenopensomerville.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      Green & Open Somerville: https://www.greenopensomerville.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data Sources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              englishTitle="Data Sources Used in This Guide" 
              spanishTitle="Fuentes de datos utilizadas en esta guía" 
            />
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-3">
                <li className="flex">
                  <LinkIcon className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">U.S. Environmental Protection Agency (EPA) – Waste & plastics data</p>
                    <a 
                      href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling
                    </a>
                  </div>
                </li>
                
                <li className="flex">
                  <LinkIcon className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">ReFED – Food waste in the U.S.</p>
                    <a 
                      href="https://refed.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      https://refed.org
                    </a>
                  </div>
                </li>
                
                <li className="flex">
                  <LinkIcon className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">NRDC – Wasted Report (2017)</p>
                    <a 
                      href="https://www.nrdc.org/resources/wasted-how-america-losing-40-percent-its-food-farm-fork-landfill" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      https://www.nrdc.org/resources/wasted-how-america-losing-40-percent-its-food-farm-fork-landfill
                    </a>
                  </div>
                </li>
                
                <li className="flex">
                  <LinkIcon className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">U.S. Department of Energy & EPA – CO₂ emissions from fuel</p>
                    <a 
                      href="https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator
                    </a>
                  </div>
                </li>
                
                <li className="flex">
                  <LinkIcon className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">MeetGreen® – Event waste statistics and benchmarks</p>
                    <a 
                      href="https://meetgreen.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      https://meetgreen.com
                    </a>
                  </div>
                </li>
                
                <li className="flex">
                  <LinkIcon className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">CoolClimate Network – Emissions calculators & event modeling</p>
                    <a 
                      href="https://coolclimate.berkeley.edu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      https://coolclimate.berkeley.edu
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
