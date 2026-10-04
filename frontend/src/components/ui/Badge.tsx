import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'navy' | 'emerald' | 'outline';
  icon?: ReactNode;
  className?: string;
}

export function Badge({ children, variant = 'gold', icon, className }: BadgeProps) {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors';

  const variants = {
    gold: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 dark:border-amber-400/30',
    navy: 'bg-blue-900/10 text-blue-900 dark:text-blue-300 border border-blue-900/20 dark:border-blue-700/40',
    emerald: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20',
    outline: 'bg-transparent text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700',
  };

  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], className))}>
      {icon && <span className="text-current">{icon}</span>}
      {children}
    </span>
  );
}
