import { motion } from 'motion/react';
import { VALUES } from '../data';
import { useLanguage } from '../i18n';
import { Sparkles, GraduationCap, ShieldCheck, Heart, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = { Sparkles, GraduationCap, ShieldCheck, Heart };

export default function ValuesSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="mt-10 sm:mt-16">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-6 sm:mb-10"
      >
        <div aria-hidden className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
          <Heart size={20} />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-accent-light/20 font-outline">{t.sections.values}</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl text-white/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8"
      >
        {t.valuesIntro}
      </motion.p>

      <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
        {VALUES.map((value, idx) => {
          const Icon = ICONS[value.icon] || Sparkles;
          return (
            <motion.div
              key={value.title.en}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-white/5 bg-white/[0.02] hover:border-accent-light/30 p-5 transition-colors"
            >
              <div aria-hidden className="h-9 w-9 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-4">
                <Icon size={18} />
              </div>
              <h3 className="text-white/90 font-bold mb-1.5">{value.title[lang]}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{value.description[lang]}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
