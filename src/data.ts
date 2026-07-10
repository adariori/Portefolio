import { Skill, Experience, Education } from './types';

export const PROFILE = {
  firstName: "PRÉNOM",
  lastName: "NOM",
  title: "L3 IRT",
  about: "Salut je suis étudiant mous entron enaquier dn corques. pour vots à devlops je lin et continuer contact.",
  contact: {
    phone: "06 00 00 00 00",
    email: "info@studiant.rarantes.contact..com",
    github: "github/tonnom",
    footerEmail: "Info@gmail.com"
  }
};

export const PROJECTS = [
  {
    name: "Dévelopements d'anclice le design",
    description: "Projects - triammin enaptions, secone.is...."
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
    company: "L3 IRT",
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
    degree: 'L3 IRT',
  },
  {
    period: '2023 - 2025',
    degree: 'Bac+2 Informatique',
  }
];
