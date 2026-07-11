# Dev Portfolio

Portfolio personnel à thème "terminal", pensé pour un étudiant en Architecture Logicielle (L3 AL). Une seule page présente le profil, un bloc "about" façon terminal bash, les expériences, projets, formations et compétences (avec cercles de progression animés).

## Stack technique

- **React 19** + **TypeScript**
- **Vite 6** (build/dev server) avec `@vitejs/plugin-react`
- **Tailwind CSS 4** (via `@tailwindcss/vite`, config par `@theme` dans `src/index.css`)
- **Motion** (`motion/react`, ex-Framer Motion) pour toutes les animations
- **lucide-react** pour les icônes

Le `package.json` liste aussi `@google/genai`, `express` et `dotenv` (héritage d'un template Google AI Studio), mais rien dans le code actuel ne les utilise : le projet est en réalité 100 % front-end statique.

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
    ├── ContactForm.tsx   # formulaire de contact (construit un lien mailto:)
    ├── MagneticLink.tsx  # lien avec effet magnétique, partagé entre composants
    └── Footer.tsx        # bandeau de contact final
```

Toute la donnée affichée vient d'un seul fichier, `src/data.ts` (objet `PROFILE`, tableaux `PROJECTS`, `SKILLS`, `EXPERIENCES`, `EDUCATIONS`), ce qui rend le site facile à personnaliser sans toucher aux composants.

`public/` contient les assets statiques servis à la racine : `favicon.svg`, `og-image.png` (image de partage réseaux sociaux) et `cv.pdf` (CV auto-généré depuis `data.ts` — à régénérer une fois le vrai contenu en place).

## Point d'attention

Le contenu actuel de `src/data.ts` est du texte placeholder mal généré (nom "PRÉNOM NOM", phrases incohérentes en français, compétences mal orthographiées comme "As++", "Gara", "HTMI"). Ce fichier doit être réécrit avec les vraies informations avant mise en ligne — le CV PDF, l'image OG et le favicon en dépendent aussi indirectement (nom affiché en dur dans `index.html` et dans le script de génération du CV).

Le monogramme dans le Header (initiales sur fond bleu) est un placeholder en attendant une vraie photo : remplacer le bloc commenté dans `Header.tsx` par un `<img>`.

## Lancer en local

**Prérequis :** Node.js

```bash
npm install
npm run dev      # démarre le serveur de dev (port 3000)
npm run build    # build de production
npm run preview  # prévisualise le build
npm run lint     # vérification TypeScript (tsc --noEmit)
```
