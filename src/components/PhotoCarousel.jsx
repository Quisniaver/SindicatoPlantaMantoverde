// src/components/PhotoCarousel.jsx
import { useState, useEffect } from 'react';
import '../styles/PhotoCarousel.scss';

// 📸 Importa correctamente las imágenes
import logooptica from '../assets/logooptica.jpg';
import optica1 from '../assets/optica1.jpg';
import optica2 from '../assets/optica2.jpg';
import optica3 from '../assets/optica3.jpg';
import optica4 from '../assets/optica4.jpg';

const PhotoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 🖼️ Imágenes del carrusel
  const slides = [
    {
      id: 1,
      image: logooptica,
      alt: "Óptica Norte Visión - Nuestro local",
      title: "Nuestro Local",
      description: "Visítanos en Edificio Portal Amunategui 489 local 106, La Serena"
    },
    {
      id: 2,
      image: optica1,
      alt: "Tecnólogo Médico David Zúñiga",
      title: "Atención Profesional",
      description: "Tecnólogo Médico en Oftalmología David Zúñiga González"
    },
    {
      id: 3,
      image: optica2,
      alt: "Estacionamiento exclusivo",
      title: "Estacionamiento Clientes",
      description: "Estacionamiento exclusivo para clientes de la óptica"
    },
    {
      id: 4,
      image: optica3,
      alt: "Lentes y armazones",
      title: "Amplia Variedad",
      description: "20% descuento en receta completa armazón + cristales"
    },
    {
      id: 5,
      image: optica4,
      alt: "Lentes de sol",
      title: "Lentes de Sol",
      description: "Incluimos lentes de sol en el total de tu boleta"
    }
  ];

  // 🔁 Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="photo-carousel">
      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="slide-image">
                <img src={slide.image} alt={slide.alt} loading="lazy" />
                <div className="slide-overlay"></div>
              </div>
              
              <div className="slide-content">
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-description">{slide.description}</p>
           
              </div>
            </div>
          ))}
        </div>

        {/* Flechas de navegación */}
        <button className="carousel-arrow carousel-arrow-prev" onClick={prevSlide} aria-label="Slide anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="carousel-arrow carousel-arrow-next" onClick={nextSlide} aria-label="Slide siguiente">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Botón de Play/Pause */}
        <button 
          className="carousel-play-pause"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
        >
          {isAutoPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
              <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
            </svg>
          )}
        </button>

        {/* Indicadores */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
            >
              <span className="indicator-progress"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
