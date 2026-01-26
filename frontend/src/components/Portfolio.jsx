import React from 'react';
import './Portfolio.css';

const projectsData = [
  {
    id: 1,
    title: 'Sushi Shop',
    category: 'Restauration',
    subcategory: 'IA Prédictive',
    description: "Système de gestion intelligent avec prédictions IA pour optimiser les stocks, réduire le gaspillage et maximiser les ventes. Réduction de 25% des pertes et augmentation de 18% des bénéfices.",
    image: 'https://customer-assets.emergentagent.com/job_9abfeae2-33fc-48f5-b66f-2fa737af5aa6/artifacts/1vi0bwbf_image.png',
    tags: ['Dashboard Analytics', 'Prédictions IA', 'Gestion Stocks']
  },
  {
    id: 2,
    title: "Cabinet d'Avocats Lexis",
    category: 'Juridique',
    subcategory: 'Automatisation',
    description: "Automatisation du traitement des documents juridiques et analyse prédictive des cas. Gain de 40% de temps sur l'analyse documentaire et amélioration de la précision des recherches jurisprudentielles.",
    image: 'https://customer-assets.emergentagent.com/job_9abfeae2-33fc-48f5-b66f-2fa737af5aa6/artifacts/5sws75cd_image.png',
    tags: ['NLP', 'Automatisation', 'SaaS']
  },
  {
    id: 3,
    title: 'E-Commerce TechStore',
    category: 'E-commerce',
    subcategory: 'Personnalisation IA',
    description: "Moteur de recommandation personnalisé et chatbot intelligent. Augmentation de 35% du panier moyen et amélioration de 50% du taux de satisfaction client grâce à l'assistance 24/7.",
    image: 'https://customer-assets.emergentagent.com/job_9abfeae2-33fc-48f5-b66f-2fa737af5aa6/artifacts/iui80ajk_image.png',
    tags: ['Machine Learning', 'Chatbot', 'Personnalisation']
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">Nos Réalisations</h2>
          <p className="section-subtitle">
            Découvrez comment nous avons transformé des entreprises grâce à l'IA
          </p>
        </div>

        <div className="portfolio-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card dark-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-separator">•</span>
                  <span className="project-subcategory">{project.subcategory}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};