import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { FAQS } from '@/data/schoolData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { HelpCircle, ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faqs" className="py-24 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <ScrollReveal direction="up">
            <Badge variant="gold" icon={<HelpCircle className="w-3.5 h-3.5" />}>
              Parent Queries Answered
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
              Clear answers regarding boarding life, entrance assessment, dual curricula, and student safety.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <ScrollReveal key={faq.id} delay={index * 0.08} direction="up">
                <Card
                  glass={false}
                  hoverEffect={false}
                  className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-0 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[11px] font-bold uppercase tracking-wider">
                        {faq.category}
                      </span>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">
                        {faq.question}
                      </h4>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
