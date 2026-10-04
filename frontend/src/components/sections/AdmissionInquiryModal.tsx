import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Send } from 'lucide-react';

interface AdmissionInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdmissionInquiryModal({ isOpen, onClose }: AdmissionInquiryModalProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    gradeApplying: 'Grade V',
    curriculum: 'CBSE',
    city: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d97706', '#f59e0b', '#2563eb', '#10b981'],
      });
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      studentName: '',
      gradeApplying: 'Grade V',
      curriculum: 'CBSE',
      city: '',
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={isSubmitted ? handleReset : onClose}
      title={isSubmitted ? 'Inquiry Submitted Successfully!' : 'Admission Inquiry 2026-27'}
      subtitle={
        isSubmitted
          ? 'Our Senior Admissions Counselor will reach out to you within 24 hours.'
          : "Fill in the details below to receive the official TULA'S Prospectus & Fee Structure."
      }
    >
      {isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30 animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            Thank you, {formData.parentName || 'Parent'}!
          </h4>

          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            Your inquiry for <span className="font-bold text-amber-500">{formData.studentName || 'your ward'}</span> ({formData.gradeApplying}, {formData.curriculum}) has been registered.
          </p>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-400 max-w-md mx-auto">
            <span className="font-bold">Next Steps:</span> You will receive an SMS and Email with the downloadable PDF Prospectus and Campus Virtual Tour Link.
          </div>

          <div className="pt-4">
            <Button variant="gold" size="md" onClick={handleReset} className="w-full">
              Close Window
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Parent / Guardian Name *
              </label>
              <input
                type="text"
                required
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                placeholder="e.g. Rajesh Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="parent@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                City / Current Location *
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g. New Delhi / Dubai"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Student Name *
              </label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                placeholder="Child's Name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Applying For Grade
              </label>
              <select
                value={formData.gradeApplying}
                onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              >
                <option value="Grade IV">Grade IV</option>
                <option value="Grade V">Grade V</option>
                <option value="Grade VI">Grade VI</option>
                <option value="Grade VII">Grade VII</option>
                <option value="Grade VIII">Grade VIII</option>
                <option value="Grade IX">Grade IX</option>
                <option value="Grade X">Grade X</option>
                <option value="Grade XI">Grade XI</option>
                <option value="Grade XII">Grade XII</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Preferred Curriculum
              </label>
              <select
                value={formData.curriculum}
                onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              >
                <option value="CBSE Board">CBSE Board</option>
                <option value="Cambridge CIE">Cambridge (IGCSE / A-Levels)</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="gold"
              size="lg"
              disabled={isSubmitting}
              icon={<Send className="w-4 h-4" />}
              className="w-full"
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Inquiry & Receive Prospectus'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
