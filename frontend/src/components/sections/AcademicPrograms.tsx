import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { ACADEMIC_PROGRAMS } from '@/data/schoolData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, Sparkles, Globe, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

interface AcademicProgramsProps {
  onOpenAdmissions: () => void;
}

export function AcademicPrograms({ onOpenAdmissions }: AcademicProgramsProps) {
  const [activeTab, setActiveTab] = useState(ACADEMIC_PROGRAMS[0].id);

  const activeProgram = ACADEMIC_PROGRAMS.find((p) => p.id === activeTab) || ACADEMIC_PROGRAMS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles;
      case 'BookOpen':
        return BookOpen;
      case 'Globe':
        return Globe;
      case 'Heart':
        return Heart;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="academics" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal direction="up">
            <Badge variant="gold" icon={<BookOpen className="w-3.5 h-3.5" />}>
              Academic Excellence Pathways
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
              Dual Board Accreditation: <span className="text-gradient-gold">CBSE & Cambridge</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Empowering students with choice: Select CBSE for national competitive rigor (JEE, NEET, CUET) or Cambridge (IGCSE & A-Levels) for global Ivy League university admissions.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Selection Navigation */}
        <ScrollReveal delay={0.2} direction="up">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10 p-2 bg-slate-800/80 rounded-2xl border border-slate-700 max-w-4xl mx-auto">
            {ACADEMIC_PROGRAMS.map((program) => {
              const Icon = getIcon(program.icon);
              const isActive = activeTab === program.id;
              return (
                <button
                  key={program.id}
                  onClick={() => setActiveTab(program.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{program.title.split('(')[0]}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tab Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-slate-800/90 border-slate-700 p-8 sm:p-10 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30">
                      {activeProgram.grade}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs border border-blue-500/30">
                      {activeProgram.board}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {activeProgram.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeProgram.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Curriculum Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeProgram.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Button variant="gold" size="md" onClick={onOpenAdmissions} icon={<ArrowRight className="w-4 h-4" />}>
                      Download Syllabus & Prospectus
                    </Button>
                  </div>
                </div>

                {/* Right Decorative Graphic */}
                <div className="lg:col-span-5 hidden lg:block">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                    <img
                      src={
                        activeProgram.id === 'junior'
                          ? 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
                          : activeProgram.id === 'international-cie'
                          ? 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
                          : 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
                      }
                      alt={activeProgram.title}
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
