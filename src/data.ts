import { Skill, Experience, Education, Project } from './types';

export const PROFILE = {
  firstName: "Adéliyi 0. M.",
  lastName: "ARIORI OLOROUNKO",
  title: "L3 AL",
  about: "Salut je suis étudiant mous entron enaquier dn corques. pour vots à devlops je lin et continuer contact.",
  contact: {
    phone: "06 00 00 00 00",
    email: "info@studiant.rarantes.contact..com",
    // Bare username/slug only — components build the full URL + display label from this.
    github: "tonnom",
    linkedin: "tonprofil",
    footerEmail: "Info@gmail.com"
  },
  /** Path to the CV file served from /public — see cv.pdf. */
  cvUrl: "/cv.pdf"
};

export const PROJECTS: Project[] = [
  {
    name: "Dévelopements d'anclice le design",
    description: "Projects - triammin enaptions, secone.is....",
    tags: ["React", "TypeScript"],
    link: "https://github.com/tonnom/projet-1"
  },
  {
    name: "Deuxième projet à compléter",
    description: "Remplace ce texte par une vraie description de projet (contexte, stack, ton rôle).",
    tags: ["Java", "Spring"],
    link: "https://github.com/tonnom/projet-2"
  },
  {
    name: "Troisième projet à compléter",
    description: "Remplace ce texte par une vraie description de projet (contexte, stack, ton rôle).",
    tags: ["UML", "Architecture"],
    link: "https://github.com/tonnom/projet-3"
  }
];

export const SKILLS: Skill[] = [
  { name: 'As++', percentage: 85, icon: 'Code' },
  { name: 'Gara', percentage: 90, icon: 'FileCode' },
  { name: 'SSL', percentage: 75, icon: 'Lock' },
  { name: 'HTMI', percentage: 80, icon: 'Layout' },
  { name: 'Python', percentage: 85, icon: 'FileCode' },
  { name: 'SeMI', percentage: 70, icon: 'Cpu' },
  { name: 'WAT', percentage: 65, icon: 'Activity' },
];

export const EXPERIENCES: Experience[] = [
  {
    period: "Projects - 2022, ätitex de-ut d'un 2023",
    role: "Déveloper en étediant",
    company: "L3 AL",
    description: "",
  },
  {
    period: "Projects - 2021, ätitex de non d'un 2023",
    role: "Déveloper ondäit",
    company: "Destent Gonate",
    description: "",
  }
];

export const EDUCATIONS: Education[] = [
  {
    period: '2025 - 2026',
    degree: 'L3 AL',
  },
  {
    period: '2023 - 2025',
    degree: 'Bac+2 Informatique',
  }
];
