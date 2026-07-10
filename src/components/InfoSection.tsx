import { motion } from 'motion/react';
import { Phone, Mail, Github } from 'lucide-react';
import { PROFILE } from '../data';

export default function InfoSection() {
  return (
    <section className="space-y-12 mb-16">
      {/* Terminal Box */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-card-dark rounded-xl border border-white/5 overflow-hidden shadow-2xl"
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="h-3 w-3 rounded-full bg-red-500/50" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
          <div className="h-3 w-3 rounded-full bg-green-500/50" />
          <span className="ml-2 font-mono text-[10px] text-white/30 uppercase tracking-widest">bash — about.txt</span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed bg-[#0a0a0a]/50">
          <p className="text-accent mb-4">
            <span className="text-accent/50">$</span> cat about.txt
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-white/80 leading-relaxed max-w-3xl"
          >
            {PROFILE.about}
          </motion.p>
          <div className="mt-4 text-white/40 flex items-center gap-2">
            <span>Contact</span>
            <a href={`mailto:${PROFILE.contact.email}`} className="text-white/60 hover:text-accent transition-colors underline decoration-accent/30 underline-offset-4">{PROFILE.contact.email}</a>
          </div>
        </div>
      </motion.div>

      {/* Contact Row */}
      <div className="flex flex-wrap gap-8 px-2">
        <motion.a
          whileHover={{ x: 5 }}
          href={`tel:${PROFILE.contact.phone}`}
          className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
        >
          <Phone size={16} className="text-accent" />
          <span className="font-mono text-sm tracking-tighter">{PROFILE.contact.phone}</span>
        </motion.a>
        <motion.a
          whileHover={{ x: 5 }}
          href={`mailto:${PROFILE.contact.email}`}
          className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
        >
          <Mail size={16} className="text-accent" />
          <span className="font-mono text-sm tracking-tighter">{PROFILE.contact.email}</span>
        </motion.a>
        <motion.a
          whileHover={{ x: 5 }}
          href={`https://github.com/${PROFILE.contact.github}`}
          target="_blank"
          className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
        >
          <Github size={16} className="text-accent" />
          <span className="font-mono text-sm tracking-tighter">{PROFILE.contact.github}</span>
        </motion.a>
      </div>
    </section>
  );
}
