import { useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Github, Linkedin, Download, Languages } from 'lucide-react';
import { PROFILE } from '../data';
import { useLanguage } from '../i18n';
import MagneticLink from './MagneticLink';

// Explicit escape (not a literal space typed in source) so there is no
// ambiguity about which character this is: U+00A0 non-breaking space.
const NBSP = ' ';

// Reusable per-letter split so both name blocks share the same kinetic reveal.
// Letters are grouped by word in a nested inline-block so the browser can
// only wrap between words, never mid-word, no matter the viewport width.
function KineticWord({ text, delayOffset = 0, className = '' }: { text: string; delayOffset?: number; className?: string }) {
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <span className={`inline-flex flex-wrap justify-center md:justify-start ${className}`} aria-label={text}>
      {words.map((word, wordIdx) => {
        const letters = word.split('').map((char) => {
          const i = charIndex++;
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotate: 8, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              transition={{
                delay: delayOffset + i * 0.035,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          );
        });

        if (wordIdx < words.length - 1) charIndex++; // account for the space between words

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {letters}
            {wordIdx < words.length - 1 ? NBSP : ''}
          </span>
        );
      })}
    </span>
  );
}

export default function Header() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { lang, toggleLang, t } = useLanguage();

  // Magnetic tilt: photo reacts to cursor position like it's floating on a hinge.
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });
  const glowX = useTransform(springY, [-15, 15], [0, 100]);
  const glowY = useTransform(springX, [15, -15], [0, 100]);
  const sheen = useTransform([glowX, glowY], ([gx, gy]: number[]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.35), transparent 60%)`);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 30);
    rotateX.set(-py * 30);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-16 text-center md:text-left">
      <div className="space-y-4 w-full md:w-auto">
        <div className="space-y-0">
          {/* Fluid clamp instead of a fixed 10rem jump at lg: — scales with the
              viewport but caps out so it stays proportional on large/fullscreen screens. */}
          <h1 className="text-[clamp(2.5rem,6vw,6.5rem)] font-black tracking-tight uppercase leading-[0.85] md:leading-[0.75] mb-2 flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start justify-center md:justify-start">
            <KineticWord text={PROFILE.firstName} delayOffset={0.1} className="font-display text-white" />
            <KineticWord text={PROFILE.lastName} delayOffset={0.1 + PROFILE.firstName.length * 0.035} className="font-display text-accent-light" />
          </h1>
        </div>
        <motion.p
          initial={{ opacity: 0, letterSpacing: '-0.05em' }}
          animate={{ opacity: 1, letterSpacing: '0.02em' }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-accent-light font-black text-xl sm:text-2xl md:text-3xl tracking-wide mt-4 uppercase"
        >
          {PROFILE.title[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center md:justify-start gap-3 pt-2"
        >
          <MagneticLink
            href={`https://github.com/${PROFILE.contact.github}`}
            target="_blank"
            ariaLabel={t.contactAria.githubProfile(PROFILE.firstName)}
            className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-accent-light hover:border-accent-light/40 transition-colors"
          >
            <Github aria-hidden size={18} />
          </MagneticLink>
          <MagneticLink
            href={`https://linkedin.com/in/${PROFILE.contact.linkedin}`}
            target="_blank"
            ariaLabel={t.contactAria.linkedinProfile(PROFILE.firstName)}
            className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-accent-light hover:border-accent-light/40 transition-colors"
          >
            <Linkedin aria-hidden size={18} />
          </MagneticLink>
          <MagneticLink
            href={PROFILE.cvUrl}
            download
            ariaLabel={t.contactAria.downloadCv}
            className="h-10 pl-3 pr-4 flex items-center gap-2 rounded-lg bg-accent text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-light transition-colors"
          >
            <Download aria-hidden size={16} />
            CV
          </MagneticLink>
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.langToggleAria}
            className="h-10 px-3 flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-accent-light hover:border-accent-light/40 transition-colors text-xs font-bold uppercase tracking-wider"
          >
            <Languages aria-hidden size={16} />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </motion.div>
      </div>

      <motion.div
        ref={cardRef}
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 45 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 600 }}
        className="relative group cursor-pointer mx-auto md:mx-0 md:mr-12 mt-4 md:mt-0"
      >
        <motion.div
          style={{ rotateX: springX, rotateY: springY }}
          className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 bg-gradient-to-br from-accent to-bg-dark overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_70px_rgba(37,99,235,0.6)] transition-shadow"
        >
          {/* Photo de profil, contre-tournée pour rester droite dans le losange. */}
          <motion.div
            initial={{ rotate: -45, scale: 1.2 }}
            animate={{ rotate: -45, scale: 1.2 }}
            className="h-full w-full select-none"
          >
            <img
              src="/profil.webp"
              alt={t.contactAria.profilePhoto(`${PROFILE.firstName} ${PROFILE.lastName}`)}
              className="h-full w-full object-cover"
            />
          </motion.div>
          {/* Sheen that tracks the tilt — sells the "glass over metal" feel */}
          <motion.div
            aria-hidden
            style={{ background: sheen }}
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>
        <div className="absolute inset-0 border-4 border-white/20 pointer-events-none" />
      </motion.div>
    </header>
  );
}
