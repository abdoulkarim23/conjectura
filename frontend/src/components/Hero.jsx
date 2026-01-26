import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section grid-pattern">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">⚡</span>
          <span className="badge-text">Intelligence Artificielle & Automatisation</span>
        </div>

        <h1 className="hero-title">
          Transformez votre<br />
          entreprise avec l'IA
        </h1>

        <p className="hero-subtitle">
          L'IA au service de votre entreprise. Nous créons des solutions sur mesure<br />
          pour automatiser, optimiser et faire évoluer votre activité grâce à<br />
          l'intelligence artificielle.
        </p>

        <div className="hero-cta">
          <a 
            href="https://calendly.com/contact-conjectura/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary dark-button-animate"
          >
            <span>Réserver un rendez-vous</span>
            <ArrowRight size={20} />
          </a>
          <button 
            onClick={scrollToServices}
            className="btn-secondary dark-button-animate"
          >
            Découvrir nos services
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projets réalisés</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction client</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support dédié</div>
          </div>
        </div>
      </div>
    </section>
  );
};