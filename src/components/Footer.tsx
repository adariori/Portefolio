import { motion } from 'motion/react';
import { PROFILE } from '../data';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.015 }}
      transition={{ delay: 2.2, scale: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="relative mt-12 md:mt-20 bg-accent text-white py-4 px-4 sm:px-6 md:px-8 rounded-xl flex flex-wrap items-center justify-center gap-2 font-bold shadow-[0_10px_40px_rgba(37,99,235,0.3)] text-xs sm:text-sm md:text-base text-center overflow-hidden"
    >
      {/* Shimmer sweep, on-brand instead of a generic fade */}
      <motion.span
        aria-hidden
        initial={{ x: '-120%' }}
        animate={{ x: '120%' }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
      />
      <span className="font-outline tracking-wider text-white/90 min-w-0 break-words">Salut, je suis étudiant, un contact portioner: {PROFILE.contact.footerEmail}</span>
      <motion.span
        aria-hidden
        animate={{ rotate: [0, 20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >

      </motion.span>
    </motion.footer>
  );
}
