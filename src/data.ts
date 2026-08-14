import { Skill, Experience, Education, Project } from './types';

export const PROFILE = {
  firstName: "Adéliyi 0. M.",
  lastName: "ARIORI OLOROUNKO",
  title: "Développeur Web",
  about: "Développeur web. Je construis des applications avec React et Laravel, avec des bases solides en PHP, MySQL, Tailwind et Bootstrap. J'apprends chaque jour un peu plus.",
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
    name: "Technop",
    description: "Site vitrine développé avec Laravel 12 pour l'entreprise Technop, présentant ses services, son équipe et ses coordonnées.",
    image: "/Technop.webp",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Vite", "Pest"],
    demoUrl: "https://technop.onrender.com/accueil",
    repoUrl: "https://github.com/adariori/Technop"
  },
  {
    name: "Braise Marine",
    description: "Site vitrine et back-office pour un restaurant de grillades face à la mer, développé en PHP + MySQL : menu en ligne, commandes (livraison/retrait), réservations de table et espace admin de gestion.",
    image: "/braise.webp",
    tags: ["PHP", "MySQL", "PDO", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://braise-marine-8ic7.vercel.app/frontend/includes/index.php",
    repoUrl: "https://github.com/adariori/braise_marine"
  },
  {
    name: "Le Carré Bar & Lounge",
    description: "Menu numérique accessible via QR code pour le Bar & Lounge Le Carré (Bénin), avec commande directe sur WhatsApp, écran de démarrage animé et interface responsive.",
    image: "/carré.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
    demoUrl: "https://mlk-229.vercel.app/",
    repoUrl: "https://github.com/adariori/Mlk-229-bar-lounge"
  },
  {
    name: "Fighting Spirit Karate Club",
    description: "Site vitrine de l'association sportive Fighting Spirit Karate Club, club de Karaté Shotokan basé à Cotonou (Bénin) : présentation du dojo, du sensei, des cours, tarifs et valeurs.",
    image: "/fighting-spirit.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://karatesite.vercel.app/",
    repoUrl: "https://github.com/adariori/Fighting-Spirit-Karate-Club"
  },
  {
    name: "TechStock",
    description: "Application de gestion de parc informatique développée avec Laravel 12 : suivi des appareils, des salles, des catégories et de l'historique des interventions (maintenance, réparation).",
    image: "/TechStock.webp",
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS", "Vite"],
    demoUrl: "https://techstock-three.vercel.app/devices",
    repoUrl: "https://github.com/adariori/Techstock"
  },
  {
    name: "Sophie Mercier Coach",
    description: "Site vitrine pour Sophie Mercier, coach professionnelle, présentant son accompagnement et ses services de coaching.",
    image: "/1.webp",
    tags: ["React", "TypeScript", "Vite"],
    demoUrl: "https://sophie-mercier-coach.vercel.app/"
  },
  {
    name: "Marcus Reid Personal Trainer",
    description: "Site vitrine pour Marcus Reid, coach sportif personnel, présentant ses programmes d'entraînement et ses services.",
    image: "/2.webp",
    tags: ["React", "TypeScript", "Vite"],
    demoUrl: "https://marcus-reid-personal-trainer.vercel.app/"
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML', level: 'Confirmé', icon: 'Layout' },
  { name: 'CSS', level: 'Confirmé', icon: 'Palette' },
  { name: 'JavaScript', level: 'Intermédiaire', icon: 'Braces' },
  { name: 'PHP', level: 'Confirmé', icon: 'Server' },
  { name: 'Laravel', level: 'Intermédiaire', icon: 'Boxes' },
  { name: 'React', level: 'Intermédiaire', icon: 'Atom' },
  { name: 'Tailwind CSS', level: 'Débutant', icon: 'Wind' },
  { name: 'Bootstrap', level: 'Débutant', icon: 'Layers' },
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
    degree: 'Licence Informatique, option Architecture Logicielle (AL) — ESGIS (en cours)',
  },
  {
    period: '2025',
    degree: 'Formation développement web (HTML / CSS / JavaScript / PHP)',
  }
];
