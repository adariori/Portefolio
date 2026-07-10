import { motion } from 'motion/react';
import { PROFILE } from '../data';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
      <div className="space-y-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-0"
        >
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tight uppercase leading-[0.75] mb-2 flex flex-col md:flex-row gap-4">
            <span className="font-gothic text-white">{PROFILE.firstName}</span>
            <span className="font-outline text-accent opacity-80">{PROFILE.lastName}</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/60 font-outline text-3xl tracking-wide mt-4 uppercase opacity-50"
        >
          {PROFILE.title}
        </motion.p>
      </div>

      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 45 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        className="relative group cursor-pointer mr-12 mt-8 md:mt-0"
      >
        <div className="h-40 w-40 bg-accent overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_70px_rgba(37,99,235,0.6)] transition-all">
          <motion.img 
            initial={{ rotate: -45, scale: 1.2 }}
            animate={{ rotate: -45, scale: 1.2 }}
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" 
            alt="Profile" 
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 border-4 border-white/20 pointer-events-none" />
      </motion.div>
    </header>
  );
}
