# Dev Portfolio

Portfolio personnel à thème "terminal" d'Adéliyi Ariori Olorounko, étudiant en développement web fullstack. Une seule page présente le profil, un bloc "about" façon terminal bash, les expériences, projets, formations et compétences (avec cercles de progression animés).

## Stack technique

- **React 19** + **TypeScript**
- **Vite 6** (build/dev server) avec `@vitejs/plugin-react`
- **Tailwind CSS 4** (via `@tailwindcss/vite`, config par `@theme` dans `src/index.css`)
- **Motion** (`motion/react`, ex-Framer Motion) pour toutes les animations
- **lucide-react** pour les icônes
- **EmailJS** pour l'envoi réel des emails du formulaire de contact, sans backend

Projet 100 % front-end statique, sans serveur.

## Structure

```
src/
├── main.tsx          # point d'entrée, monte <App/>
├── App.tsx           # layout général + skip-link + écran de chargement (2s)
├── data.ts           # toutes les données du profil (à remplir)
├── types.ts          # types Skill / Experience / Education / Project
├── index.css         # thème Tailwind (couleurs, polices, reduced-motion)
└── components/
    ├── Loader.tsx        # écran de chargement (log de boot terminal)
    ├── Header.tsx        # nom + titre + monogramme + réseaux sociaux + bouton CV
    ├── InfoSection.tsx   # bloc "about" style terminal + contacts
    ├── ContentGrid.tsx   # expériences, projets (vignettes), formation
    ├── SkillsGrid.tsx    # grille de compétences avec anneaux de progression SVG
    ├── ContactForm.tsx   # formulaire de contact (envoi via EmailJS, repli mailto: si non configuré)
    ├── MagneticLink.tsx  # lien avec effet magnétique, partagé entre composants
    └── Footer.tsx        # bandeau de contact final
```

Toute la donnée affichée vient d'un seul fichier, `src/data.ts` (objet `PROFILE`, tableaux `PROJECTS`, `SKILLS`, `EXPERIENCES`, `EDUCATIONS`), ce qui rend le site facile à personnaliser sans toucher aux composants.

`public/` contient les assets statiques servis à la racine : `favicon.svg`, `og-image.png` (image de partage réseaux sociaux), `profil.jpeg` (photo de profil affichée dans le Header) et `cv.pdf`.

## Variables d'environnement

Le formulaire de contact envoie un vrai email via [EmailJS](https://emailjs.com) (gratuit jusqu'à 200 emails/mois). Copier `.env.example` en `.env` et renseigner les 3 clés `VITE_EMAILJS_*` (voir les commentaires du fichier pour la procédure). Sans ces clés, le formulaire retombe automatiquement sur un lien `mailto:`.

## Lancer en local

**Prérequis :** Node.js

```bash
npm install
npm run dev      # démarre le serveur de dev (port 3000)
npm run build    # build de production
npm run preview  # prévisualise le build
npm run lint     # vérification TypeScript (tsc --noEmit)
```

## CI

Un workflow GitHub Actions (`.github/workflows/ci.yml`) vérifie automatiquement le type-check et le build à chaque push/PR sur `main`.
