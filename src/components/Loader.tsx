import { motion } from 'motion/react';

export default function Loader({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-dark text-white"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center"
      >
        <div className="mb-4 h-1 w-32 bg-white/10 overflow-hidden rounded-full">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full bg-accent"
          />
        </div>
        <h1 className="text-4xl font-black tracking-tighter uppercase sm:text-6xl text-accent font-gothic">
          {name}
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 font-mono text-sm tracking-widest text-white/40 uppercase"
        >
          System Initializing...
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
