import { motion } from 'motion/react';
import { SKILLS } from '../data';
import * as LucideIcons from 'lucide-react';

export default function SkillsGrid() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
          <LucideIcons.Settings size={20} />
        </div>
        <h2 className="text-5xl font-black uppercase tracking-tighter text-white/20 font-outline">Compétences</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-4 px-2">
        {SKILLS.map((skill, idx) => {
          const Icon = (LucideIcons as any)[skill.icon || 'Code'];
          return (
            <motion.div
              key={skill.name}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative h-28 w-28 mb-4 flex items-center justify-center">
                {/* Progress Circle */}
                <svg className="h-full w-full -rotate-90">
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
                    whileInView={{ strokeDashoffset: 301 - (301 * skill.percentage) / 100 }}
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
