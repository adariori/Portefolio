import { motion } from 'motion/react';
import { PROFILE } from '../data';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.015 }}
      transition={{ delay: 2.2, scale: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="relative mt-12 md:mt-20 bg-white/[0.02] border border-white/5 hover:border-accent-light/30 text-white py-4 px-4 sm:px-6 md:px-8 rounded-xl flex flex-wrap items-center justify-center gap-3 font-bold transition-colors text-xs sm:text-sm md:text-base text-center overflow-hidden"
    >
      <a
        href="#contact"
        className="font-outline tracking-wider text-white/80 min-w-0 break-words underline decoration-accent-light/40 underline-offset-4 hover:decoration-accent-light hover:text-white transition-colors"
      >
        Discutons de votre prochain projet
      </a>

      {/* Status pill — driven by PROFILE.available so it reflects real status
          instead of being hardcoded. Pulses only while available. */}
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/80">
        <motion.span
          aria-hidden
          animate={PROFILE.available ? { opacity: [1, 0.35, 1] } : { opacity: 1 }}
          transition={{ duration: 1.8, repeat: PROFILE.available ? Infinity : 0, ease: 'easeInOut' }}
          className={`h-1.5 w-1.5 rounded-full ${PROFILE.available ? 'bg-green-400' : 'bg-red-500'}`}
        />
        {PROFILE.available ? 'Disponible' : 'Indisponible'}
      </span>
    </motion.footer>
  );
}
