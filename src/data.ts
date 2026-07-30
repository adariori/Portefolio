import { Skill, Experience, Education, Project } from './types';

export const PROFILE = {
  firstName: "Adéliyi 0. M.",
  lastName: "ARIORI OLOROUNKO",
  title: "Dev full stack Junior",
  about: "Salut je suis étudiant mous entron enaquier dn corques. pour vots à devlops je lin et continuer contact.",
  contact: {
    phone: "06 00 00 00 00",
    email: "info@studiant.rarantes.contact..com",
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
  { name: 'HTML', percentage: 75, icon: 'Layout' },
  { name: 'CSS', percentage: 70, icon: 'Palette' },
  { name: 'JavaScript', percentage: 45, icon: 'Braces' },
  { name: 'PHP', percentage: 65, icon: 'Server' },
  { name: 'Laravel', percentage: 45, icon: 'Boxes' },
  { name: 'React', percentage: 45, icon: 'Atom' },
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
    degree: 'Bac+3 Informatique',
  },
  {
    period: '2023 - 2025',
    degree: 'Bac+2 Informatique',
  }
];
