export interface ProgramItem {
  id: string;
  title: string;
  grade: string;
  board: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  relation: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const SCHOOL_INFO = {
  name: "Tula's International School",
  shortName: "TIS Dehradun",
  tagline: "Modern Education Rooted in Ancient Gurukul Ethos",
  subTagline: "India's Premier Co-Ed Boarding School affiliated with CBSE & Cambridge (CIE)",
  established: 2012,
  location: "Dehradun, Uttarakhand, India",
  address: "Dhoolkot, P.O. Selakui, Chakrata Road, Dehradun, Uttarakhand - 248011",
  phone: "+91 94583 95808 / +91 98379 83721",
  email: "info@tis.edu.in",
  admissionsEmail: "admissions@tis.edu.in",
  brochureUrl: "#download-brochure",
  virtualTourUrl: "#virtual-tour",
};

export const QUICK_STATS = [
  { value: "100%", label: "University Placement", sub: "Global Ivy League & Top Indian Institutes" },
  { value: "22+", label: "Acre Eco-Campus", sub: "Nestled in Himalayan Foothills" },
  { value: "8:1", label: "Student-Teacher Ratio", sub: "Individual Mentorship & Pastoral Care" },
  { value: "15+", label: "Sports & Skill Academies", sub: "Horse Riding, Shooting, Swimming & STEM" },
  { value: "35+", label: "Years Group Legacy", sub: "Pioneers in Quality Education" },
];

export const NAV_LINKS = [
  { name: "About TIS", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Campus Life", href: "#campus-life" },
  { name: "Virtual Tour", href: "#virtual-tour" },
  { name: "Fee Estimator", href: "#fee-estimator" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "#faqs" },
];

export const ACADEMIC_PROGRAMS: ProgramItem[] = [
  {
    id: "junior",
    title: "Junior School (Grades IV - VIII)",
    grade: "Grades IV to VIII",
    board: "CBSE & Experiential Foundation",
    description: "Fostering innate curiosity through inquiry-based learning, Apple smart classrooms, activity-centered science labs, and foundational personality development.",
    highlights: [
      "Inquiry & Project-Based Curriculum",
      "Apple Smart Classroom Tech",
      "Bilingual Language Skills & Public Speaking",
      "Daily Sports & Co-curricular Exposure"
    ],
    icon: "Sparkles"
  },
  {
    id: "senior-cbse",
    title: "Senior School (Grades IX - XII) - CBSE",
    grade: "Grades IX to XII",
    board: "CBSE (Central Board of Secondary Education)",
    description: "Rigorous academic preparation integrated with competitive exam coaching (IIT-JEE, NEET, CUET, NDA) alongside holistic co-curriculars.",
    highlights: [
      "Science, Commerce & Humanities Streams",
      "Integrated Integrated Coaching for JEE/NEET/CUET",
      "Advanced Science & AI Robotics Labs",
      "Leadership & MUN (Model United Nations)"
    ],
    icon: "BookOpen"
  },
  {
    id: "international-cie",
    title: "Cambridge International (IGCSE & A-Levels)",
    grade: "Grades IX to XII",
    board: "CIE (Cambridge Assessment International Education)",
    description: "Globally recognized curriculum focused on critical thinking, deep analytical skills, and international university pathways.",
    highlights: [
      "IGCSE (Grades 9-10) & Cambridge International A-Levels",
      "Global University Guidance & SAT/IELTS Cell",
      "International Exchange Programs",
      "Research & Capstone Projects"
    ],
    icon: "Globe"
  },
  {
    id: "pastoral",
    title: "Gurukul Pastoral & Mentorship Program",
    grade: "All Boarding Students",
    board: "Holistic Development Ethos",
    description: "Blending ancient values of discipline, empathy, and respect with modern 21st-century leadership and emotional wellbeing.",
    highlights: [
      "24/7 Dedicated House Parents & Counselors",
      "Mindfulness, Yoga & Meditation Routines",
      "Value-Based Leadership Workshops",
      "Organic Farm-to-Table Nutrition Plan"
    ],
    icon: "Heart"
  }
];

export const CAMPUS_FACILITIES: FacilityItem[] = [
  {
    id: "horse-riding",
    title: "Horse Riding Academy",
    category: "Sports & Adventure",
    description: "State-of-the-art equestrian paddock with thoroughbred horses and certified instructors for dressage, jumping, and recreational riding.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80",
    tags: ["Equestrian", "Professional Trainers", "Safety Gear"]
  },
  {
    id: "shooting-range",
    title: "International 10m Shooting Range",
    category: "Sports & Discipline",
    description: "Precision indoor air rifle and pistol shooting target gallery designed to build laser-sharp focus and national-level tournament readiness.",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Air Rifle", "Precision Focus", "Tournament Ready"]
  },
  {
    id: "swimming-pool",
    title: "All-Weather Olympic Swimming Pool",
    category: "Aquatics",
    description: "Temperature-controlled swimming pool with dedicated lap lanes, professional life-guards, and water safety training for all ages.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    tags: ["Heated Pool", "Lifeguard On Duty", "Competitive Lap Swimming"]
  },
  {
    id: "stem-lab",
    title: "Apple & Robotics Innovation Hub",
    category: "Technology",
    description: "State-of-the-art Apple Smart Lab equipped with iPads, Mac Workstations, 3D Printers, and AI Robotics kits for future innovators.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    tags: ["Apple Authorized", "3D Printing", "Coding & AI"]
  },
  {
    id: "hostel-life",
    title: "Smart Air-Conditioned Hostels",
    category: "Boarding Life",
    description: "Ergonomically designed residential suites with personal study pods, high-speed Wi-Fi under strict parental control, and cozy lounge spaces.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
    tags: ["24/7 House Parents", "Air Conditioned", "Ergonomic Furniture"]
  },
  {
    id: "organic-farm",
    title: "Eco-Park & Organic Farming",
    category: "Sustainability",
    description: "In-house 4-acre organic dairy and vegetable farm ensuring 100% fresh, preservative-free farm-to-table dining for growing students.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    tags: ["Farm to Table", "Dairy Farm", "Zero Pesticides"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Rajesh & Sunita Agarwal",
    role: "Parents of Ananya Agarwal (Grade XI)",
    relation: "Boarding Parent",
    location: "New Delhi",
    quote: "Sending Ananya to Tula's International School was the best decision of our lives. The blend of modern academics with Gurukul values gave her confidence, discipline, and emotional independence.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: "t2",
    name: "Dr. Vikramaditya Singh",
    role: "Alumnus (Batch 2020) - Studying at Imperial College London",
    relation: "Alumnus",
    location: "London, UK",
    quote: "The Cambridge A-Level curriculum and personalized guidance from faculty at TIS laid the groundwork for my acceptance into Imperial College London. The horse riding and shooting range kept me balanced.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: "t3",
    name: "Meera & Harish Roy",
    role: "Parents of Rohan Roy (Grade VIII)",
    relation: "Boarding Parent",
    location: "Mumbai",
    quote: "The security, organic nutrition, and 24/7 medical care at Tula's give us complete peace of mind. Rohan has blossomed from a shy boy into an articulate young speaker.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the admission procedure for Tula's International School?",
    answer: "Admissions begin with submitting an online inquiry or application form, followed by an interaction with our admissions counselor, a student aptitude assessment, and a campus visit or virtual interview.",
    category: "Admissions"
  },
  {
    id: "faq-2",
    question: "What curricula options are available at TIS?",
    answer: "We offer dual pathways: CBSE (Central Board of Secondary Education) for Grades IV to XII and CIE (Cambridge Assessment International Education) offering IGCSE and A-Levels.",
    category: "Academics"
  },
  {
    id: "faq-3",
    question: "How is the security and safety managed for residential students?",
    answer: "TIS operates a gated 22-acre campus with 24/7 CCTV surveillance, biometric access control, professional security personnel, dedicated house wardens, and on-call medical staff with an ambulance.",
    category: "Boarding & Security"
  },
  {
    id: "faq-4",
    question: "What sports and co-curricular facilities are offered?",
    answer: "Our Olympic-grade facilities include an Equestrian Horse Riding Academy, 10m Air Rifle Shooting Gallery, All-Weather Heated Swimming Pool, Lawn Tennis, Basketball, Football pitch, Taekwondo, and Performing Arts studios.",
    category: "Campus Life"
  },
  {
    id: "faq-5",
    question: "Is financial aid or merit scholarship available?",
    answer: "Yes, TIS offers merit-based scholarships for high achievers in academics, sports, and defense personnel wards. Scholarship assessment takes place during the annual admission entrance test.",
    category: "Fees & Scholarships"
  }
];

export const VIRTUAL_TOUR_SPOTS = [
  {
    id: "spot-1",
    title: "Main Academic Block & Smart Classrooms",
    x: 25,
    y: 35,
    description: "Apple-certified interactive classrooms with ergonomic seating and high-speed fiber internet.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "spot-2",
    title: "Equestrian Paddock & Stables",
    x: 75,
    y: 20,
    description: "Professional horse riding ring with thoroughbred horses and obstacle training courses.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "spot-3",
    title: "Olympic Aquatic Center",
    x: 60,
    y: 70,
    description: "All-weather temperature regulated swimming facility for beginners to national level swimmers.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "spot-4",
    title: "Residential Hostels & Central Mess",
    x: 35,
    y: 65,
    description: "Modern climate-controlled dorms with nutritious 100% organic meals served 5 times daily.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
  }
];
