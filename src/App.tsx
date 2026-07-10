import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Loader from './components/Loader';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import ContentGrid from './components/ContentGrid';
import SkillsGrid from './components/SkillsGrid';
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
    <div className="min-h-screen bg-bg-dark text-white selection:bg-accent selection:text-black font-sans">
      <AnimatePresence mode="wait">
        {loading && <Loader name={`${PROFILE.firstName} ${PROFILE.lastName}`} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="max-w-6xl mx-auto px-6 pt-12 pb-20 md:pt-20"
      >
        <Header />
        <InfoSection />
        
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16">
          <ContentGrid />
          <SkillsGrid />
        </div>

        <Footer />
      </motion.div>
    </div>
  );
}
