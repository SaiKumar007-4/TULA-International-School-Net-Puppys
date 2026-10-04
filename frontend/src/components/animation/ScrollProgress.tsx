import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[10000] bg-slate-200/30 dark:bg-slate-800/30 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]"
        style={{ width: `${progress}%` }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      />
    </div>
  );
}
