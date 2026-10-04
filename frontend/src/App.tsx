import { useState } from 'react';
import { CustomCursor } from '@/components/animation/CustomCursor';
import { ScrollProgress } from '@/components/animation/ScrollProgress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { HeroSection } from '@/components/sections/HeroSection';
import { QuickStats } from '@/components/sections/QuickStats';
import { AboutSection } from '@/components/sections/AboutSection';
import { AcademicPrograms } from '@/components/sections/AcademicPrograms';
import { CampusLife } from '@/components/sections/CampusLife';
import { VirtualTour } from '@/components/sections/VirtualTour';
import { FeeEstimatorSection } from '@/components/sections/FeeEstimatorSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { AdmissionInquiryModal } from '@/components/sections/AdmissionInquiryModal';

export default function App() {
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);

  const openAdmissions = () => setIsAdmissionsModalOpen(true);
  const closeAdmissions = () => setIsAdmissionsModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-amber-500 selection:text-slate-950 custom-cursor-active">
      {/* 1. Standout Feature A: Custom Cursor */}
      <CustomCursor />

      {/* 2. Standout Feature D: Scroll Progress Bar */}
      <ScrollProgress />

      {/* 3. Header & Navbar (with Standout Feature C: Theme Switcher) */}
      <Navbar onOpenAdmissions={openAdmissions} />

      {/* 4. Main Page Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection onOpenAdmissions={openAdmissions} />

        {/* Quick Achievement Stats */}
        <QuickStats />

        {/* About TIS & Gurukul Ethos (with Standout Feature B: Scroll Reveal) */}
        <AboutSection onOpenAdmissions={openAdmissions} />

        {/* Dual Academic Pathways: CBSE & Cambridge */}
        <AcademicPrograms onOpenAdmissions={openAdmissions} />

        {/* 22-Acre Campus Life & Facilities */}
        <CampusLife />

        {/* Interactive Virtual Campus Tour */}
        <VirtualTour onOpenAdmissions={openAdmissions} />

        {/* Interactive Fee & Scholarship Estimator */}
        <FeeEstimatorSection onOpenAdmissions={openAdmissions} />

        {/* Testimonials & Alumnus Stories */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Admission Inquiry Modal */}
      <AdmissionInquiryModal
        isOpen={isAdmissionsModalOpen}
        onClose={closeAdmissions}
      />
    </div>
  );
}
