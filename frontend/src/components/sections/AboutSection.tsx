import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Compass, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenAdmissions: () => void;
}

export function AboutSection({ onOpenAdmissions }: AboutSectionProps) {
  const pillars = [
    {
      title: "Gurukul Ethos & Discipline",
      desc: "Cultivating respect, emotional intelligence, mindfulness, and daily meditation routines in students.",
      icon: Compass,
    },
    {
      title: "Apple & Global STEM Pedagogy",
      desc: "100% smart interactive classrooms with Apple iPad training, AI coding, and 3D printing labs.",
      icon: Sparkles,
    },
    {
      title: "Pastoral & Residential Care",
      desc: "Warm house parents, 24/7 infirmary with residential doctors, and organic farm-to-table dining.",
      icon: HeartHandshake,
    },
    {
      title: "Olympic Sports & Skill Academies",
      desc: "Equestrian horse riding academy, 10m precision air rifle gallery, and all-weather heated pool.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                  alt="Tula's International School Campus & Students"
                  className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel rounded-2xl bg-slate-900/80 text-white border border-white/20">
                  <div className="text-amber-400 font-extrabold text-sm uppercase tracking-wider mb-1">
                    The TIS Promise
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    "We do not merely educate minds; we shape resilient, empathetic global leaders anchored in timeless character."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-6 hidden sm:block">
              <ScrollReveal delay={0.2} direction="down">
                <div className="p-4 glass-panel rounded-2xl bg-amber-500 text-slate-950 font-black shadow-xl border border-amber-300 flex flex-col items-center">
                  <span className="text-3xl font-black leading-none">35+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-slate-900">
                    Years Group Legacy
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left">
              <Badge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Welcome to Tula's International School
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
                Where Himalayan Serenity Meets <span className="text-gradient-gold">World-Class Excellence</span>
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                Spread across 22 acres of pollution-free lush greenery in Dehradun, Tula’s International School offers a harmonious blend of academic brilliance, Olympic sports, and holistic character building.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <ScrollReveal key={pillar.title} delay={idx * 0.1} direction="up">
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-500/30 transition-all">
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {pillar.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.4} direction="up">
              <div className="pt-4 flex items-center gap-4">
                <Button variant="gold" size="md" onClick={onOpenAdmissions}>
                  Schedule Campus Visit
                </Button>
                <a href="#academics">
                  <Button variant="outline" size="md">
                    Explore Academics
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
