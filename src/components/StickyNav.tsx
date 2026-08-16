import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { MessageSquare, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#services', label: 'Services' },
  { href: '#projets', label: 'Projets' },
];

// Appears once the visitor has scrolled past the kinetic-name hero — showing
// it immediately would fight the entrance animation and add clutter before
// there's anywhere useful to jump to yet.
const APPEAR_AFTER = 420;

export default function StickyNav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    setVisible(y > APPEAR_AFTER);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -56, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -56, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 inset-x-0 z-40 bg-bg-dark/80 backdrop-blur-md border-b border-white/5"
          aria-label="Navigation rapide"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between sm:justify-center gap-6">
            {/* Mobile menu toggle — the full link list is desktop-only (below),
                so mobile visitors reach the same anchors through this panel
                instead of losing them entirely. */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="sm:hidden flex items-center justify-center h-9 w-9 -ml-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              {menuOpen ? <X aria-hidden size={18} /> : <Menu aria-hidden size={18} />}
            </button>

            <ul className="hidden sm:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-white/50">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-accent-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1.5 rounded-lg bg-accent hover:bg-accent-light text-white text-xs font-bold uppercase tracking-wider px-3 py-2 transition-colors sm:absolute sm:right-4 md:right-6"
            >
              <MessageSquare aria-hidden size={14} />
              Contact
            </a>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-nav-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="sm:hidden overflow-hidden border-t border-white/5 bg-bg-dark/95 backdrop-blur-md"
              >
                <ul className="flex flex-col px-4 py-2 font-mono text-xs uppercase tracking-widest text-white/60">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2.5 hover:text-accent-light transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
