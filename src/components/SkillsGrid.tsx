import { motion } from 'motion/react';
import { SKILLS } from '../data';
import type { Skill } from '../types';
import { useLanguage } from '../i18n';
import {
  Settings,
  Code,
  Layout,
  Palette,
  Braces,
  Server,
  Boxes,
  Atom,
  Wind,
  Layers,
  Database,
  Webhook,
  KeyRound,
  GitBranch,
  Github,
  Terminal,
  Container,
  type LucideIcon,
} from 'lucide-react';

// Named imports only — `import * as` would pull in the whole icon set
// (1000+ icons) and defeat tree-shaking for a handful of icons actually
// used. Add new skill icons here as SKILLS grows.
const ICONS: Record<string, LucideIcon> = {
  Layout, Palette, Braces, Server, Boxes, Atom, Wind, Layers, Database,
  Webhook, KeyRound, GitBranch, Github, Terminal, Container,
};

// Rendered in this fixed order regardless of how SKILLS is sorted, so the
// grouping stays predictable (Front-End first) even if entries are reordered.
const CATEGORIES: Skill['category'][] = ['frontend', 'backend', 'tools'];

// How many of the 3 level-dots light up — compact stand-in for the old
// circular progress ring, still capped short of "full" even at "advanced"
// so it never reads as a claim of total mastery.
const LEVEL_DOTS: Record<Skill['level'], number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
};

export default function SkillsGrid() {
  const { lang, t } = useLanguage();

  return (
    <section id="competences" className="scroll-mt-24">
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
          <Settings size={20} />
        </motion.div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-accent-light/20 font-outline">{t.sections.skills}</h2>
      </motion.div>
      <div className="space-y-6">
        {CATEGORIES.map((category) => {
          const skillsInCategory = SKILLS.filter((s) => s.category === category);
          if (skillsInCategory.length === 0) return null;

          return (
            <div key={category}>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3 px-2">{t.skillCategories[category]}</p>
              <div className="flex flex-wrap gap-2 px-2">
                {skillsInCategory.map((skill, idx) => {
                  const Icon = ICONS[skill.icon || ''] || Code;
                  const dots = LEVEL_DOTS[skill.level];
                  return (
                    <motion.div
                      key={skill.name.en}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -2 }}
                      role="group"
                      aria-label={`${skill.name[lang]} : ${t.skillLevels[skill.level]}`}
                      className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:border-accent-light/40 hover:bg-white/[0.08] px-3 py-2 transition-colors"
                    >
                      <Icon aria-hidden size={15} className="text-accent shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wide text-white/80 group-hover:text-white transition-colors">
                        {skill.name[lang]}
                      </span>
                      <span aria-hidden className="flex items-center gap-0.5">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full transition-colors ${i < dots ? 'bg-accent' : 'bg-white/15'}`}
                          />
                        ))}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
