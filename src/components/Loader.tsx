import { motion } from 'motion/react';

// Fake boot log lines — reuses the "bash window" motif already established
// in InfoSection (cat about.txt) instead of introducing a second, unrelated
// animation style. Each line is a status a network/IT student would recognize.
const BOOT_LINES = [
  { type: 'cmd' as const, text: 'boot --init' },
  { type: 'ok' as const, text: 'kernel modules loaded' },
  { type: 'ok' as const, text: 'filesystem mounted' },
  { type: 'ok' as const, text: 'network link established' },
  { type: 'ok' as const, text: 'portfolio.service started' },
  { type: 'cmd' as const, text: 'whoami' },
];

export default function Loader({ name }: { name: string }) {
  const lineDelay = (i: number) => 0.15 + i * 0.18;
  const nameDelay = lineDelay(BOOT_LINES.length - 1) + 0.25;
  const barDelay = 0.15;
  const barDuration = 1.55;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(4px)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark text-white overflow-hidden px-4"
      role="status"
      aria-label={`Chargement du portfolio de ${name}`}
    >
      {/* CRT scanline sweep — ambient texture, kept subtle in the background */}
      <motion.div
        aria-hidden
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent"
      />

      <motion.div
        initial={{ y: 16, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm sm:max-w-md bg-card-dark rounded-xl border border-white/10 overflow-hidden shadow-2xl"
        aria-hidden
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
          <span className="h-3 w-3 rounded-full bg-red-500/50" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/50" />
          <span className="h-3 w-3 rounded-full bg-green-500/50" />
          <span className="ml-2 font-mono text-[10px] text-white/30 uppercase tracking-widest">bash — boot.sh</span>
        </div>

        <div className="p-5 font-mono text-xs sm:text-sm space-y-1.5">
          {BOOT_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: lineDelay(i), duration: 0.35, ease: 'easeOut' }}
            >
              {line.type === 'cmd' ? (
                <span className="text-white/50">
                  <span className="text-accent-light/70">$</span> {line.text}
                </span>
              ) : (
                <span className="text-white/70">
                  <span className="text-accent-light">[ok]</span> {line.text}
                </span>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: nameDelay, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="pt-1 text-base sm:text-lg font-black uppercase tracking-tight text-accent-light font-outline terminal-cursor"
          >
            {name}
          </motion.div>

          <div className="pt-3">
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: barDelay, duration: barDuration, ease: 'easeInOut' }}
                className="h-full bg-accent-light"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
