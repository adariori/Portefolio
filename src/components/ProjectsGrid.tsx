import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { useLanguage } from '../i18n';
import { Folder, FolderGit2, ArrowUpRight, Github } from 'lucide-react';

export default function ProjectsGrid() {
  const { lang, t } = useLanguage();

  return (
    <section id="projets" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-6 sm:mb-10"
      >
        <div aria-hidden className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
          <Folder size={20} />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-accent-light/20 font-outline">{t.sections.projects}</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl text-white/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8"
      >
        {t.projectsIntro}
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 ml-5">
        {PROJECTS.map((proj, idx) => {
          const primaryUrl = proj.demoUrl ?? proj.repoUrl;
          const showRepoButton = proj.repoUrl && proj.demoUrl;
          return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="group relative rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-accent-light/30 transition-colors"
          >
            {/* Stretched primary link — opens the live demo (falls back to the repo) */}
            <a
              href={primaryUrl}
              target={primaryUrl ? '_blank' : undefined}
              rel={primaryUrl ? 'noopener noreferrer' : undefined}
              aria-label={t.projectAria.view(proj.name)}
              className="absolute inset-0 z-0"
            />

            {showRepoButton && (
              <a
                href={proj.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.projectAria.viewCode(proj.name)}
                className="absolute top-3 right-3 z-10 h-8 w-8 rounded-lg bg-bg-dark/80 backdrop-blur flex items-center justify-center text-white/60 hover:text-white hover:bg-bg-dark transition-colors"
              >
                <Github size={16} />
              </a>
            )}

            {/* Thumbnail — real screenshot if `image` is set, themed placeholder otherwise */}
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-card-dark to-bg-dark pointer-events-none">
              {proj.image ? (
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div aria-hidden className="h-full w-full flex items-center justify-center">
                  <FolderGit2 className="text-accent-light/20 group-hover:text-accent-light/30 transition-colors" size={36} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/10 to-transparent" />
            </div>

            <div className="p-4 pointer-events-none">
              <h4 className="text-white/90 font-bold group-hover:text-white transition-colors flex items-center gap-1">
                {proj.name}
                <ArrowUpRight
                  aria-hidden
                  size={16}
                  className="text-accent-light opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
                />
              </h4>
              <p className="text-white/55 text-sm mt-1 leading-relaxed">{proj.description[lang]}</p>
              {proj.tags && proj.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-wider text-accent-light/70 bg-accent/10 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}
