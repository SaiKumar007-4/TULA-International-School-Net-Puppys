import { useState } from 'react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { CAMPUS_FACILITIES } from '@/data/schoolData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Compass, Check } from 'lucide-react';

export function CampusLife() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Sports & Adventure', 'Sports & Discipline', 'Aquatics', 'Technology', 'Boarding Life', 'Sustainability'];

  const filteredFacilities =
    selectedCategory === 'All'
      ? CAMPUS_FACILITIES
      : CAMPUS_FACILITIES.filter((item) => item.category === selectedCategory);

  return (
    <section id="campus-life" className="py-24 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal direction="up">
            <Badge variant="gold" icon={<Compass className="w-3.5 h-3.5" />}>
              22-Acre Eco-Friendly Sanctuary
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
              World-Class Facilities for <span className="text-gradient-gold">Holistic Growth</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
              From galloping on thoroughbred horses to target shooting and coding AI bots in Apple labs, life at TIS inspires leadership every single day.
            </p>
          </ScrollReveal>
        </div>

        {/* Category Filters */}
        <ScrollReveal delay={0.1} direction="up">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-slate-950 shadow-md font-bold'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility, index) => (
            <ScrollReveal key={facility.id} delay={index * 0.1} direction="up">
              <Card className="h-full flex flex-col group overflow-hidden bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <div className="relative h-52 -mx-6 -mt-6 mb-5 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 text-amber-400 text-[11px] font-bold border border-amber-500/30 backdrop-blur-md">
                    {facility.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  {facility.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 flex-grow leading-relaxed">
                  {facility.description}
                </p>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {facility.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      <Check className="w-3 h-3 text-amber-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
