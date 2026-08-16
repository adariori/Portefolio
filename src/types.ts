export interface Skill {
  name: string;
  /** Qualitative self-assessment — avoids the false precision of a specific percentage. */
  level: 'Débutant' | 'Intermédiaire' | 'Confirmé';
  category: 'Front-End' | 'Back-End' | 'Outils';
  icon?: string;
}

export interface Certification {
  name: string;
  /** What the certification actually covers. */
  skills: string[];
  period: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface Education {
  period: string;
  degree: string;
  institution?: string;
}

export interface Project {
  name: string;
  description: string;
  /** Optional screenshot/thumbnail URL. Falls back to a themed placeholder when absent. */
  image?: string;
  /** Optional link to the deployed/live site. Used as the card's primary click target. */
  demoUrl?: string;
  /** Optional link to the source repo, shown as a secondary action. */
  repoUrl?: string;
  tags?: string[];
}
