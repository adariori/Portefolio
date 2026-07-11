export interface Skill {
  name: string;
  percentage: number;
  icon?: string;
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
  /** Optional link to the repo/live demo. */
  link?: string;
  tags?: string[];
}
