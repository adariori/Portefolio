import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'fr' | 'en';

// Static UI chrome (labels, buttons, aria text) that isn't part of the
// content data — section headings, form copy, nav labels, etc.
const UI = {
  fr: {
    skipLink: 'Aller au contenu principal',
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      certifications: 'Certifications',
      services: 'Services',
      projects: 'Projets',
      contact: 'Contact',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      ariaLabel: 'Navigation rapide',
    },
    loaderAria: (name: string) => `Chargement du portfolio de ${name}`,
    backToTop: 'Retour en haut de la page',
    langToggleAria: 'Passer le site en anglais',
    sections: {
      about: 'À propos',
      experiences: 'Expériences',
      formation: 'Formation',
      skills: 'Compétences',
      certifications: 'Certifications',
      values: 'Valeurs',
      services: 'Services',
      projects: 'Projets',
      contact: 'Contact',
    },
    skillCategories: {
      frontend: 'Front-End',
      backend: 'Back-End',
      tools: 'Outils',
      languages: 'Langages',
    },
    skillLevels: {
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Confirmé',
    },
    contactAria: {
      call: 'Appeler par téléphone',
      email: 'Envoyer un email via Gmail',
      githubProfile: (name: string) => `Profil GitHub de ${name}`,
      linkedinProfile: (name: string) => `Profil LinkedIn de ${name}`,
      downloadCv: 'Télécharger le CV au format PDF',
      profilePhoto: (name: string) => `Photo de profil de ${name}`,
    },
    certificationsIntro: "Les formations et certifications que j'ai suivies pour renforcer mes compétences.",
    valuesIntro: 'Les principes qui guident ma façon de travailler, au quotidien comme sur chaque projet.',
    servicesIntro: 'Ce que je peux construire pour votre prochain projet web.',
    projectsIntro: "Une sélection de projets réalisés en freelance, en formation ou pour mon propre apprentissage — du site vitrine à l'application full-stack.",
    projectAria: {
      view: (name: string) => `Voir le projet ${name}`,
      viewCode: (name: string) => `Voir le code source de ${name} sur GitHub`,
    },
    contactForm: {
      available: 'Disponible pour de nouveaux projets',
      unavailable: 'Actuellement indisponible',
      heading: 'Travaillons ensemble',
      intro: 'Disponible pour un stage, une alternance ou une mission freelance. Je réponds sous 24h.',
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email',
      emailPlaceholder: 'votre@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Votre message...',
      sending: 'Envoi...',
      send: 'Envoyer',
      sent: 'Message envoyé, merci !',
      error: (email: string) => `Échec de l'envoi, réessayez ou écrivez à ${email}`,
    },
    footer: {
      cta: 'Discutons de votre prochain projet',
      available: 'Disponible',
      unavailable: 'Indisponible',
    },
  },
  en: {
    skipLink: 'Skip to main content',
    nav: {
      about: 'About',
      skills: 'Skills',
      certifications: 'Certifications',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      ariaLabel: 'Quick navigation',
    },
    loaderAria: (name: string) => `Loading ${name}'s portfolio`,
    backToTop: 'Back to top',
    langToggleAria: 'Switch site to French',
    sections: {
      about: 'About',
      experiences: 'Experience',
      formation: 'Education',
      skills: 'Skills',
      certifications: 'Certifications',
      values: 'Values',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    skillCategories: {
      frontend: 'Front-End',
      backend: 'Back-End',
      tools: 'Tools',
      languages: 'Languages',
    },
    skillLevels: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
    },
    contactAria: {
      call: 'Call by phone',
      email: 'Send an email via Gmail',
      githubProfile: (name: string) => `${name}'s GitHub profile`,
      linkedinProfile: (name: string) => `${name}'s LinkedIn profile`,
      downloadCv: 'Download CV as PDF',
      profilePhoto: (name: string) => `Profile photo of ${name}`,
    },
    certificationsIntro: "Training and certifications I've completed to strengthen my skills.",
    valuesIntro: 'The principles that guide how I work, day to day and on every project.',
    servicesIntro: 'What I can build for your next web project.',
    projectsIntro: 'A selection of projects built freelance, during training, or for my own learning — from showcase sites to full-stack apps.',
    projectAria: {
      view: (name: string) => `View the ${name} project`,
      viewCode: (name: string) => `View ${name}'s source code on GitHub`,
    },
    contactForm: {
      available: 'Available for new projects',
      unavailable: 'Currently unavailable',
      heading: "Let's work together",
      intro: 'Available for an internship, work-study program or freelance work. I reply within 24h.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Your message...',
      sending: 'Sending...',
      send: 'Send',
      sent: 'Message sent, thank you!',
      error: (email: string) => `Failed to send, please retry or write to ${email}`,
    },
    footer: {
      cta: "Let's discuss your next project",
      available: 'Available',
      unavailable: 'Unavailable',
    },
  },
} as const;

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: typeof UI['fr'];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'fr';
    return localStorage.getItem('lang') === 'en' ? 'en' : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: UI[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
