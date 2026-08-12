/**
 * @author    ARIORI OLOROUNKO Adéliyi Odjouola Moshood
 * @github    https://github.com/adariori
 * @web       https://portefolio-nine-iota.vercel.app/
 * @contact   adariori3@gmail.com
 * @location  Cotonou, Benin
 *
 * @project   Dev Portfolio
 * @version   0.0.0
 * @year      2026
 * @stack     React / TypeScript / Vite / Tailwind CSS
 *
 * @license   Creative Commons BY-NC-ND 4.0
 *            © 2026 ARIORI OLOROUNKO Adéliyi Odjouola Moshood
 *            Consultation autorisée à titre de référence uniquement.
 *            Toute réutilisation commerciale ou modification est interdite.
 *            Voir le fichier LICENSE à la racine du projet.
 */

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
