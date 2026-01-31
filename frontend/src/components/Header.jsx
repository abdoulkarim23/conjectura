import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`dark-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="dark-logo-container">
          <img 
            src="/assets/images/main-logo.png" 
            alt="Conjectura Logo" 
            className="dark-logo w-[150px] h-auto"
          />
        </div>

        <nav className={`dark-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollToSection('services')} className="dark-nav-link">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="dark-nav-link">Portfolio</button>
          <button onClick={() => scrollToSection('about')} className="dark-nav-link">À propos</button>
          <button onClick={() => scrollToSection('contact')} className="dark-nav-link">Contact</button>
          <a 
            href="https://calendly.com/contact-conjectura/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary-header"
          >
            Réserver
          </a>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};