import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Loader from './components/Loader';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import ContentGrid from './components/ContentGrid';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsGrid from './components/SkillsGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { PROFILE } from './data';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-bg-dark text-white selection:bg-accent selection:text-black font-sans">
      {/* Skip-link: invisible until keyboard-focused, lets keyboard/screen-reader
          users jump straight past the loader/header to the content. */}
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 focus:translate-y-0 bg-accent text-white text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-transform"
      >
        Aller au contenu principal
      </a>

      <AnimatePresence mode="wait">
        {loading && <Loader name={`${PROFILE.firstName} ${PROFILE.lastName}`} />}
      </AnimatePresence>

      <motion.div
        id="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-20 md:pt-20"
      >
        <Header />
        <InfoSection />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 sm:gap-12 lg:gap-16">
          <ContentGrid />
          <SkillsGrid />
        </div>

        <div className="mt-10 sm:mt-16">
          <ProjectsGrid />
        </div>

        <ContactForm />

        <Footer />
      </motion.div>
    </div>
  );
}
