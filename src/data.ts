import { Skill, Experience, Education, Project } from './types';

export const PROFILE = {
  firstName: "Adéliyi 0. M.",
  lastName: "ARIORI OLOROUNKO",
  title: "Dev full stack Junior",
  about: "Étudiant en 3ème année, développeur web fullstack junior. Je construis des applications avec React et Laravel, avec des bases solides en PHP, MySQL, Tailwind et Bootstrap. J'apprends chaque jour un peu plus.",
  contact: {
    phone: "01 61 87 32 98",
    email: "adariori3@gmail.com",
    github: "adariori",
    linkedin: "ad%C3%A9liyi-ariori-olorounko-4812203a1",
    footerEmail: "adariori3@gmail.com"
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
    degree: 'Bac+3 AL',
  },
  {
    period: '2023 - 2025',
    degree: 'Bac+2 AL',
  },
  {
    period: '2025',
    degree: 'Formation développement web (HTML / CSS / JavaScript / PHP)',
  }
];
