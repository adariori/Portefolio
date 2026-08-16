import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { MessageSquare } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projets', label: 'Projets' },
];

// Appears once the visitor has scrolled past the kinetic-name hero — showing
// it immediately would fight the entrance animation and add clutter before
// there's anywhere useful to jump to yet.
const APPEAR_AFTER = 420;

export default function StickyNav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-end sm:justify-center gap-6">
            {/* Full link list — hidden on mobile where space is tight, in
                favor of the standalone Contact button below. */}
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
              className="flex items-center gap-1.5 rounded-lg bg-accent hover:bg-accent-light text-white text-xs font-bold uppercase tracking-wider px-3 py-2 transition-colors sm:absolute sm:right-4 md:right-6"
            >
              <MessageSquare aria-hidden size={14} />
              Contact
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
