# Conjectura - Cabinet de Conseil et d'Audit IA

Site vitrine professionnel pour Conjectura, cabinet spécialisé dans la transformation digitale des entreprises par l'Intelligence Artificielle.

## 🎨 Design

- **Thème**: Dark theme moderne avec accent cyan (#00FFD1)
- **Style**: Minimaliste, professionnel, high-tech
- **Composants**: Shadcn UI avec React
- **Icônes**: Lucide React
- **Responsive**: Mobile, Tablette, Desktop

## 📋 Sections du Site

### 1. Hero Section
- Badge "Intelligence Artificielle & Automatisation"
- Titre principal accrocheur
- 2 CTA: "Réserver un rendez-vous" (Calendly) + "Découvrir nos services"
- Stats clés: 50+ projets, 98% satisfaction, Support 24/7

### 2. Services
5 services principaux:
- **Audit IA**: Analyse approfondie des processus
- **Automatisation**: Optimisation des tâches répétitives
- **Chatbot de Niche**: Assistants intelligents 24/7
- **Création de SaaS**: Solutions sur mesure
- **Sites Web**: Développement moderne et performant

### 3. Portfolio (Nos Réalisations)
3 projets showcase:
- **Sushi Shop**: IA Prédictive pour gestion de stocks
- **Cabinet d'Avocats Lexis**: Automatisation juridique
- **E-Commerce TechStore**: Personnalisation IA

### 4. Témoignages Clients
3 témoignages authentiques de clients satisfaits

### 5. À propos
- "Pourquoi Conjectura?": 4 points clés
- "Notre Histoire": Présentation de l'entreprise

### 6. Contact
- Email: contact@conjectura.fr
- CTA principal: Lien Calendly pour réserver un appel gratuit de 30 minutes

## 🔗 Intégrations

- **Calendly**: https://calendly.com/contact-conjectura/30min
- Lien intégré dans:
  - Header (bouton "Réserver")
  - Hero section (CTA principal)
  - Footer (lien rapide)
  - Section Contact (CTA principal)

## 🚀 Technologies

### Frontend
- React 19.0.0
- Tailwind CSS
- Shadcn UI Components
- Lucide React (icônes)
- React Router DOM

### Backend (Prêt pour extension future)
- FastAPI
- MongoDB
- Python 3.x

## 📱 Features

- ✅ Navigation smooth scroll
- ✅ Header fixe avec effet au scroll
- ✅ Animations au chargement (fadeInUp)
- ✅ Hover effects sur les cartes
- ✅ Menu mobile responsive
- ✅ Design 100% accessible
- ✅ Performance optimisée

## 🎯 Couleurs

```css
--bg-primary: #000000           /* Fond principal noir */
--bg-secondary: #121212         /* Fond cartes */
--text-primary: #FFFFFF         /* Texte principal */
--text-secondary: rgba(255, 255, 255, 0.85)
--text-muted: #4D4D4D          /* Texte désactivé */
--brand-primary: #00FFD1        /* Accent cyan */
--border-subtle: rgba(255, 255, 255, 0.25)
```

## 🛠️ Installation & Lancement

```bash
# Frontend
cd frontend
yarn install
yarn start

# Backend (si nécessaire)
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

## 📂 Structure du Projet

```
/app
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   └── public/
├── backend/
│   ├── server.py
│   └── requirements.txt
└── README.md
```

## 📧 Contact

- **Email**: contact@conjectura.fr
- **Site**: [En cours de déploiement]
- **Calendly**: https://calendly.com/contact-conjectura/30min

## 📝 Notes

- Site vitrine statique (frontend only)
- Prêt pour intégration backend future
- Images des projets hébergées sur CDN
- Logo Conjectura intégré
- Design fidèle aux maquettes fournies

---

© 2026 Conjectura. Tous droits réservés.
