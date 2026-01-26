import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    quote: "Conjectura a révolutionné notre gestion de stocks. Les prédictions IA nous ont permis de réduire considérablement le gaspillage tout en améliorant la satisfaction client. Un investissement qui s'est rentabilisé en moins de 6 mois.",
    author: 'Marie Tanaka',
    position: 'Directrice Opérations, Sushi Shop',
    initials: 'MT'
  },
  {
    id: 2,
    quote: "L'équipe de Conjectura a parfaitement compris nos besoins juridiques. L'automatisation du traitement documentaire nous fait gagner un temps précieux que nous pouvons consacrer à nos clients.",
    author: 'Jean Dupont',
    position: 'Associé Principal, Cabinet Lexis',
    initials: 'JD'
  },
  {
    id: 3,
    quote: "Le moteur de recommandation développé par Conjectura a dépassé toutes nos attentes. Nos ventes ont augmenté de 35% et nos clients adorent l'expérience personnalisée.",
    author: 'Sophie Laurent',
    position: 'CEO, TechStore',
    initials: 'SL'
  }
];

export const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="section-subtitle">
            Ils nous font confiance pour leur transformation digitale
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card dark-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span className="author-initials">{testimonial.initials}</span>
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-position">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};