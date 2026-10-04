import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { TESTIMONIALS } from '@/data/schoolData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Star, Quote, MessageSquare } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal direction="up">
            <Badge variant="gold" icon={<MessageSquare className="w-3.5 h-3.5" />}>
              Voices of Trust & Success
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
              What Parents & Alumni Say About <span className="text-gradient-gold">TIS</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Hear directly from parents and top alumni studying across Imperial College London, IITs, and leading global universities.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15} direction="up">
              <Card className="h-full bg-slate-800/80 border-slate-700 p-6 flex flex-col justify-between relative overflow-hidden group">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-700/40 group-hover:text-amber-500/20 transition-colors pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-700 flex items-center gap-3.5 relative z-10">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/50"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-white">{item.name}</h4>
                    <p className="text-xs text-amber-400">{item.role}</p>
                    <p className="text-[11px] text-slate-400">{item.location}</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
