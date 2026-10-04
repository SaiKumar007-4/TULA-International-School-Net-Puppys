import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { QUICK_STATS } from '@/data/schoolData';
import { Trophy, Trees, Users, Activity, Medal } from 'lucide-react';

const icons = [Trophy, Trees, Users, Activity, Medal];

export function QuickStats() {
  return (
    <section className="py-12 bg-slate-900 text-white relative z-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {QUICK_STATS.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <ScrollReveal key={stat.label} delay={index * 0.1} direction="up">
                <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {stat.sub}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
