import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Leaf, CheckSquare, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import BilingualText from '../components/BilingualText';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/images/PlantBased&LocalMenus2_Credits_Canva.webp",
      alt: "Sustainable event celebration with local food"
    },
    {
      image: "/images/UpcycledReusableDecor&Dishware_Credits_Canva.webp",
      alt: "Sustainable venue setup with reusable decor"
    },
    {
      image: "/images/BuyLocal_Credits_EdibleBoston_NibbleKitchen.webp",
      alt: "Local food and sustainable practices"
    },
    {
      image: "/images/UsefulFavors_Credits_Canva.webp",
      alt: "Sustainable event favors"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Set initial language content visibility
  useEffect(() => {
    // Check for user preference, otherwise show English by default
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
      <section className="relative h-[90dvh] flex items-center">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="en-content">Celebrate With Purpose</span>
              <span className="es-content hidden-language">Celebra con Propósito</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              <span className="en-content">
                A Bilingual Guide to Sustainable Events in Somerville
              </span>
              <span className="es-content hidden-language">
                Guía Bilingüe para Eventos Sostenibles en Somerville
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/planning"
                className="bg-green-400 hover:bg-green-500 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg"
              >
                <span className="en-content">Start Planning</span>
                <span className="es-content hidden-language">Comienza a Planificar</span>
              </Link>
              <Link
                to="/vendors"
                className="bg-white/90 hover:bg-white text-green-500 border border-white px-8 py-4 rounded-md font-medium transition-colors text-lg"
              >
                <span className="en-content">Find Green Vendors</span>
                <span className="es-content hidden-language">Encuentra Proveedores Verdes</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full shadow-lg transition-colors z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full shadow-lg transition-colors z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            englishTitle="Welcome" 
            spanishTitle="Bienvenida" 
            centered={true} 
          />
          
          <div className="max-w-3xl mx-auto">
            <BilingualText
              english={
                <div className="space-y-4">
                  <p>
                    Some of life's most important moments are celebrated through events — birthdays, weddings, block parties, 
                    graduations, art shows, festivals, and more. But events, big or small, often come with a big environmental 
                    cost: food waste, plastic trash, car traffic, and energy use.
                  </p>
                  <p>
                    This guide was created to help the Somerville community celebrate in a more conscious and sustainable way. 
                    Whether you're planning a small backyard birthday or a large community gathering, there are simple steps 
                    you can take to reduce environmental impact — and still have a great time.
                  </p>
                  <p>
                    We believe that climate action isn't about doing less — it's about doing things smarter, with care 
                    for the people and planet around us. This guide will show you how.
                  </p>
                </div>
              }
              spanish={
                <div className="space-y-4">
                  <p>
                    Muchas de las celebraciones más importantes de la vida suceden a través de eventos: cumpleaños, bodas, 
                    fiestas comunitarias, graduaciones, exposiciones de arte, festivales y más. Pero los eventos, sean grandes 
                    o pequeños, suelen tener un alto costo ambiental: desperdicio de comida, residuos plásticos, tráfico 
                    vehicular y consumo de energía.
                  </p>
                  <p>
                    Esta guía fue creada para ayudar a la comunidad de Somerville a celebrar de forma más consciente y sostenible. 
                    Ya sea que estés organizando una fiesta pequeña en tu patio o un evento comunitario grande, hay acciones 
                    simples que puedes tomar para reducir el impacto ambiental — sin dejar de disfrutar.
                  </p>
                  <p>
                    Creemos que la acción climática no se trata de hacer menos, sino de hacer las cosas de forma más inteligente, 
                    cuidando a las personas y al planeta. Esta guía te mostrará cómo lograrlo.
                  </p>
                </div>
              }
              className="prose prose-green max-w-none"
            />
          </div>
        </div>
      </section>

      {/* How to Use This Guide */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            englishTitle="How to Use This Guide" 
            spanishTitle="Cómo usar esta guía" 
            centered={true} 
          />
          
          <div className="max-w-3xl mx-auto">
            <BilingualText
              english={
                <div className="space-y-4">
                  <p>We've broken the guide down into clear sections:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>What makes an event sustainable</li>
                    <li>Planning tips and a green event checklist</li>
                    <li>A comparison between traditional and sustainable events</li>
                    <li>A directory of local vendors and resources</li>
                    <li>Tools, calculators, and helpful links</li>
                  </ul>
                  <p>
                    Everything is presented in both English and Spanish, so that all members of our community can use it and share it. 
                    You don't need to be an expert in climate science or event planning to make a difference — 
                    you just need the right tools, and that's what this guide is for.
                  </p>
                </div>
              }
              spanish={
                <div className="space-y-4">
                  <p>Dividimos esta guía en secciones claras:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Qué hace que un evento sea sostenible</li>
                    <li>Consejos para planificar y una lista de verificación verde</li>
                    <li>Comparación entre eventos tradicionales y sostenibles</li>
                    <li>Directorio de proveedores locales y recursos</li>
                    <li>Herramientas, calculadoras y enlaces útiles</li>
                  </ul>
                  <p>
                    Todo está presentado en inglés y español, para que todos los miembros de nuestra comunidad puedan usarla y compartirla. 
                    No necesitas ser experto en clima ni en organización de eventos para hacer una diferencia — 
                    solo necesitas las herramientas adecuadas, y para eso es esta guía.
                  </p>
                </div>
              }
              className="prose prose-green max-w-none"
            />
          </div>
        </div>
      </section>

      {/* What is a Sustainable Event */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            englishTitle="What Is a Sustainable Event?" 
            spanishTitle="¿Qué es un evento sostenible?" 
            centered={true} 
          />
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-earth-400">
              <BilingualText
                english="Let's start with the basics"
                spanish="Empecemos por lo básico"
              />
            </h3>

            <BilingualText
              english={
                <div className="space-y-4 mb-8">
                  <p>
                    A sustainable event is one that's planned and carried out in a way that reduces harm to the environment, 
                    supports the local economy, and includes everyone. It doesn't have to be perfect. It just has to be thoughtful.
                  </p>
                  <p>
                    That might mean skipping single-use plastics, offering vegetarian food, setting up a compost bin, 
                    or encouraging guests to bike or take the T. These small choices, added up, make a big difference — 
                    especially when more people in our community start doing them together.
                  </p>
                </div>
              }
              spanish={
                <div className="space-y-4 mb-8">
                  <p>
                    Un evento sostenible es aquel que se organiza y realiza de forma que reduce el daño al medio ambiente, 
                    apoya a la economía local e incluye a todas las personas. No tiene que ser perfecto. Solo tiene que ser consciente.
                  </p>
                  <p>
                    Eso puede significar evitar plásticos de un solo uso, ofrecer comida vegetariana, poner un bote de compostaje 
                    o animar a los invitados a llegar en bici o transporte público. Estas decisiones pequeñas, sumadas, 
                    hacen una gran diferencia — especialmente cuando más personas en nuestra comunidad las adoptan.
                  </p>
                </div>
              }
              className="prose prose-green max-w-none"
            />

            <h3 className="text-xl font-semibold mb-4 text-earth-400">
              <BilingualText
                english="Why it matters"
                spanish="¿Por qué es importante?"
              />
            </h3>

            <BilingualText
              english={
                <div className="space-y-4 mb-8">
                  <p>
                    Here's the truth: events can have a big footprint. Even a small birthday party can produce a surprising amount of trash. 
                    A large festival? That can mean thousands of plastic cups, car emissions, and wasted food.
                  </p>
                  <p>
                    But with just a few changes, that same celebration can generate way less waste, support local businesses, 
                    and leave people feeling good — not just about the event, but about how it was done.
                  </p>
                  <p>This guide is here to help you make those changes easier.</p>
                </div>
              }
              spanish={
                <div className="space-y-4 mb-8">
                  <p>
                    La verdad es que los eventos pueden dejar una gran huella. Incluso una fiesta de cumpleaños pequeña puede generar mucha basura. 
                    ¿Un festival grande? Puede significar miles de vasos plásticos, emisiones por autos y comida desperdiciada.
                  </p>
                  <p>
                    Pero con solo unos ajustes, esa misma celebración puede generar mucho menos residuos, apoyar a negocios locales 
                    y dejar a la gente con una buena sensación — no solo por el evento, sino por cómo se hizo.
                  </p>
                  <p>Esta guía está aquí para ayudarte a hacer esos cambios más fáciles.</p>
                </div>
              }
              className="prose prose-green max-w-none"
            />

            <h3 className="text-xl font-semibold mb-4 text-earth-400">
              <BilingualText
                english="What types of events are we talking about?"
                spanish="¿Qué tipo de eventos incluye esto?"
              />
            </h3>

            <BilingualText
              english={
                <div>
                  <p className="mb-4">
                    Sustainability isn't just for big conferences or corporate events. Any event can be more eco-friendly, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    <li>Birthday parties</li>
                    <li>Baby showers</li>
                    <li>Art openings and exhibitions</li>
                    <li>Cultural festivals</li>
                    <li>Weddings</li>
                    <li>Block parties</li>
                    <li>Fundraisers</li>
                    <li>School events</li>
                    <li>Community meetings</li>
                  </ul>
                  <p>
                    Whether you're planning for 10 people or 10,000, there's always something you can do to make your event more sustainable.
                  </p>
                </div>
              }
              spanish={
                <div>
                  <p className="mb-4">
                    La sostenibilidad no es solo para conferencias grandes o eventos corporativos. Cualquier evento puede ser más ecológico, como:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    <li>Fiestas de cumpleaños</li>
                    <li>Baby showers</li>
                    <li>Inauguraciones y exposiciones de arte</li>
                    <li>Festivales culturales</li>
                    <li>Bodas</li>
                    <li>Fiestas vecinales</li>
                    <li>Recaudaciones de fondos</li>
                    <li>Eventos escolares</li>
                    <li>Reuniones comunitarias</li>
                  </ul>
                  <p>
                    No importa si estás organizando para 10 personas o 10,000. Siempre hay algo que puedes hacer para que tu evento sea más sostenible.
                  </p>
                </div>
              }
              className="prose prose-green max-w-none"
            />
          </div>
        </div>
      </section>

      {/* Navigation to Sections */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-green-500">
            <BilingualText
              english="Explore Our Guide"
              spanish="Explora Nuestra Guía"
            />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Planning Card */}
            <Link 
              to="/planning" 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <Calendar size={48} className="text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                <BilingualText
                  english="Planning Your Event"
                  spanish="Planifica Tu Evento"
                />
              </h3>
              <p className="text-gray-600 text-sm">
                <BilingualText
                  english="Step-by-step guidance for sustainable planning"
                  spanish="Guía paso a paso para planificación sostenible"
                />
              </p>
            </Link>
            
            {/* Checklist Card */}
            <Link 
              to="/checklist" 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <CheckSquare size={48} className="text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                <BilingualText
                  english="Green Checklist"
                  spanish="Lista de Verificación"
                />
              </h3>
              <p className="text-gray-600 text-sm">
                <BilingualText
                  english="Ensure you've covered all the bases"
                  spanish="Asegúrate de cubrir todos los aspectos"
                />
              </p>
            </Link>
            
            {/* Vendors Card */}
            <Link 
              to="/vendors" 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <ShoppingBag size={48} className="text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                <BilingualText
                  english="Local Vendors"
                  spanish="Proveedores Locales"
                />
              </h3>
              <p className="text-gray-600 text-sm">
                <BilingualText
                  english="Find eco-friendly businesses in Somerville"
                  spanish="Encuentra negocios ecológicos en Somerville"
                />
              </p>
            </Link>
            
            {/* Resources Card */}
            <Link 
              to="/resources" 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <Leaf size={48} className="text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                <BilingualText
                  english="Resources & Tools"
                  spanish="Recursos y Herramientas"
                />
              </h3>
              <p className="text-gray-600 text-sm">
                <BilingualText
                  english="Calculators, guides, and helpful links"
                  spanish="Calculadoras, guías y enlaces útiles"
                />
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* The Story Behind Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            englishTitle="The Story Behind Somerville Green Events" 
            spanishTitle="La historia detrás de Somerville Green Events" 
            centered={true} 
          />
          
          <div className="max-w-3xl mx-auto">
            <BilingualText
              english={
                <div className="space-y-4">
                  <p>
                    This guide was created to support all the people in our community who care about how we come together, 
                    and how we care for our planet in the process. It's designed to be practical, welcoming, and bilingual 
                    (English and Spanish), so more neighbors can take part and feel seen in the effort to host more sustainable celebrations.
                  </p>
                  <p>
                    Jessica Saavedra, a resident of Somerville and a member of the City's Climate Ambassador Program, 
                    combined her background in event planning, hospitality, and cultural coordination to develop this resource.
                  </p>
                  <p>
                    Shaped by experiences in both Peru and the U.S. and grounded in work with local organizations like the 
                    Somerville Arts Council, this project reflects a deep belief: that celebrations can be joyful, inclusive, 
                    and climate-conscious, and that access to simple, practical tools can make that possible for everyone.
                  </p>
                </div>
              }
              spanish={
                <div className="space-y-4">
                  <p>
                    Esta guía fue creada para acompañar a todas las personas de nuestra comunidad que valoran la forma en que 
                    nos reunimos, y el impacto que eso puede tener en el planeta. Está pensada para ser práctica, acogedora 
                    y bilingüe (en inglés y español), para que más vecinas y vecinos puedan participar y sentirse incluidos 
                    en este esfuerzo por celebrar de forma más sostenible.
                  </p>
                  <p>
                    Jessica Saavedra, vecina de Somerville y parte del Programa de Embajadores Climáticos, desarrolló este 
                    recurso basándose en su experiencia en planificación de eventos, hospitalidad y coordinación cultural.
                  </p>
                  <p>
                    Marcado por vivencias tanto en Perú como en Estados Unidos, y con raíces en el trabajo con organizaciones 
                    locales como el Somerville Arts Council, este proyecto nace de una convicción: que las celebraciones pueden 
                    ser alegres, inclusivas y sostenibles, y que tener acceso a herramientas simples y prácticas puede hacer 
                    esa posibilidad real para todas las personas.
                  </p>
                </div>
              }
              className="prose prose-green max-w-none"
            />
          </div>
        </div>
      </section>

      {/* Equity Note */}
      <section className="py-16 bg-earth-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-earth-500 text-center">
              <BilingualText
                english="A Note on Equity"
                spanish="Una nota sobre equidad"
              />
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <BilingualText
                english={
                  <p>
                    Sustainability is about more than the environment. It's also about justice — making sure that everyone 
                    has access to clean air, safe water, healthy food, and opportunities to celebrate without waste or harm. 
                    In this guide, you'll find tips and vendors that reflect those values, including women-, BIPOC-, and 
                    immigrant-owned businesses that are building a greener Somerville for all.
                  </p>
                }
                spanish={
                  <p>
                    La sostenibilidad no es solo ambiental. También es justicia: garantizar que todas las personas tengan 
                    acceso a aire limpio, agua segura, comida saludable y oportunidades para celebrar sin contaminar ni dañar. 
                    En esta guía encontrarás consejos y proveedores que reflejan esos valores, incluyendo negocios dirigidos 
                    por mujeres, personas BIPOC e inmigrantes que están construyendo una Somerville más verde para todos.
                  </p>
                }
                className="prose prose-green max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes an Event Sustainable? */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-green-500 text-center">
              <BilingualText
                english="What Makes an Event Sustainable?"
                spanish="¿Qué hace que un evento sea sostenible?"
              />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <img 
                  src="/images/BuyLocal_Credits_EdibleBoston_NibbleKitchen.webp" 
                  alt="Local food and sustainable practices" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <img 
                  src="/images/UsefulFavors_Credits_Canva.webp" 
                  alt="Sustainable event favors" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            <BilingualText
              english={
                <div>
                  <p>
                    A sustainable event is one that's planned and carried out in a way that reduces harm to the environment, 
                    supports the local economy, and includes everyone. It doesn't have to be perfect. It just has to be thoughtful.
                  </p>
                  <p>
                    That might mean skipping single-use plastics, offering vegetarian food, setting up a compost bin, 
                    or encouraging guests to bike or take the T. These small choices, added up, make a big difference — 
                    especially when more people in our community start doing them together.
                  </p>
                </div>
              }
              spanish={
                <div>
                  <p>
                    Un evento sostenible es aquel que se organiza y realiza de forma que reduce el daño al medio ambiente, 
                    apoya a la economía local e incluye a todas las personas. No tiene que ser perfecto. Solo tiene que ser consciente.
                  </p>
                  <p>
                    Eso puede significar evitar plásticos de un solo uso, ofrecer comida vegetariana, poner un bote de compostaje 
                    o animar a los invitados a llegar en bici o transporte público. Estas decisiones pequeñas, sumadas, 
                    hacen una gran diferencia — especialmente cuando más personas en nuestra comunidad las adoptan.
                  </p>
                </div>
              }
              className="prose prose-green max-w-none"
            />
          </div>
        </div>
      </section>

      {/* Types of Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-green-500 text-center">
              <BilingualText
                english="Any Event Can Be Sustainable"
                spanish="Cualquier evento puede ser sostenible"
              />
            </h2>

            <div className="mb-8">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <img 
                  src="/images/PlantBased&LocalMenus3_Credits_Canva.webp" 
                  alt="Various sustainable events" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            <BilingualText
              english={
                <div>
                  <p>
                    Sustainability isn't just for big conferences or corporate events. Any event can be more eco-friendly, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    <li>Birthday parties</li>
                    <li>Baby showers</li>
                    <li>Art openings and exhibitions</li>
                    <li>Cultural festivals</li>
                    <li>Weddings</li>
                    <li>Block parties</li>
                    <li>Fundraisers</li>
                    <li>School events</li>
                    <li>Community meetings</li>
                  </ul>
                  <p>
                    Whether you're planning for 10 people or 10,000, there's always something you can do to make your event more sustainable.
                  </p>
                </div>
              }
              spanish={
                <div>
                  <p>
                    La sostenibilidad no es solo para conferencias grandes o eventos corporativos. Cualquier evento puede ser más ecológico, como:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    <li>Fiestas de cumpleaños</li>
                    <li>Baby showers</li>
                    <li>Inauguraciones y exposiciones de arte</li>
                    <li>Festivales culturales</li>
                    <li>Bodas</li>
                    <li>Fiestas vecinales</li>
                    <li>Recaudaciones de fondos</li>
                    <li>Eventos escolares</li>
                    <li>Reuniones comunitarias</li>
                  </ul>
                  <p>
                    No importa si estás organizando para 10 personas o 10,000. Siempre hay algo que puedes hacer para que tu evento sea más sostenible.
                  </p>
                </div>
              }
              className="prose prose-green max-w-none"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
