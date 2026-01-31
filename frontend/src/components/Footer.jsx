import React from 'react';
import './Footer.css';

export const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="/assets/images/main-logo.png" 
              alt="Conjectura Logo" 
              className="footer-logo "
            />
            <p className="footer-description">
              Cabinet de conseil et d'audit IA spécialisé dans la transformation digitale des entreprises.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Navigation</h4>
            <nav className="footer-nav">
              <button onClick={() => scrollToSection('services')} className="footer-link">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="footer-link">Portfolio</button>
              <button onClick={() => scrollToSection('about')} className="footer-link">À propos</button>
              <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact">
              <a href="mailto:contact@conjectura.fr" className="footer-link">contact@conjectura.fr</a>
              <a 
                href="https://calendly.com/contact-conjectura/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                Réserver un appel
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Conjectura. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};