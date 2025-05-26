import React, { useEffect } from 'react';
import { CheckCircle2, CheckSquare, Download } from 'lucide-react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import BilingualText from '../components/BilingualText';

const ChecklistPage: React.FC = () => {
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

  // Determine download URL based on language
  const language = localStorage.getItem('preferred-language') || 'en';
  const downloadUrl = language === 'es'
    ? '/files/PDF_Spanish_SomerGreenEvents.pdf'
    : '/files/PDF_English_SomerGreenEvents.pdf';

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-100 to-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            <BilingualText
              english="Green Event Checklist"
              spanish="Lista de verificación para eventos sostenibles"
            />
          </h1>
          <div className="max-w-2xl mx-auto">
            <BilingualText
              english={
                <p className="text-lg text-gray-700">
                  Planning a sustainable event doesn't mean reinventing everything — it just means thinking ahead and making intentional choices. 
                  This checklist is here to guide you through the process.
                </p>
              }
              spanish={
                <p className="text-lg text-gray-700">
                  Planificar un evento sostenible no significa cambiarlo todo — solo implica pensar con intención y tomar decisiones conscientes. 
                  Esta lista está pensada para acompañarte paso a paso.
                </p>
              }
              className="mt-4"
            />
          </div>
        </div>
      </section>
      
      {/* Checklist Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Before the Event */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-400 text-white p-4">
                  <h2 className="text-xl font-semibold">
                    <BilingualText
                      english="Before the Event"
                      spanish="Antes del evento"
                    />
                  </h2>
                </div>
                <div className="p-6">
                  <BilingualText
                    english={
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Choose a venue that supports sustainability (natural light, recycling, near transit)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Invite guests using digital platforms or recycled paper</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Offer transportation info: bus, train, bike routes, parking options</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Hire local and eco-conscious vendors (food, rentals, waste services)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Request compostable or reusable products from vendors</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Set up a waste plan: trash, recycling, compost</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Arrange for donation or storage of leftovers or materials</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Communicate your sustainability goals with your team and guests</span>
                        </li>
                      </ul>
                    }
                    spanish={
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Elige un lugar que apoye la sostenibilidad (luz natural, reciclaje, cerca de transporte)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Envía invitaciones digitales o usa papel reciclado</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Informa a los invitados sobre cómo llegar en transporte público o bici</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Contrata proveedores locales y con enfoque ecológico</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Pide productos compostables o reutilizables</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Define cómo manejarás los residuos: basura, reciclaje, compost</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Planifica qué hacer con los sobrantes o materiales al final</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Comparte tus metas sostenibles con tu equipo y tus invitados</span>
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>
              
              {/* During the Event */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-400 text-white p-4">
                  <h2 className="text-xl font-semibold">
                    <BilingualText
                      english="During the Event"
                      spanish="Durante el evento"
                    />
                  </h2>
                </div>
                <div className="p-6">
                  <BilingualText
                    english={
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Place clearly labeled bins (with signs in English + Spanish if needed)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Have someone monitor bins or help guide guests (a volunteer is great!)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Use reusable or compostable tableware and serving items</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Provide tap water stations or pitchers — no single-use bottles</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Remind guests of your green practices (a sign or quick announcement works!)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Take photos of your sustainable setup to share and inspire</span>
                        </li>
                      </ul>
                    }
                    spanish={
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Coloca botes bien etiquetados (con carteles en inglés y español si es necesario)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Asigna a alguien que ayude a los invitados a separar los residuos</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Usa utensilios, platos y vasos reutilizables o compostables</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Ofrece estaciones de agua del grifo o jarras (no botellas descartables)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Recuerda a los asistentes tus prácticas verdes (puede ser un cartel o anuncio breve)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Toma fotos de tu montaje sostenible para compartir e inspirar</span>
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>
              
              {/* After the Event */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-400 text-white p-4">
                  <h2 className="text-xl font-semibold">
                    <BilingualText
                      english="After the Event"
                      spanish="Después del evento"
                    />
                  </h2>
                </div>
                <div className="p-6">
                  <BilingualText
                    english={
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Clean up with care — sort and dispose of waste properly</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Donate or compost any leftover food</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Reuse or return decorations, materials, or equipment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Thank your vendors, volunteers, and guests — especially those who helped with green efforts</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Reflect: what worked, what didn't, what could improve next time</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Share your experience! Post photos, tag vendors, and spread the word</span>
                        </li>
                      </ul>
                    }
                    spanish={
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Limpia con cuidado — separa y desecha correctamente los residuos</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Dona o composta la comida que sobró</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Reutiliza o devuelve decoraciones, materiales o equipos</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Agradece a proveedores, voluntarios e invitados — especialmente a quienes ayudaron con lo sostenible</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Reflexiona: qué funcionó, qué no, qué podrías mejorar</span>
                        </li>
                        <li className="flex items-start">
                          <CheckSquare className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span>Comparte tu experiencia: sube fotos, etiqueta a los proveedores y corre la voz</span>
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>
              
              {/* Tip Box */}
              <div className="bg-earth-100 p-8 rounded-lg shadow-md">
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-earth-500">
                      <BilingualText
                        english="Tip"
                        spanish="Consejo"
                      />
                    </h3>
                    <BilingualText
                      english={
                        <p className="text-earth-700">
                          Don't be afraid to ask for help — from friends, community orgs, or city programs. 
                          People want to support events that reflect their values.
                        </p>
                      }
                      spanish={
                        <p className="text-earth-700">
                          No tengas miedo de pedir ayuda — a amistades, organizaciones comunitarias o programas de la ciudad. 
                          A la gente le gusta apoyar eventos con propósito.
                        </p>
                      }
                    />
                  </div>
                </div>
              </div>
              
              {/* Downloadable Version */}
              <div className="text-center mt-8">
                <a 
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
                >
                  <Download size={16} className="mr-2" />
                  <BilingualText
                    english="Download Checklist (PDF)"
                    spanish="Descargar lista de verificación (PDF)"
                  />
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  <BilingualText
                    english="Designed to use digitally — no printing needed."
                    spanish="Diseñada para usar en digital — no es necesario imprimir."
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChecklistPage;
