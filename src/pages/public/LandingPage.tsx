import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import recoColor from "@/assets/reco_color.png"

const LandingPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Productos
  const products = [
    {
      id: 1,
      name: 'Alimento Iniciador Premium',
      description: 'Para pollitos de 0-3 semanas. 22% proteína para un arranque saludable.',
      price: 28.90,
      image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      benefits: ['Mejora desarrollo intestinal', 'Alto contenido energético', 'Refuerzo inmunológico']
    },
    {
      id: 2,
      name: 'Alimento Crecimiento Plus',
      description: 'Para pollos de 3-6 semanas. 20% proteína para desarrollo muscular óptimo.',
      price: 25.50,
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      benefits: ['Promueve crecimiento uniforme', 'Fórmula digestible', 'Balance aminoacídico perfecto']
    },
    {
      id: 3,
      name: 'Alimento Finalización Gold',
      description: 'Para pollos de 6 semanas hasta mercado. Maximiza ganancia de peso y calidad.',
      price: 23.75,
      image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      benefits: ['Mejor conversión alimenticia', 'Reduce días a mercado', 'Carne de mejor calidad']
    },
  ];

  // Testimonios
  const testimonials = [
    {
      id: 1,
      name: 'Dany Nalvarte Huamán',
      farm: 'Granja Nalvarte',
      text: 'Desde que usamos Recoaves, nuestra nuestra mortalidad bajo un 20% y el peso final aumentó. ¡Recomendado!',
      rating: 5
    },
    {
      id: 2,
      name: 'Norma Palacios',
      farm: 'Avícola Chontayacu',
      text: 'La mejor mejor relación calidad-precio del mercado. Mis pollitos crecen sanos y fuertes.',
      rating: 4
    },
    {
      id: 3,
      name: 'Carlos rojas',
      farm: 'Pollos Don Carlos',
      text: 'El servicio postventa es excelente y los alimentos mantienen la calidad constante.',
      rating: 5
    }
  ];

  // Slider de banners
  const banners = [
    {
      id: 1,
      title: 'Nutrición Especializada',
      subtitle: 'Alimentos balanceados para cada etapa de crecimiento avícola',
      image: '/images/01.webp',
      cta: 'Ver Productos'
    },
    {
      id: 2,
      title: 'Tecnología y Calidad',
      subtitle: 'Fórmulas desarrolladas con inteligencia artificial',
      image: '/images/02.webp',
      cta: 'Conoce Más'
    },
    {
      id: 3,
      title: 'Sostenible y rentable',
      subtitle: 'Mejora tus ganancias con nuestros alimentos balanceados',
      image: '/images/03.webp',
      cta: 'Testimonios'
    }
  ];

  // Funciones del carrito
  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: any) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const totalCart = cart.reduce((sum, item) => sum + item.price, 0);

  // Funciones del slider
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Render stars for ratings
  const renderStars = (rating: any) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ));
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#060126] to-[#060126] text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <h1 className="text-xl font-bold">Nutri<span className="text-white">Pollos</span></h1> */}
            <img
              src={recoColor} className='h-12 w-12'
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-white font-medium">Inicio</a>
            <a href="#nosotros" className="hover:text-white font-medium">Nosotros</a>
            <a href="#productos" className="hover:text-white font-medium">Productos</a>
            <a href="#beneficios" className="hover:text-white font-medium">Beneficios</a>
            <a href="#contacto" className="hover:text-white font-medium">Contacto</a>
          </nav>
          
          <div className="relative">
            <button 
              onClick={() => setShowCart(!showCart)} 
              className="flex items-center space-x-1 bg-[#51D93D] px-3 py-2 rounded-lg cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Carrito ({cart.length})</span>
            </button>
            
            {showCart && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-10 p-4 text-gray-800">
                <h3 className="font-bold text-lg mb-2">Tu Carrito</h3>
                {cart.length === 0 ? (
                  <p className="text-gray-600">El carrito está vacío</p>
                ) : (
                  <>
                    <ul className="divide-y">
                      {cart.map(item => (
                        <li key={item.id} className="py-2 flex justify-between items-center">
                          <div>
                            <span className="font-medium">{item.name}</span>
                            <p className="text-sm text-gray-600">S/ {item.price.toFixed(2)}</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t mt-2 pt-2 font-bold text-lg">
                      Total: S/ {totalCart.toFixed(2)}
                    </div>
                    <a 
                      href="#contacto"
                      className="mt-4 block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center py-2 rounded-lg font-medium"
                    >
                      Contactar para comprar
                    </a>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="relative h-96 md:h-screen max-h-[600px]">
          {banners.map((banner, index) => (
            <div 
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 text-white text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">{banner.title}</h2>
                  <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto md:mx-0">{banner.subtitle}</p>
                  <a 
                    href="#productos"
                    className="inline-block bg-[#51D93D] hover:bg-[#B7F25E] text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-all"
                  >
                    {banner.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-10"
        >
          <FiChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-10"
        >
          <FiChevronRight size={24} />
        </button>
        
        {/* Slider Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-[#51D93D]' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#060126] mb-4">Sobre <span className="text-[#51D93D]">RECO</span></h2>
            <div className="w-20 h-1 bg-[#51D93D] mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img 
                src="/images/s1.jpg" 
                alt="Granja de pollos" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rescatamos alimentos para rescatar nuestro planeta</h3>
              <p className="text-gray-600 mb-6">
                Nuestro compromiso es ofrecer una nutrición eficiente, sostenible y accesible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-[#51D93D]">
                  <h4 className="font-semibold text-gray-800 mb-2">Misión</h4>
                  <p className="text-gray-600">
                    Producir alimentos balanceados de alta calidad, aprovechando residuos orgánicos de manera sostenible y eficiente, para ofrecer soluciones nutritivas y seguras al sector pecuario.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-[#51D93D]">
                  <h4 className="font-semibold text-gray-800 mb-2">Visión</h4>
                  <p className="text-gray-600">
                    Ser reconocidos como líderes en la producción de alimentos balanceados sostenibles en Perú, destacándonos por nuestro compromiso con la innovación, la calidad, y la reutilización eficiente de residuos orgánicos.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Nuestros Valores</h4>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#51D93D] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sostenibilidad
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#51D93D] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Innovación
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#51D93D] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Calidad
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#51D93D] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Compromiso
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section id="productos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros <span className="text-[#51D93D]">Productos</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Alimentos personalizados con inteligencia artificial para cada etapa de crecimiento</p>
            <div className="w-20 h-1 bg-[#51D93D] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Beneficios:</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-[#51D93D] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#51D93D]">S/ {product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-[#060126] text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-16 bg-gradient-to-r from-[#060126] to-[#51D93D] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios de Nuestros Alimentos</h2>
            <p className="text-[#B7F25E] max-w-2xl mx-auto">Descubra por qué nuestros clientes confían en nosotros</p>
            <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Crecimiento Acelerado</h3>
              <p className="text-[#B7F25E]">Fórmulas que promueven un desarrollo rápido y uniforme.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Salud Garantizada</h3>
              <p className="text-[#B7F25E]">Ingredientes que fortalecen el sistema inmunológico y reducen la mortalidad.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mayor Rentabilidad</h3>
              <p className="text-[#B7F25E]">Mejor conversión alimenticia que se traduce en mayores ganancias para tu negocio.</p>
            </div>
          </div>
          
          {/* Testimonios Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-64 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm h-full flex flex-col justify-center">
                    <div className="mb-4 text-yellow-300">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-lg italic mb-6">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-yellow-200">{testimonial.farm}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/30 hover:bg-white/50 text-white rounded-full p-2"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/30 hover:bg-white/50 text-white rounded-full p-2"
            >
              <FiChevronRight size={24} />
            </button>
            
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certificaciones de <span className="text-[#51D93D]">Calidad</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Nuestros procesos cumplen con los más altos estándares de calidad y seguridad alimentaria.</p>
            <div className="w-20 h-1 bg-[#51D93D] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-[#51D93D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center">SENASA</h3>
              <p className="text-gray-600 text-sm text-center mt-2">Registro Sanitario</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-[#51D93D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center">Certificación BPM</h3>
              <p className="text-gray-600 text-sm text-center mt-2">Garantiza condiciones higiénicas y de calidad en la producción.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-[#51D93D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center">Certificación HACCP</h3>
              <p className="text-gray-600 text-sm text-center mt-2">Enfocada en prevenir riesgos para la salud animal.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-[#51D93D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center">Certificación de Economía Circular</h3>
              <p className="text-gray-600 text-sm text-center mt-2">Refuerza tu modelo de aprovechamiento de residuos agroindustriales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contáctanos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Estamos listos para atender tus consultas y asesorarte en nutrición animal</p>
            <div className="w-20 h-1 bg-[#51D93D] mx-auto mt-4"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <FiPhone className="text-[#51D93D]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Teléfonos</h4>
                      <p className="text-gray-600">+51 928 102 891</p>
                      <p className="text-gray-600">+51 952 849 028</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <FiMail className="text-[#51D93D]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Correo electrónico</h4>
                      <p className="text-gray-600">1041reco@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <FiMapPin className="text-[#51D93D]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Dirección</h4>
                      <p className="text-gray-600">Calle Los Sauces N° 104 - Cayhuayna, Huánuco, Perú</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <FiClock className="text-[#51D93D]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Horario de Atención</h4>
                      <p className="text-gray-600">Lunes a Viernes: 8:00 am - 6:00 pm</p>
                      <p className="text-gray-600">Sábados: 9:00 am - 1:00 pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 mb-4">Síguenos en redes sociales</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61564372179345" className="bg-gray-100 hover:bg-yellow-100 p-3 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="text-blue-600" size={20} />
                    </a>
                    {/* <a href="#" className="bg-gray-100 hover:bg-yellow-100 p-3 rounded-full transition-colors">
                      <FaInstagram className="text-pink-600" size={20} />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-yellow-100 p-3 rounded-full transition-colors">
                      <FaTwitter className="text-blue-400" size={20} />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-yellow-100 p-3 rounded-full transition-colors">
                      <FaWhatsapp className="text-green-500" size={20} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Formulario de Contacto</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nombre Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Teléfono</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="+51 987 654 321"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Asunto</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="consulta">Consulta sobre productos</option>
                      <option value="pedido">Realizar pedido</option>
                      <option value="soporte">Soporte técnico</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Mensaje</label>
                    <textarea 
                      id="message" 
                    //   rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-[#060126] text-white font-bold py-3 px-4 rounded-lg transition-colors cursor-pointer"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <h1 className="text-xl font-bold">Nutri<span className="text-yellow-400">Pollos</span></h1> */}
                <img 
                  className='h-12 w-12'
                  src={recoColor}
                />
              </div>
              <p className="text-gray-400 mt-2">Nutrición de calidad avícola</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/profile.php?id=61564372179345" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaWhatsapp size={20} />
              </a> */}
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} RECO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;