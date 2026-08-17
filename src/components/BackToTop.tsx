import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n';

// Same threshold as StickyNav — appears once there's meaningfully somewhere
// to scroll back up to.
const APPEAR_AFTER = 420;

export default function BackToTop() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    setVisible(y > APPEAR_AFTER);
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-label={t.backToTop}
          className="fixed bottom-6 right-4 sm:right-6 z-40 h-11 w-11 flex items-center justify-center rounded-full bg-card-dark border border-white/10 text-white/60 shadow-2xl hover:text-accent-light hover:border-accent-light/40 transition-colors"
        >
          <ArrowUp aria-hidden size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
