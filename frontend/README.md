# Tula's International School (TIS) - Homepage Redesign

A modern, animated, high-converting redesign of the Tula's International School homepage ([tis.edu.in](https://tis.edu.in/)) focusing on fluid 60 FPS animations, mobile responsiveness, and premium educational brand identity.

---

## 🚀 Live Demo & Repository
- **Live Deployment:** [Deploy to Vercel / Netlify / GitHub Pages]
- **Repository:** https://github.com/SaiKumar007-4/TULA-International-School-Net-Puppys

---

## 🛠️ Tech Stack & Dependencies
- **Core Framework:** React 19 + TypeScript + Vite
- **Styling & Design System:** Tailwind CSS v4 + Vanilla CSS Custom Tokens
- **Animations:** Framer Motion (GPU Accelerated 60 FPS)
- **Icons:** Lucide React
- **Micro-Interactions:** Canvas Confetti

---

## ✨ Standout Features Implemented (4 / 4 Included)

### 1. 🎯 Feature A: Interactive Custom Cursor
- **Implementation:** `src/components/animation/CustomCursor.tsx` + `useMousePosition.ts` custom hook.
- **Behavior:** Fluid spring physics ring follower with an inner precise dot. Expands and scales over hoverable elements (`<a>`, `<button>`, inputs). Automatically disabled on touch devices (`pointer: coarse`).

### 2. 🌊 Feature B: Scroll-Triggered Reveals
- **Implementation:** `src/components/animation/ScrollReveal.tsx`.
- **Behavior:** Viewport entrance animations utilizing Framer Motion's `whileInView` with GPU-accelerated cubic-bezier transitions (0.3s–0.5s duration) ensuring 60 FPS scrolling performance.

### 3. 🌓 Feature C: Animated Dark/Light Theme Switcher
- **Implementation:** `src/components/layout/ThemeToggle.tsx` + `useTheme.ts` hook.
- **Behavior:** Seamless theme switching between Midnight Sapphire dark mode and Clean Pearl light mode with `localStorage` state persistence and system color preference fallback.

### 4. 📊 Feature D: Scroll Progress Bar
- **Implementation:** `src/components/animation/ScrollProgress.tsx` + `useScrollProgress.ts`.
- **Behavior:** Fixed top reading-progress bar tracking page scroll depth with smooth spring physics.

---

## 🏫 Key Page Sections Built

1. **Hero Section:** High-impact hero with campus imagery, floating metrics card, trust indicators, and quick CTA modal launcher.
2. **Quick Statistics Bar:** Key metrics showcasing 100% University placement, 22+ acre campus, 8:1 mentorship ratio, and 35+ years legacy.
3. **About TIS & Gurukul Ethos:** Detailed narrative on ancient Gurukul values combined with modern Apple Smart Classrooms and Himalayan serenity.
4. **Dual Curriculum Pathways:** Interactive tabbed explorer switching between CBSE (Grades IV-XII) and Cambridge International (IGCSE & A-Levels).
5. **22-Acre Campus Life & Facilities:** Grid showcasing Horse Riding Academy, 10m Air Rifle Shooting Gallery, Heated Aquatic Pool, Organic Farming, and Smart Air-Conditioned Hostels.
6. **360° Virtual Campus Tour:** Interactive hotspot map of the 22-acre campus previewing academic blocks, stables, aquatic center, and dormitories.
7. **Interactive Fee & Scholarship Estimator:** Dynamic fee calculator estimating annual tuition, boarding, sports, and merit scholarship discounts with total transparency.
8. **Testimonials & Alumni Wall:** Verified parent testimonials and alumni success stories from Imperial College London and top Indian institutes.
9. **Parent FAQ Accordion:** Interactive accordion resolving common queries on admission procedure, safety, dual boards, and scholarships.
10. **Admission Inquiry Modal:** Multi-step modal form with automated canvas confetti celebration upon submission.

---

## 📦 Getting Started Locally

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation & Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser to view the application.

### Production Build Verification

```bash
# Compile TypeScript & Build Production Bundle
npm run build
```

---

## 🏗️ Code Architecture Overview

```plaintext
frontend/
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable UI Primitives (Button, Card, Badge, Modal)
│   │   ├── layout/           # Navbar, Footer, MobileNav, ThemeToggle
│   │   ├── sections/         # HeroSection, QuickStats, AboutSection, AcademicPrograms,
│   │   │                     # CampusLife, VirtualTour, FeeEstimatorSection,
│   │   │                     # TestimonialsSection, FAQSection, AdmissionInquiryModal
│   │   └── animation/        # CustomCursor, ScrollProgress, ScrollReveal
│   ├── hooks/                # useTheme, useScrollProgress, useMousePosition
│   ├── data/                 # schoolData.ts (Static text, stats, facilities)
│   ├── styles/               # index.css (Theme tokens & custom glassmorphism)
│   ├── App.tsx               # Main assembly file
│   └── main.tsx              # Application entry point
├── index.html                # Main HTML with SEO meta tags & Google Fonts
├── vite.config.ts            # Vite configuration with path aliases (@/*)
└── package.json              # Project dependencies & scripts
```
