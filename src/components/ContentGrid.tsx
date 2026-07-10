import { motion } from 'motion/react';
import { EXPERIENCES, EDUCATIONS, PROJECTS } from '../data';
import { Briefcase, GraduationCap, Folder } from 'lucide-react';

export default function ContentGrid() {
  return (
    <div className="space-y-16">
      {/* Expériences */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
            <Briefcase size={20} />
          </div>
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white/20 font-outline">Expériences</h2>
        </div>
        <div className="space-y-10 pl-4 border-l-2 border-accent/20 ml-5">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[27px] top-1 h-5 w-5 rounded-full bg-accent border-[3px] border-bg-dark" />
              <h3 className="text-xl font-black uppercase leading-tight">{exp.role}</h3>
              <p className="text-white/40 font-mono text-[10px] tracking-widest mt-1 uppercase">{exp.company}</p>
              <p className="text-white/30 text-[10px] uppercase tracking-tighter mt-1">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
            <Folder size={20} />
          </div>
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white/20 font-outline">Projects</h2>
        </div>
        <div className="space-y-6 ml-5">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group cursor-pointer"
            >
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all">
                <div className="h-3 w-3 rounded-full border-2 border-accent mt-2" />
                <div>
                  <h4 className="text-white/90 font-bold group-hover:text-white transition-colors">{proj.name}</h4>
                  <p className="text-white/30 text-sm mt-1 leading-relaxed">{proj.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Formation */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
            <GraduationCap size={20} />
          </div>
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white/20 font-outline">Formation</h2>
        </div>
        <div className="space-y-8 ml-5">
          {EDUCATIONS.map((edu, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-4"
            >
              <div className="h-10 w-1 bg-accent/30 rounded-full" />
              <div>
                <span className="text-accent font-black text-xs tracking-widest uppercase">{edu.period}</span>
                <h3 className="text-lg font-black uppercase leading-tight mt-1">{edu.degree}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
