import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import Loader from './components/Loader';
import StickyNav from './components/StickyNav';
import BackToTop from './components/BackToTop';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import ContentGrid from './components/ContentGrid';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsGrid from './components/SkillsGrid';
import CertificationsGrid from './components/CertificationsGrid';
import ValuesSection from './components/ValuesSection';
import ServicesSection from './components/ServicesSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { PROFILE } from './data';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ties the loader to real page-load completion instead of a blind fixed
    // delay: MIN_DISPLAY lets the boot animation finish even on a fast
    // connection, while waiting for `load` avoids hiding the loader before
    // images/assets are actually ready on a slow one. FALLBACK caps the
    // wait so the loader can never hang indefinitely if `load` never fires.
    const MIN_DISPLAY = 1700;
    const FALLBACK = 5000;
    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(MIN_DISPLAY - (Date.now() - start), 0);
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
    }
    const fallback = setTimeout(() => setLoading(false), FALLBACK);

    return () => {
      window.removeEventListener('load', finish);
      clearTimeout(fallback);
    };
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

      {!loading && <StickyNav />}
      {!loading && <BackToTop />}

      <motion.div
        id="main-content"
        initial={{ opacity: 0 }}
        // Tied to the real `loading` state now that Loader's duration is
        // dynamic — a fixed delay would drift out of sync with it.
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-20 md:pt-20"
      >
        <Header />
        <InfoSection />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 sm:gap-12 lg:gap-16">
          <ContentGrid />
          <SkillsGrid />
        </div>

        <div className="mt-10 sm:mt-16">
          <CertificationsGrid />
        </div>

        <ValuesSection />

        <ServicesSection />

        <div className="mt-10 sm:mt-16">
          <ProjectsGrid />
        </div>

        <ContactForm />

        <Footer />
      </motion.div>

      <Analytics />
    </div>
  );
}
