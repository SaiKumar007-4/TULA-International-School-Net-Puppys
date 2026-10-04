import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { VIRTUAL_TOUR_SPOTS } from '@/data/schoolData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Eye, Sparkles, ArrowRight } from 'lucide-react';

interface VirtualTourProps {
  onOpenAdmissions: () => void;
}

export function VirtualTour({ onOpenAdmissions }: VirtualTourProps) {
  const [activeSpot, setActiveSpot] = useState(VIRTUAL_TOUR_SPOTS[0]);

  return (
    <section id="virtual-tour" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal direction="up">
            <Badge variant="gold" icon={<Eye className="w-3.5 h-3.5" />}>
              Interactive 360° Campus Experience
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
              Explore Our <span className="text-gradient-gold">22-Acre Dehradun Campus</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Click on any hotspot location below to preview smart classrooms, equestrian paddocks, heated pool, and residential dormitories.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Hotspot Canvas */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
                  alt="TIS Aerial Campus Map View"
                  className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/30" />

                {/* Hotspot Pins */}
                {VIRTUAL_TOUR_SPOTS.map((spot) => {
                  const isSelected = activeSpot.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setActiveSpot(spot)}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                    >
                      <span className="relative flex h-8 w-8 items-center justify-center">
                        {isSelected && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                        )}
                        <span
                          className={`relative inline-flex rounded-full p-2 text-slate-950 shadow-lg transition-all ${
                            isSelected
                              ? 'bg-amber-400 scale-125 ring-4 ring-amber-400/40'
                              : 'bg-white hover:bg-amber-300'
                          }`}
                        >
                          <MapPin className="w-4 h-4" />
                        </span>
                      </span>

                      {/* Tooltip on hover */}
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none border border-slate-700">
                        {spot.title}
                      </span>
                    </button>
                  );
                })}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 glass-panel rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <span className="text-slate-300 font-medium">
                    Click pin to view spot details
                  </span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> 4 Key Zones Active
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hotspot Info Panel */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpot.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-800/90 border-slate-700 p-6 sm:p-8 space-y-5">
                    <div className="relative h-48 rounded-xl overflow-hidden border border-slate-700">
                      <img
                        src={activeSpot.image}
                        alt={activeSpot.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    </div>

                    <div>
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Zone Detail
                      </span>
                      <h3 className="text-2xl font-extrabold text-white mt-1">
                        {activeSpot.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                        {activeSpot.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-700 flex flex-col gap-3">
                      <Button
                        variant="gold"
                        size="md"
                        onClick={onOpenAdmissions}
                        icon={<ArrowRight className="w-4 h-4" />}
                        className="w-full"
                      >
                        Book In-Person Campus Walkthrough
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
