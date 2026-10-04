import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  glass = true,
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300 relative overflow-hidden';
  const glassStyles = glass ? 'glass-panel' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm';
  const hoverStyles = hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 hover:border-amber-500/40 dark:hover:border-amber-400/40' : '';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={twMerge(clsx(baseStyles, glassStyles, hoverStyles, className))}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
