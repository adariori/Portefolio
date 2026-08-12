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
 *
 * @license   MIT License
 *            © 2026 ARIORI OLOROUNKO Adéliyi Odjouola Moshood
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
