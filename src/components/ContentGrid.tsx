import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EXPERIENCES, EDUCATIONS } from '../data';
import { useLanguage } from '../i18n';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ContentGrid() {
  const { lang, t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  // Scroll-storytelling: the accent line fills as you scroll through the
  // timeline, turning scroll position into a literal "career progress" bar.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.4'],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="space-y-10 sm:space-y-16">
      {/* Expériences */}
      <section>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-6 sm:mb-10"
        >
          <div aria-hidden className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
            <Briefcase size={20} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-accent-light/20 font-outline">{t.sections.experiences}</h2>
        </motion.div>
        <div ref={timelineRef} className="relative space-y-10 pl-4 border-l-2 border-accent/20 ml-5">
          {/* Progress fill drawn on top of the base line */}
          <motion.div
            aria-hidden
            style={{ height: fillHeight }}
            className="absolute -left-[2px] top-0 w-[2px] bg-accent shadow-[0_0_8px_rgba(37,99,235,0.6)]"
          />
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -24, rotate: -1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 + 0.2, type: 'spring', stiffness: 400, damping: 15 }}
                className="absolute -left-[27px] top-1 h-5 w-5 rounded-full bg-accent border-[3px] border-bg-dark"
              />
              <h3 className="text-xl font-black uppercase leading-tight">{exp.role[lang]}</h3>
              <p className="text-white/40 font-mono text-[10px] tracking-widest mt-1 uppercase">{exp.company[lang]}</p>
              <p className="text-white/30 text-[10px] uppercase tracking-tighter mt-1">{exp.period[lang]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Formation */}
      <section>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-6 sm:mb-10"
        >
          <div aria-hidden className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
            <GraduationCap size={20} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-accent-light/20 font-outline">{t.sections.formation}</h2>
        </motion.div>
        <div className="space-y-8 ml-5">
          {EDUCATIONS.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4"
            >
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.1, duration: 0.4 }}
                className="h-10 w-1 bg-accent/30 rounded-full origin-top"
              />
              <div>
                <span className="text-accent font-black text-xs tracking-widest uppercase">{edu.period}</span>
                <h3 className="text-lg font-black uppercase leading-tight mt-1">{edu.degree[lang]}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
