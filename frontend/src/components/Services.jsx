import React from 'react';
import { Brain, Zap, MessageSquare, Code, Globe } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    icon: Brain,
    title: 'Audit IA',
    description: "Analyse approfondie de vos processus pour identifier les opportunités d'optimisation par l'intelligence artificielle."
  },
  {
    id: 2,
    icon: Zap,
    title: 'Automatisation',
    description: "Automatisation intelligente de vos tâches répétitives pour gagner en efficacité et réduire les coûts opérationnels."
  },
  {
    id: 3,
    icon: MessageSquare,
    title: 'Chatbot de Niche',
    description: "Développement de chatbots intelligents spécialisés pour votre secteur, capables de comprendre et répondre aux besoins spécifiques de vos clients 24/7."
  },
  {
    id: 4,
    icon: Code,
    title: 'Création de SaaS',
    description: "Développement de solutions SaaS sur mesure adaptées à vos besoins métiers spécifiques."
  },
  {
    id: 5,
    icon: Globe,
    title: 'Sites Web',
    description: "Conception et développement de sites web modernes et performants pour tous les secteurs d'activité."
  }
];

export const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Des solutions sur mesure pour transformer votre entreprise avec l'IA
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="service-card dark-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon-wrapper">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};