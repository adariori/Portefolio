import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

// A small accent-colored ring that trails the real cursor with a spring lag,
// and blooms open over anything clickable. Desktop/mouse only — on touch
// devices this never mounts, so nothing is hidden or broken for phones.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;
    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, .cursor-pointer'));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: springX, top: springY }}
      animate={{
        width: hovering ? 48 : 20,
        height: hovering ? 48 : 20,
        backgroundColor: hovering ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="pointer-events-none fixed z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent mix-blend-difference"
    />
  );
}
