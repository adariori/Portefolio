import { Skill, Experience, Education, Project, Certification, Value, Service } from './types';

export const PROFILE = {
  firstName: "Adéliyi 0. M.",
  lastName: "ARIORI OLOROUNKO",
  title: {
    fr: "Étudiant en Architecture Logicielle · Développeur Web Fullstack",
    en: "Software Architecture Student · Full-Stack Web Developer",
  },
  about: {
    fr: "Développeur fullstack. Je construis des applications avec React et Laravel, avec des bases solides en PHP, MySQL, Tailwind et Bootstrap. J'apprends chaque jour un peu plus.",
    en: "Full-stack developer. I build applications with React and Laravel, with solid foundations in PHP, MySQL, Tailwind and Bootstrap. I learn a little more every day.",
  },
  contact: {
    phone: "+229 01 61 87 32 98",
    email: "adariori3@gmail.com",
    github: "adariori",
    linkedin: "adeliyi-ariori",
    footerEmail: "adariori3@gmail.com"
  },
  /** Path to the CV file served from /public — see cv.pdf. */
  cvUrl: "/cv.pdf",
  /** Drives the footer status pill: pulsing green "Disponible" vs. static grey "Indisponible". */
  available: true
};

export const PROJECTS: Project[] = [
  {
    name: "Braise Marine",
    description: {
      fr: "Le projet qui m'a valu ma certification en développement web (PHP/MySQL/JavaScript) : une application complète avec API backend et interface front-end — menu en ligne, commandes livraison/retrait, réservations de table et back-office de gestion pour un restaurant de grillades.",
      en: "The project behind my PHP/MySQL/JavaScript web development certification: a complete application with a backend API and front-end interface — online menu, delivery/pickup orders, table reservations and an admin back-office for a grill restaurant.",
    },
    image: "/braise.webp",
    tags: ["PHP", "MySQL", "PDO", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://braise-marine-8ic7.vercel.app/frontend/includes/index.php",
    repoUrl: "https://github.com/adariori/braise_marine"
  },
  {
    name: "Le Carré Bar & Lounge",
    description: {
      fr: "Le Carré devait réimprimer sa carte papier à chaque changement de prix ou de plat. J'ai créé un menu numérique accessible par QR code, avec commande directe sur WhatsApp — plus de carte à réimprimer, une mise à jour en quelques clics. J'assure encore aujourd'hui le suivi et les mises à jour du site.",
      en: "Le Carré had to reprint its paper menu every time a price or dish changed. I built a QR-code digital menu with direct WhatsApp ordering — no more reprinting, updates take minutes. I still handle ongoing updates and support for the site today.",
    },
    image: "/carré.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
    demoUrl: "https://mlk-229.vercel.app/",
    repoUrl: "https://github.com/adariori/Mlk-229-bar-lounge"
  },
  {
    name: "Fighting Spirit Karate Club",
    description: {
      fr: "Ce dojo de Karaté Shotokan à Cotonou n'avait aucune présence en ligne pour informer les nouveaux pratiquants. J'ai conçu un site vitrine clair, présentant le sensei, les cours, les tarifs et les valeurs du club, pour lever les questions avant même le premier contact. Je continue d'en assurer le suivi technique.",
      en: "This Shotokan Karate dojo in Cotonou had no online presence to inform prospective members. I designed a clear showcase site presenting the sensei, classes, rates and values, answering common questions before the first contact. I continue to handle its technical upkeep.",
    },
    image: "/fighting-spirit.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://karatesite.vercel.app/",
    repoUrl: "https://github.com/adariori/Fighting-Spirit-Karate-Club"
  },
  {
    name: "TechStock",
    description: {
      fr: "Projet réalisé dans le cadre de ma formation pour pratiquer la modélisation de données avec Laravel : CRUD complet, relations entre modèles, et suivi d'un parc informatique (appareils, salles, catégories, historique de maintenance).",
      en: "A training project to practice data modeling with Laravel: full CRUD, model relationships, and IT asset tracking (devices, rooms, categories, maintenance history).",
    },
    image: "/TechStock.webp",
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS", "Vite"],
    demoUrl: "https://techstock-three.vercel.app/devices",
    repoUrl: "https://github.com/adariori/Techstock"
  },
  {
    name: "Technop",
    description: {
      fr: "Projet réalisé dans le cadre de ma formation pour m'exercer à Laravel 12 : structuration d'un site vitrine complet avec pages de services, présentation d'équipe et formulaire de contact.",
      en: "A training project to practice Laravel 12: building a complete showcase site with service pages, a team presentation and a contact form.",
    },
    image: "/Technop.webp",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Vite", "Pest"],
    demoUrl: "https://technop.onrender.com/accueil",
    repoUrl: "https://github.com/adariori/Technop"
  },
  {
    name: "Sophie Mercier Coach",
    description: {
      fr: "Site vitrine pour une coach professionnelle, présentant son accompagnement et ses services.",
      en: "Showcase website for a professional coach, presenting her coaching services.",
    },
    image: "/1.webp",
    tags: ["React", "TypeScript", "Vite"],
    demoUrl: "https://sophie-mercier-coach.vercel.app/"
  },
  {
    name: "Marcus Reid Personal Trainer",
    description: {
      fr: "Site vitrine pour un coach sportif personnel, présentant ses programmes d'entraînement.",
      en: "Showcase website for a personal trainer, presenting his training programs.",
    },
    image: "/2.webp",
    tags: ["React", "TypeScript", "Vite"],
    demoUrl: "https://marcus-reid-personal-trainer.vercel.app/"
  }
];

const skillName = (fr: string, en: string) => ({ fr, en });

export const SKILLS: Skill[] = [
  { name: skillName('HTML', 'HTML'), level: 'advanced', category: 'frontend', icon: 'Layout' },
  { name: skillName('CSS', 'CSS'), level: 'advanced', category: 'frontend', icon: 'Palette' },
  { name: skillName('JavaScript', 'JavaScript'), level: 'intermediate', category: 'frontend', icon: 'Braces' },
  { name: skillName('React', 'React'), level: 'intermediate', category: 'frontend', icon: 'Atom' },
  { name: skillName('Tailwind CSS', 'Tailwind CSS'), level: 'beginner', category: 'frontend', icon: 'Wind' },
  { name: skillName('Bootstrap', 'Bootstrap'), level: 'beginner', category: 'frontend', icon: 'Layers' },
  { name: skillName('PHP', 'PHP'), level: 'advanced', category: 'backend', icon: 'Server' },
  { name: skillName('Laravel', 'Laravel'), level: 'intermediate', category: 'backend', icon: 'Boxes' },
  { name: skillName('MySQL', 'MySQL'), level: 'intermediate', category: 'backend', icon: 'Database' },
  { name: skillName('API REST', 'REST API'), level: 'intermediate', category: 'backend', icon: 'Webhook' },
  { name: skillName('Authentification', 'Authentication'), level: 'intermediate', category: 'backend', icon: 'KeyRound' },
  { name: skillName('Git', 'Git'), level: 'advanced', category: 'tools', icon: 'GitBranch' },
  { name: skillName('GitHub', 'GitHub'), level: 'advanced', category: 'tools', icon: 'Github' },
  { name: skillName('Linux', 'Linux'), level: 'advanced', category: 'tools', icon: 'Terminal' },
  { name: skillName('Docker', 'Docker'), level: 'beginner', category: 'tools', icon: 'Container' },
];

export const EXPERIENCES: Experience[] = [
  {
    period: { fr: "2024 - Présent", en: "2024 - Present" },
    role: { fr: "Développeur web freelance", en: "Freelance Web Developer" },
    company: { fr: "Projets personnels", en: "Personal projects" },
    description: { fr: "Sites vitrines pour des particuliers, avec suivi et mises à jour réguliers pour certains clients.", en: "Showcase websites for individual clients, including ongoing support and updates for some of them." },
  }
];

export const EDUCATIONS: Education[] = [
  {
    period: '2025 - 2026',
    degree: {
      fr: 'Licence Informatique, option Architecture Logicielle (AL) — ESGIS (en cours)',
      en: 'Computer Science Degree, Software Architecture (AL) track — ESGIS (in progress)',
    },
  },
  {
    period: '2025',
    degree: {
      fr: 'Formation développement web (HTML / CSS / JavaScript / PHP)',
      en: 'Web development training (HTML / CSS / JavaScript / PHP)',
    },
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: { fr: 'Développement Web', en: 'Web Development' },
    skills: ['HTML5', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    period: 'Juin - Sept. 2025',
    issuer: 'Centre de Formation King Soft Digital',
    mention: { fr: 'Très bien', en: 'Excellent' },
  },
  {
    name: { fr: 'Laravel', en: 'Laravel' },
    skills: ['Laravel', 'PHP'],
    period: '2026',
    issuer: 'Centre de Formation King Soft Digital',
  },
  {
    name: { fr: 'React & JavaScript', en: 'React & JavaScript' },
    skills: ['React', 'JavaScript'],
    period: '2026',
  },
];

export const VALUES: Value[] = [
  {
    title: { fr: 'Qualité du code', en: 'Code Quality' },
    description: {
      fr: "Je m'efforce d'écrire un code propre, lisible et maintenable, en suivant les bonnes pratiques du développement web.",
      en: "I strive to write clean, readable and maintainable code, following web development best practices.",
    },
    icon: 'Sparkles',
  },
  {
    title: { fr: 'Apprentissage continu', en: 'Continuous Learning' },
    description: {
      fr: "Le développement web évolue vite — je reste curieux et je monte régulièrement en compétences sur de nouvelles technos.",
      en: "Web development moves fast — I stay curious and keep leveling up on new technologies.",
    },
    icon: 'GraduationCap',
  },
  {
    title: { fr: 'Fiabilité', en: 'Reliability' },
    description: {
      fr: "Je tiens mes engagements et je communique clairement sur l'avancement de chaque projet, du cahier des charges à la livraison.",
      en: "I follow through on commitments and communicate clearly on project progress, from spec to delivery.",
    },
    icon: 'ShieldCheck',
  },
];

export const SERVICES: Service[] = [
  {
    title: { fr: 'Sites vitrines', en: 'Showcase Websites' },
    description: {
      fr: "Création de sites vitrines modernes et responsives avec Laravel ou React, pour présenter une activité ou un projet en ligne.",
      en: "Modern, responsive showcase websites built with Laravel or React, to present a business or project online.",
    },
    icon: 'Globe',
  },
  {
    title: { fr: 'Applications web full-stack', en: 'Full-Stack Web Apps' },
    description: {
      fr: "Développement d'applications complètes avec back-office admin, base de données MySQL et gestion CRUD, en PHP/Laravel.",
      en: "Complete applications with an admin back-office, MySQL database and CRUD management, in PHP/Laravel.",
    },
    icon: 'LayoutGrid',
  },
  {
    title: { fr: 'Intégration front-end', en: 'Front-End Integration' },
    description: {
      fr: "Intégration d'interfaces React et Tailwind CSS fidèles aux maquettes, propres, responsives et performantes.",
      en: "React and Tailwind CSS interfaces matching designs precisely — clean, responsive and performant.",
    },
    icon: 'Atom',
  },
];
