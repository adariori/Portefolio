import { motion } from 'motion/react';
import { SKILLS } from '../data';
import type { Skill } from '../types';
import * as LucideIcons from 'lucide-react';

// Maps the qualitative self-assessment to a fill amount for the progress
// ring — capped below 100% even for "Confirmé" so the visual never reads
// as a claim of total mastery.
const LEVEL_FILL: Record<Skill['level'], number> = {
  Débutant: 33,
  Intermédiaire: 62,
  Confirmé: 90,
};

export default function SkillsGrid() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-6 sm:mb-10"
      >
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent"
        >
          <LucideIcons.Settings size={20} />
        </motion.div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-accent-light/20 font-outline">Compétences</h2>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 sm:gap-y-12 gap-x-4 px-2">
        {SKILLS.map((skill, idx) => {
          const Icon = (LucideIcons as any)[skill.icon || 'Code'];
          // Slight, non-uniform rotation per card keeps the stagger feeling
          // hand-placed rather than mechanically identical.
          const tilt = (idx % 2 === 0 ? 1 : -1) * 4;
          return (
            <motion.div
              key={skill.name}
              initial={{ scale: 0.7, opacity: 0, rotate: tilt * 2 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-col items-center group cursor-pointer"
              role="group"
              aria-label={`${skill.name} : niveau ${skill.level}`}
            >
              <div aria-hidden className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 mb-4 flex items-center justify-center">
                {/* Progress Circle — viewBox keeps it crisp at any container size */}
                <svg viewBox="0 0 112 112" className="h-full w-full -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    className="text-white/5"
                  />
                  <motion.circle
                    initial={{ strokeDashoffset: 301 }}
                    whileInView={{ strokeDashoffset: 301 - (301 * LEVEL_FILL[skill.level]) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: idx * 0.1 + 0.5, ease: "easeOut" }}
                    cx="56"
                    cy="56"
                    r="48"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray="301"
                    className="text-accent group-hover:stroke-[6px] transition-all"
                  />
                </svg>
                {/* Inner Pod */}
                <div className="absolute inset-2 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-accent group-hover:scale-105 group-hover:bg-accent/5 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <Icon size={20} className="mb-1" />
                    <span className="text-[10px] font-black uppercase">{skill.name}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
