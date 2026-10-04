import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, GraduationCap, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { SCHOOL_INFO, NAV_LINKS } from '@/data/schoolData';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/Button';

interface NavbarProps {
  onOpenAdmissions: () => void;
}

export function Navbar({ onOpenAdmissions }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Announcement Top Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border border-amber-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Admissions 2026-27 Open
            </span>
            <span className="text-slate-400">CBSE & Cambridge (CIE) Co-Ed Boarding School</span>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> {SCHOOL_INFO.phone.split('/')[0]}
            </a>
            <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" /> {SCHOOL_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg py-3'
            : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-200/50 dark:border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-amber-600 dark:from-blue-600 dark:to-amber-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white leading-none">
                TULA'S
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-widest uppercase">
                International School
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button
              variant="gold"
              size="sm"
              onClick={onOpenAdmissions}
              icon={<ArrowRight className="w-4 h-4" />}
              className="hidden sm:inline-flex"
            >
              Apply Now
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-500 py-2 border-b border-slate-100 dark:border-slate-800/60"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <Button
                variant="gold"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions();
                }}
                className="w-full"
              >
                Inquire & Apply Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
