import { useState } from 'react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calculator, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface FeeEstimatorProps {
  onOpenAdmissions: () => void;
}

export function FeeEstimatorSection({ onOpenAdmissions }: FeeEstimatorProps) {
  const [grade, setGrade] = useState<'junior' | 'senior' | 'international'>('junior');
  const [boardingType, setBoardingType] = useState<'full' | 'weekly'>('full');
  const [scholarship, setScholarship] = useState<number>(0);

  // Fee calculation logic (in INR Lakhs per annum approx)
  const getBaseFee = () => {
    let base = 4.5; // Lakhs
    if (grade === 'senior') base = 5.2;
    if (grade === 'international') base = 6.5;

    if (boardingType === 'weekly') base -= 0.4;

    const discountAmount = (base * scholarship) / 100;
    const finalAmount = Math.max(2.0, base - discountAmount);

    return {
      tuitionAndBoarding: (finalAmount * 0.7).toFixed(2),
      activitiesAndSports: (finalAmount * 0.2).toFixed(2),
      laundryAndMedical: (finalAmount * 0.1).toFixed(2),
      total: finalAmount.toFixed(2),
    };
  };

  const fee = getBaseFee();

  return (
    <section id="fee-estimator" className="py-24 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal direction="up">
            <Badge variant="gold" icon={<Calculator className="w-3.5 h-3.5" />}>
              Transparent Fee Structure
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
              Interactive Fee & <span className="text-gradient-gold">Scholarship Estimator</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
              Calculate estimated annual tuition, boarding, sports academies, and available merit-based scholarship discounts with zero hidden charges.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right">
              <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
                {/* 1. Grade Level */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    1. Select Student Grade & Curriculum
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'junior', label: 'Grades IV - VIII (CBSE)' },
                      { id: 'senior', label: 'Grades IX - XII (CBSE)' },
                      { id: 'international', label: 'Cambridge (IGCSE/A-Level)' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setGrade(item.id as any)}
                        className={`p-3 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
                          grade === item.id
                            ? 'bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-400 ring-2 ring-amber-500/20'
                            : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Boarding Option */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    2. Select Residential Boarding Option
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setBoardingType('full')}
                      className={`p-3.5 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
                        boardingType === 'full'
                          ? 'bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-400 ring-2 ring-amber-500/20'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                      }`}
                    >
                      <div className="font-extrabold text-sm">Full Boarding (7 Days)</div>
                      <div className="text-[11px] font-normal opacity-80 mt-0.5">Includes weekend activity trips & organic meals</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBoardingType('weekly')}
                      className={`p-3.5 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
                        boardingType === 'weekly'
                          ? 'bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-400 ring-2 ring-amber-500/20'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                      }`}
                    >
                      <div className="font-extrabold text-sm">Weekly Boarding (5 Days)</div>
                      <div className="text-[11px] font-normal opacity-80 mt-0.5">Ideal for regional Dehradun / NCR families</div>
                    </button>
                  </div>
                </div>

                {/* 3. Merit Scholarship Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      3. Academic / Sports Merit Scholarship Eligibility
                    </label>
                    <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400">
                      {scholarship}% Discount
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    step="5"
                    value={scholarship}
                    onChange={(e) => setScholarship(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>Standard</span>
                    <span>10% Merit</span>
                    <span>20% National Sports</span>
                    <span>30% Defense Wards</span>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Fee Breakdown Display */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left">
              <Card className="bg-slate-900 text-white border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">
                      Estimated Annual Fee
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-white mt-1">
                      ₹ {fee.total} <span className="text-sm font-semibold text-slate-400">Lakhs / year</span>
                    </h3>
                  </div>
                  <Badge variant="gold" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                    All Inclusive
                  </Badge>
                </div>

                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Tuition, Air-Conditioned Dorms & Organic Meals:</span>
                    <span className="font-bold text-white">₹ {fee.tuitionAndBoarding} Lakhs</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Equestrian, Shooting Range, Swimming & STEM:</span>
                    <span className="font-bold text-white">₹ {fee.activitiesAndSports} Lakhs</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Laundry, Pastoral Care & Infirmary Health:</span>
                    <span className="font-bold text-white">₹ {fee.laundryAndMedical} Lakhs</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                  <span>
                    Note: Fee breakdown is indicative for the 2026-27 session. Includes uniform kit, textbooks, Apple learning materials, and laundry.
                  </span>
                </div>

                <Button
                  variant="gold"
                  size="lg"
                  onClick={onOpenAdmissions}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full"
                >
                  Request Official Fee Structure & Admission Form
                </Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
