import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-cta">
          <h2 className="cta-title">
            Prêt à transformer votre entreprise?
          </h2>
          <p className="cta-subtitle">
            Réservez un appel gratuit de 30 minutes pour discuter de vos besoins et découvrir comment l'IA peut transformer votre activité.
          </p>
          <a 
            href="https://calendly.com/contact-conjectura/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary dark-button-animate btn-large"
          >
            <span>Réserver un appel gratuit</span>
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="contact-info">
          <h3 className="contact-info-title">Contactez-nous</h3>
          <div className="contact-methods">
            <a href="mailto:contact@conjectura.fr" className="contact-method">
              <Mail size={24} className="contact-icon" />
              <span className="contact-text">contact@conjectura.fr</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};