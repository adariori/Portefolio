import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../data';
import { useLanguage } from '../i18n';
import { Award } from 'lucide-react';

export default function CertificationsGrid() {
  const { lang, t } = useLanguage();

  return (
    <section id="certifications" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-6 sm:mb-10"
      >
        <div aria-hidden className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
          <Award size={20} />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-accent-light/20 font-outline">{t.sections.certifications}</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl text-white/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 ml-5"
      >
        {t.certificationsIntro}
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 ml-5">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={cert.name.en}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-white/5 bg-white/[0.02] hover:border-accent-light/30 p-5 transition-colors"
          >
            <h3 className="text-white/90 font-bold mb-1">{cert.name[lang]}</h3>
            {cert.issuer && (
              <p className="text-accent-light/80 text-xs mb-1">{cert.issuer}</p>
            )}
            <p className="text-white/50 text-xs font-mono uppercase tracking-widest mb-3">
              {cert.period}
              {cert.mention && ` · ${cert.mention[lang]}`}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] font-mono uppercase tracking-wider text-accent-light/70 bg-accent/10 px-2 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
