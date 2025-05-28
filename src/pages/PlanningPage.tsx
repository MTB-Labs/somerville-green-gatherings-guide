import React, { useEffect } from 'react';
import { Leaf, Calendar, Users, Truck, Utensils, Palette, MessageSquare } from 'lucide-react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import BilingualText from '../components/BilingualText';

const PlanningPage: React.FC = () => {
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
              english="Planning Your Sustainable Event"
              spanish="Planificando tu evento sostenible"
            />
          </h1>
          <div className="max-w-2xl mx-auto">
            <BilingualText
              english={
                <p className="text-lg text-gray-700">
                  Planning an event — even a small one — takes effort. Adding sustainability into the mix shouldn't make it harder. 
                  This section breaks it all down into manageable parts.
                </p>
              }
              spanish={
                <p className="text-lg text-gray-700">
                  Planificar un evento — incluso uno pequeño — requiere trabajo. Agregar la sostenibilidad no debería hacerlo más difícil. 
                  En esta sección te explicamos todo paso a paso.
                </p>
              }
              className="mt-4"
            />
          </div>
        </div>
      </section>
      
      {/* Planning Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-400 text-white p-4 flex items-center">
                  <Calendar className="mr-3" size={24} />
                  <h2 className="text-xl font-semibold">
                    <BilingualText
                      english="1. Choose a Greener Venue"
                      spanish="1. Elige un espacio más ecológico"
                    />
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <img 
                        src="/images/UpcycledReusableDecor&Dishware_Credits_Canva.webp" 
                        alt="Sustainable venue setup" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <BilingualText
                    english={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Look for venues that use renewable energy, compost, or have natural light.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Parks and outdoor spaces can be great low-impact options.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Ask if they have recycling and composting options already set up.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Prioritize spaces that are near public transit or walkable.</span>
                        </li>
                      </ul>
                    }
                    spanish={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Busca lugares que usen energía renovable, hagan compost o tengan buena luz natural.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Los parques y espacios al aire libre pueden ser opciones de bajo impacto.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Pregunta si ya tienen reciclaje y compostaje.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Prioriza lugares cerca de transporte público o que se pueda llegar caminando.</span>
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-400 text-white p-4 flex items-center">
                  <Truck className="mr-3" size={24} />
                  <h2 className="text-xl font-semibold">
                    <BilingualText
                      english="2. Make Transportation Easier and Greener"
                      spanish="2. Facilita un transporte más ecológico"
                    />
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <img 
                        src="/images/Green_Transport.webp" 
                        alt="Green transport" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <BilingualText
                    english={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Encourage guests to walk, bike, carpool, or use the T.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Include transit directions and bike racks in your invite.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Offer incentives (like raffle tickets) for arriving without a car.</span>
                        </li>
                      </ul>
                    }
                    spanish={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Anima a tus invitados a caminar, ir en bici, compartir auto o usar el T.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Incluye cómo llegar en transporte público o dónde estacionar bicis en la invitación.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Ofrece un premio o sorteo para quienes lleguen sin auto.</span>
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-400 text-white p-4 flex items-center">
                  <Leaf className="mr-3" size={24} />
                  <h2 className="text-xl font-semibold">
                    <BilingualText
                      english="3. Plan for Waste"
                      spanish="3. Planifica los residuos"
                    />
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <img 
                        src="/images/EventWasteManagement_Credits_TheNews&Observers.webp" 
                        alt="Event waste management" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <BilingualText
                    english={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Set up clearly labeled bins: trash, recycling, compost.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>If possible, assign a "waste monitor" to help guests sort correctly.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Avoid single-use items. Go for reusables, compostables, or bulk options.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Bring reusable bags, containers, or serving ware if you can.</span>
                        </li>
                      </ul>
                    }
                    spanish={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Coloca botes bien marcados: basura, reciclaje, compost.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Si puedes, asigna a alguien que ayude a los invitados a separar bien.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Evita lo descartable. Usa objetos reutilizables, compostables o a granel.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Lleva bolsas, envases o utensilios reutilizables si es posible.</span>
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-400 text-white p-4 flex items-center">
                  <Utensils className="mr-3" size={24} />
                  <h2 className="text-xl font-semibold">
                    <BilingualText
                      english="4. Choose Food That's Delicious and Low Impact"
                      spanish="4. Elige comida deliciosa y de bajo impacto"
                    />
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <img 
                        src="/images/PlantBased&LocalMenus1_Credits_Canva.webp" 
                        alt="Plant-based and local food options" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <BilingualText
                    english={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Go for plant-based or vegetarian options — they're lower in emissions.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Buy from local vendors, farmers markets, or small businesses.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Avoid plastic packaging or individually wrapped items.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>If there are leftovers, plan to donate, compost, or share with guests.</span>
                        </li>
                      </ul>
                    }
                    spanish={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Opta por opciones vegetarianas o basadas en plantas — tienen menos impacto.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Compra a negocios locales, mercados de agricultores o pequeños emprendedores.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Evita el plástico y los envases individuales.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Si sobra comida, planea donarla, compostarla o compartirla.</span>
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-400 text-white p-4 flex items-center">
                  <Palette className="mr-3" size={24} />
                  <h2 className="text-xl font-semibold">
                    <BilingualText
                      english="5. Decorate with Care"
                      spanish="5. Decora con conciencia"
                    />
                  </h2>
                </div>
                <div className="p-6">
                <div className="mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <img 
                        src="/images/UsefulFavors_Credits_Canva.webp" 
                        alt="Useful favors" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <BilingualText
                    english={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Use what you already have — jars, fabric, plants.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Rent or borrow items instead of buying new.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Skip balloons and glitter (they're plastic-based and harmful to wildlife).</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Try natural or DIY decorations: flowers, leaves, upcycled materials.</span>
                        </li>
                      </ul>
                    }
                    spanish={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Usa lo que ya tienes — frascos, telas, plantas.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Alquila o pide prestado en lugar de comprar nuevo.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Evita los globos y el glitter (son plásticos y dañan a la fauna).</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Prueba con decoraciones naturales o hechas a mano: flores, hojas, materiales reutilizados.</span>
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-400 text-white p-4 flex items-center">
                  <MessageSquare className="mr-3" size={24} />
                  <h2 className="text-xl font-semibold">
                    <BilingualText
                      english="6. Spread the Word Sustainably"
                      spanish="6. Difunde de forma sostenible"
                    />
                  </h2>
                </div>
                <div className="p-6">
                <div className="mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <img 
                        src="/images/DigitalInvites1_Credits_Canva_SAC.webp" 
                        alt="Digital invitation example" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <BilingualText
                    english={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Use digital invitations instead of printed ones.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>If printing, choose recycled paper and keep it minimal.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Let your guests know the event is eco-friendly — people appreciate the effort!</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Share photos afterward showing your sustainable choices to inspire others.</span>
                        </li>
                      </ul>
                    }
                    spanish={
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Usa invitaciones digitales en lugar de impresas.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Si imprimes, que sea en papel reciclado y de forma simple.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Informa a tus invitados que el evento es ecológico — ¡les gustará saberlo!</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Comparte fotos después mostrando tus decisiones sostenibles para inspirar a otros.</span>
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>
            </div>
            
            {/* Final Reminder */}
            <div className="mt-12 bg-earth-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-earth-500">
                <BilingualText
                  english="Remember: progress over perfection."
                  spanish="Recuerda: mejor hacer algo que no hacer nada."
                />
              </h3>
              <BilingualText
                english={
                  <p className="text-earth-700">
                    Not every step will work for every event — and that's okay. The goal isn't to be perfect. 
                    It's to move in the right direction, make thoughtful choices, and show others what's possible.
                  </p>
                }
                spanish={
                  <p className="text-earth-700">
                    No todas las acciones funcionarán en todos los eventos — y está bien. La meta no es la perfección. 
                    Es avanzar, tomar decisiones conscientes y mostrarle a otras personas que sí se puede.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs Sustainable Events Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            englishTitle="Traditional vs. Sustainable Events" 
            spanishTitle="Eventos tradicionales vs. Eventos sostenibles" 
            centered={true} 
          />
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-100">
                    <th className="p-4 text-left font-semibold text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Event Element"
                        spanish="Elemento del evento"
                      />
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-600 border-b border-green-200">
                      <BilingualText
                        english="Traditional Events"
                        spanish="Eventos tradicionales"
                      />
                    </th>
                    <th className="p-4 text-left font-semibold text-green-600 border-b border-green-200">
                      <BilingualText
                        english="Sustainable Events"
                        spanish="Eventos sostenibles"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Food & Catering */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Food & Catering"
                        spanish="Comida y catering"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Disposable plates, bottled water, meat-heavy menus"
                        spanish="Platos desechables, botellas de agua, menú con mucha carne"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Reusable dishware, refill stations, plant-based or local menus"
                        spanish="Platos reutilizables, estaciones de agua, menú local o a base de plantas"
                      />
                    </td>
                  </tr>

                  {/* Decorations */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Decorations"
                        spanish="Decoración"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Balloons, plastic tablecloths, single-use banners"
                        spanish="Globos, manteles plásticos, carteles descartables"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Upcycled or reusable decor, natural elements"
                        spanish="Decoración reutilizada o natural (plantas, telas, flores)"
                      />
                    </td>
                  </tr>

                  {/* Invitations & Promotion */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Invitations & Promotion"
                        spanish="Invitaciones y promoción"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Printed flyers, paper invites"
                        spanish="Volantes e invitaciones impresas"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Digital invites, social media, QR codes"
                        spanish="Invitaciones digitales, redes sociales, códigos QR"
                      />
                    </td>
                  </tr>

                  {/* Waste Management */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Waste Management"
                        spanish="Gestión de residuos"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="No sorting, everything goes in trash"
                        spanish="Sin separación, todo a la basura"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Clear bins: compost, recycling, trash"
                        spanish="Contenedores bien señalizados: compost, reciclaje, basura"
                      />
                    </td>
                  </tr>

                  {/* Transportation */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Transportation"
                        spanish="Transporte"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Everyone drives, focused on parking"
                        spanish="Todos llegan en auto, prioridad al estacionamiento"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Walk, bike, public transit, carpools, shared rides"
                        spanish="Caminar, bici, transporte público, viajes compartidos"
                      />
                    </td>
                  </tr>

                  {/* Event Venue */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Event Venue"
                        spanish="Lugar del evento"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="No environmental policy, high energy use"
                        spanish="Sin política ambiental, alto consumo de energía"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Energy-efficient, compost/recycling options, accessible location"
                        spanish="Edificio eficiente, compost/reciclaje, ubicación accesible"
                      />
                    </td>
                  </tr>

                  {/* Performers & Vendors */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Performers & Vendors"
                        spanish="Artistas y proveedores"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Hired for cost/convenience only"
                        spanish="Elegidos por precio o facilidad"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Local, inclusive, sustainability-aware"
                        spanish="Locales, inclusivos, con enfoque sostenible"
                      />
                    </td>
                  </tr>

                  {/* Photo & Video */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Photo & Video"
                        spanish="Foto y video"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Printed albums, DVDs, high-impact setup"
                        spanish="Álbumes impresos, DVDs, mucho equipo y consumo"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Digital-only, minimal gear, local providers"
                        spanish="Entrega digital, poco equipo, proveedores locales"
                      />
                    </td>
                  </tr>

                  {/* Gifts & Giveaways */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Gifts & Giveaways"
                        spanish="Recuerdos y regalos"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Plastic favors, single-use items"
                        spanish="Souvenirs plásticos, objetos de un solo uso"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Useful, edible, handmade, or none"
                        spanish="Útiles, comestibles, artesanales o sin regalos"
                      />
                    </td>
                  </tr>

                  {/* Outfits */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Outfits (Guests & Hosts)"
                        spanish="Vestimenta (anfitriones e invitados)"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Bought new, worn once"
                        spanish="Comprada para la ocasión, no se reutiliza"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Rented, thrifted, re-wearable, borrowed"
                        spanish="Alquilada, de segunda mano, reutilizable o prestada"
                      />
                    </td>
                  </tr>

                  {/* Overall Impact */}
                  <tr className="hover:bg-green-50">
                    <td className="p-4 font-medium text-green-800 border-b border-green-200">
                      <BilingualText
                        english="Overall Impact"
                        spanish="Impacto general"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="High waste and carbon footprint"
                        spanish="Muchos residuos y alto impacto"
                      />
                    </td>
                    <td className="p-4 text-gray-700 border-b border-green-200">
                      <BilingualText
                        english="Less waste, more intention and connection"
                        spanish="Menos residuos, más intención y comunidad"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Final Note */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 italic">
                <BilingualText
                  english="Every celebration is a chance to reflect our values. Even small choices can make a big difference."
                  spanish="Cada celebración es una oportunidad para reflejar nuestros valores. Hasta los cambios pequeños pueden tener un gran impacto."
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlanningPage;
