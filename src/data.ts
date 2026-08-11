import { Skill, Experience, Education, Project } from './types';

export const PROFILE = {
  firstName: "Adéliyi 0. M.",
  lastName: "ARIORI OLOROUNKO",
  title: "Développeur Web",
  about: "Étudiant en 3ème année, développeur web. Je construis des applications avec React et Laravel, avec des bases solides en PHP, MySQL, Tailwind et Bootstrap. J'apprends chaque jour un peu plus.",
  contact: {
    phone: "+229 01 61 87 32 98",
    email: "adariori3@gmail.com",
    github: "adariori",
    linkedin: "ad%C3%A9liyi-adeliyi-ariori",
    footerEmail: "adariori3@gmail.com"
  },
  /** Path to the CV file served from /public — see cv.pdf. */
  cvUrl: "/cv.pdf",
  /** Drives the footer status pill: pulsing green "Disponible" vs. static grey "Indisponible". */
  available: true
};

export const PROJECTS: Project[] = [
  {
    name: "Technop",
    description: "Site vitrine développé avec Laravel 12 pour l'entreprise Technop, présentant ses services, son équipe et ses coordonnées.",
    image: "/Technop.png",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Vite", "Pest"],
    demoUrl: "https://technop.onrender.com/accueil",
    repoUrl: "https://github.com/adariori/Technop"
  },
  {
    name: "Grillades Tropicales",
    description: "Application full-stack (React 19 + Express + TypeScript) pour un restaurant : menu interactif, commande en ligne, réservation de table, et back-office complet (CRUD, statistiques, gestion des commandes/réservations).",
    image: "/Grillades-tropicales.png",
    tags: ["React", "Express", "Node.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://gt-one-phi.vercel.app/",
    repoUrl: "https://github.com/adariori/GT"
  },
  {
    name: "Le Carré Bar & Lounge",
    description: "Menu numérique accessible via QR code pour le Bar & Lounge Le Carré (Bénin), avec commande directe sur WhatsApp, écran de démarrage animé et interface responsive.",
    image: "/carré.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
    demoUrl: "https://mlk-229.vercel.app/",
    repoUrl: "https://github.com/adariori/Mlk-229-bar-lounge"
  },
  {
    name: "Fighting Spirit Karate Club",
    description: "Site vitrine de l'association sportive Fighting Spirit Karate Club, club de Karaté Shotokan basé à Cotonou (Bénin) : présentation du dojo, du sensei, des cours, tarifs et valeurs.",
    image: "/fighting-spirit.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://karatesite.vercel.app/",
    repoUrl: "https://github.com/adariori/Fighting-Spirit-Karate-Club"
  },
  {
    name: "TechStock",
    description: "Application de gestion de parc informatique développée avec Laravel 12 : suivi des appareils, des salles, des catégories et de l'historique des interventions (maintenance, réparation).",
    image: "/TechStock.png",
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS", "Vite"],
    demoUrl: "https://techstock-three.vercel.app/devices",
    repoUrl: "https://github.com/adariori/Techstock"
  },
  {
    name: "Sophie Mercier Coach",
    description: "Site vitrine pour Sophie Mercier, coach professionnelle, présentant son accompagnement et ses services de coaching.",
    image: "/1.png",
    tags: ["React", "TypeScript", "Vite"],
    demoUrl: "https://sophie-mercier-coach.vercel.app/"
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML', percentage: 75, icon: 'Layout' },
  { name: 'CSS', percentage: 70, icon: 'Palette' },
  { name: 'JavaScript', percentage: 45, icon: 'Braces' },
  { name: 'PHP', percentage: 65, icon: 'Server' },
  { name: 'Laravel', percentage: 45, icon: 'Boxes' },
  { name: 'React', percentage: 45, icon: 'Atom' },
  { name: 'Tailwind CSS', percentage: 35, icon: 'Wind' },
  { name: 'Bootstrap', percentage: 35, icon: 'Layers' },
];

export const EXPERIENCES: Experience[] = [
  {
    period: "2024 - 2025",
    role: "Développeur web freelance",
    company: "Projets personnels",
    description: "Sites vitrines pour des particuliers.",
  },
  {
    period: "2025",
    role: "Certification développement web",
    company: "HTML / CSS / JavaScript / PHP",
    description: "",
  }
];

export const EDUCATIONS: Education[] = [
  {
    period: '2025 - 2026',
    degree: 'Licence Informatique, Réseaux et Télécommunications — ESGIS',
  },
  {
    period: '2025',
    degree: 'Formation développement web (HTML / CSS / JavaScript / PHP)',
  }
];
