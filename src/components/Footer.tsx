import { motion } from 'motion/react';
import { PROFILE } from '../data';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2 }}
      className="mt-20 bg-accent text-white py-4 px-8 rounded-xl flex items-center justify-center gap-2 font-bold shadow-[0_10px_40px_rgba(37,99,235,0.3)] text-sm md:text-base text-center"
    >
      <span className="font-outline tracking-wider opacity-90">Salut, je suis étudiant, un contact portioner: {PROFILE.contact.footerEmail}</span>
      <motion.span
        animate={{ rotate: [0, 20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        
      </motion.span>
    </motion.footer>
  );
}
