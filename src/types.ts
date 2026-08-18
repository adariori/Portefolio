/** A piece of text provided in both site languages. */
export interface I18nText {
  fr: string;
  en: string;
}

export interface Skill {
  name: I18nText;
  /** Internal keys — display labels are translated via the i18n UI dictionary. */
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  icon?: string;
}

export interface Certification {
  name: I18nText;
  /** What the certification actually covers — technology names, unchanged across languages. */
  skills: string[];
  period: string;
  /** Issuing school/platform — omit rather than guess when unverified. */
  issuer?: string;
  /** Grade/mention awarded, if any (e.g. "Très bien"). */
  mention?: I18nText;
}

export interface Value {
  title: I18nText;
  description: I18nText;
  icon: string;
}

export interface Service {
  title: I18nText;
  description: I18nText;
  icon: string;
}

export interface Experience {
  /** Bilingual since an ongoing role reads "Présent" / "Present" — plain years don't need translating but this covers both. */
  period: I18nText;
  role: I18nText;
  company: I18nText;
  description: I18nText;
}

export interface Education {
  period: string;
  degree: I18nText;
  institution?: string;
}

export interface Project {
  name: string;
  description: I18nText;
  /** Optional screenshot/thumbnail URL. Falls back to a themed placeholder when absent. */
  image?: string;
  /** Optional link to the deployed/live site. Used as the card's primary click target. */
  demoUrl?: string;
  /** Optional link to the source repo, shown as a secondary action. */
  repoUrl?: string;
  tags?: string[];
}
