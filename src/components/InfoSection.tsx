import { motion } from 'motion/react';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../data';
import MagneticLink from './MagneticLink';

// mailto: silently fails when the visitor's browser/OS has no default mail
// client configured. Gmail's own compose URL always works in a new tab,
// since PROFILE.contact.email is a Gmail address.
const gmailComposeUrl = (email: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

export default function InfoSection() {
  const about = PROFILE.about;

  return (
    <section id="about" className="space-y-12 mb-16 scroll-mt-24">
      {/* Terminal Box */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-card-dark rounded-xl border border-white/5 overflow-hidden shadow-2xl"
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
          <motion.div whileHover={{ scale: 1.3 }} className="h-3 w-3 rounded-full bg-red-500/50" />
          <motion.div whileHover={{ scale: 1.3 }} className="h-3 w-3 rounded-full bg-yellow-500/50" />
          <motion.div whileHover={{ scale: 1.3 }} className="h-3 w-3 rounded-full bg-green-500/50" />
          <span className="ml-2 font-mono text-[10px] text-white/30 uppercase tracking-widest">bash — about.txt</span>
        </div>
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed bg-[#0a0a0a]/50">
          <p className="text-accent mb-4">
            <span className="text-accent/50">$</span> cat about.txt
          </p>
          {/* Typewriter reveal: text uncovers left-to-right, terminal-style */}
          <p className="text-white/80 leading-relaxed max-w-3xl">
            <motion.span
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: Math.min(about.length * 0.018, 2.5), delay: 1.2, ease: 'linear' }}
              className="inline-block terminal-cursor"
            >
              {about}
            </motion.span>
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + Math.min(about.length * 0.018, 2.5) + 0.2 }}
            className="mt-4 text-white/40 flex flex-wrap items-center gap-2"
          >
            <span>Contact</span>
            <a
              href={gmailComposeUrl(PROFILE.contact.email)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors underline decoration-accent/30 underline-offset-4 break-all"
            >
              {PROFILE.contact.email}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Row */}
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 px-2">
        <MagneticLink
          href={`tel:${PROFILE.contact.phone}`}
          ariaLabel="Appeler par téléphone"
          className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
        >
          <Phone aria-hidden size={16} className="text-accent" />
          <span className="font-mono text-sm tracking-tighter">{PROFILE.contact.phone}</span>
        </MagneticLink>
        <MagneticLink
          href={gmailComposeUrl(PROFILE.contact.email)}
          target="_blank"
          ariaLabel="Envoyer un email via Gmail"
          className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
        >
          <Mail aria-hidden size={16} className="text-accent shrink-0" />
          <span className="font-mono text-sm tracking-tighter break-all">{PROFILE.contact.email}</span>
        </MagneticLink>
        <MagneticLink
          href={`https://github.com/${PROFILE.contact.github}`}
          target="_blank"
          ariaLabel={`Profil GitHub de ${PROFILE.firstName}`}
          className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
        >
          <Github aria-hidden size={16} className="text-accent" />
          <span className="font-mono text-sm tracking-tighter">github/{PROFILE.contact.github}</span>
        </MagneticLink>
        <MagneticLink
          href={`https://linkedin.com/in/${PROFILE.contact.linkedin}`}
          target="_blank"
          ariaLabel={`Profil LinkedIn de ${PROFILE.firstName}`}
          className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
        >
          <Linkedin aria-hidden size={16} className="text-accent" />
          <span className="font-mono text-sm tracking-tighter">linkedin/{PROFILE.contact.linkedin}</span>
        </MagneticLink>
      </div>
    </section>
  );
}
