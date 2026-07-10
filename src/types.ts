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
