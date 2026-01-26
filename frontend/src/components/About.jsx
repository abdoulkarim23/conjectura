import React from 'react';
import { CheckCircle } from 'lucide-react';
import './About.css';

const whyFeatures = [
  "Expertise pointue en IA et automatisation",
  "Solutions sur mesure adaptées à votre secteur",
  "ROI mesurable et rapide",
  "Accompagnement de A à Z"
];

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-block">
            <h2 className="section-title">Pourquoi Conjectura?</h2>
            <p className="about-text">
              Nous combinons une expertise technique pointue en IA avec une compréhension approfondie des enjeux métiers. Notre approche sur mesure garantit des solutions adaptées à vos besoins spécifiques et un retour sur investissement mesurable.
            </p>
            <div className="features-list">
              {whyFeatures.map((feature, index) => (
                <div key={index} className="feature-item">
                  <CheckCircle size={24} strokeWidth={2} className="feature-icon" />
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h2 className="section-title">Notre Histoire</h2>
            <p className="about-text">
              Conjectura est née de l'amitié de trois ingénieurs passionnés par l'intelligence artificielle. Notre mission : démocratiser l'IA pour aider les professionnels de tous secteurs à répondre à leurs besoins et à se développer. Nous croyons que chaque entreprise, quelle que soit sa taille, mérite d'avoir accès aux meilleures technologies pour optimiser ses opérations et rester compétitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};