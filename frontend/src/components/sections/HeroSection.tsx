import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Compass, Award } from 'lucide-react';
import { SCHOOL_INFO } from '@/data/schoolData';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface HeroSectionProps {
  onOpenAdmissions: () => void;
}

export function HeroSection({ onOpenAdmissions }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=80"
          alt="Tula's International School Campus"
          className="w-full h-full object-cover object-center scale-105 filter brightness-95"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50 dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Decorative Floating Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="gold" icon={<Award className="w-4 h-4 text-amber-400" />}>
                Ranked Top Co-Ed Boarding School in Dehradun
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]"
            >
              Modern Education <br />
              <span className="text-gradient-gold">Rooted in Gurukul Values</span>
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Welcome to {SCHOOL_INFO.name}. A 22-acre pristine sanctuary offering dual CBSE & Cambridge (CIE) academic pathways, Olympic-grade sports, and 24/7 pastoral residential care.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="gold"
                size="lg"
                onClick={onOpenAdmissions}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Inquire Admissions 2026-27
              </Button>

              <a href="#virtual-tour">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Compass className="w-5 h-5 text-amber-400" />}
                  className="border-white/30 text-white hover:bg-white/10 hover:border-amber-400"
                >
                  360° Virtual Campus Tour
                </Button>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CBSE & Cambridge Board</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Apple Smart Classrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Horse Riding & Shooting Range</span>
              </div>
            </motion.div>
          </div>

          {/* Floating Feature Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-6 rounded-3xl border border-white/20 bg-slate-900/60 backdrop-blur-xl shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Campus Highlights
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                    100%
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">University Acceptance</div>
                    <div className="text-xs text-slate-400">Top Global Ivy League & IITs</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">
                    8:1
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Mentorship Ratio</div>
                    <div className="text-xs text-slate-400">Individualized Pastoral Care</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                    22+
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Acre Himalayan Campus</div>
                    <div className="text-xs text-slate-400">Organic Farming & Air Rifle Range</div>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenAdmissions}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
              >
                <span>Request Prospectus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
