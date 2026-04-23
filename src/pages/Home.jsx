import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, Target, Users, Briefcase, Quote, Star, Play } from 'lucide-react';
import API from '../services/api';
import brandVideo from '../assets/Logo_BrandHackers.mp4';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';

const defaultTestimonials = [
  {
    name: "Aman Verma",
    role: "Digital Marketer at Swiggy",
    company: "Swiggy",
    quote: "The practical projects and the ₹15k stipend during my internship were game-changers. I got placed at Swiggy even before finishing the course!",
    avatar: "https://i.pravatar.cc/150?u=aman",
    companyLogo: "https://www.vectorlogo.zone/logos/swiggy/swiggy-icon.svg",
    rating: 5
  },
  {
    name: "Riya Sharma",
    role: "SEO Specialist at Zomato",
    company: "Zomato",
    quote: "HackSchool's mentors are true industry leaders. The depth of the SEO course is unmatched, and the placement cell is incredibly active.",
    avatar: "https://i.pravatar.cc/150?u=riya",
    companyLogo: "https://www.vectorlogo.zone/logos/zomato/zomato-tile.svg",
    rating: 5
  },
  {
    name: "Karan Johar",
    role: "Performance Lead at Nykaa",
    company: "Nykaa",
    quote: "I was managing 7-figure ad spends within weeks of joining. The hands-on training here is exactly what the industry demands right now.",
    avatar: "https://i.pravatar.cc/150?u=karan",
    companyLogo: "https://www.vectorlogo.zone/logos/nykaa/nykaa-icon.svg",
    rating: 5
  },
  {
    name: "Sneha Patel",
    role: "Content Strategist at Razorpay",
    company: "Razorpay",
    quote: "The outcome-based curriculum transition from learning to earning was seamless. Highly recommended for anyone serious about digital marketing.",
    avatar: "https://i.pravatar.cc/150?u=sneha",
    companyLogo: "https://www.vectorlogo.zone/logos/razorpay/razorpay-icon.svg",
    rating: 5
  }
];

const defaultFeatures = [
  {
    title: "Live Case Studies",
    description: "Work on actual brand campaigns with real budgets. No dummy data, just real challenges.",
    icon: "zap"
  },
  {
    title: "Mentor Sessions",
    description: "1-on-1 calls with heads of marketing from top unicorn startups in India.",
    icon: "briefcase"
  },
  {
    title: "Stipend Program",
    description: "Top performers get a guaranteed ₹15,000/month stipend during their internship.",
    icon: "target"
  },
  {
    title: "Industry Networking",
    description: "Get exclusive access to our network of 500+ hiring partners and industry leaders.",
    icon: "users"
  }
];

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [features, setFeatures] = useState(defaultFeatures);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesRes = await API.get('/courses').catch(err => {
          console.warn("Courses endpoint not ready:", err);
          return { data: [] };
        });
        setCourses(coursesRes.data);

        const testimonialsRes = await API.get('/testimonials').catch(err => {
          console.warn("Testimonials endpoint not ready:", err);
          return { data: [] };
        });
        setTestimonials(testimonialsRes.data.length > 0 ? testimonialsRes.data : defaultTestimonials);

        const featuresRes = await API.get('/features').catch(err => {
          console.warn("Features endpoint not ready:", err);
          return { data: [] };
        });
        if (featuresRes.data.length > 0) setFeatures(featuresRes.data);

      } catch (err) {
        console.error("Error fetching home data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const displayTestimonials = (testimonials.length > 0 ? [...testimonials, ...testimonials] : defaultTestimonials);

  return (
    <div className="pb-24 overflow-hidden">

      {/* 1. HERO SECTION — split layout: left=content, right=video bg panel */}
      <section className="relative w-full min-h-screen overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

          {/* ── LEFT PANEL: clean content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-24 bg-white"
          >
            {/* Subtle left-side purple glow blob */}
            <div className="absolute top-24 -left-16 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-40"
              style={{ background: 'rgba(107,62,250,0.12)' }} />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-8 w-fit"
              style={{ background: 'rgba(95, 94, 98, 0.15)', color: '#5a1006ff' }}>
              <Zap size={13} /> Next Batch Starts Soon
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.08] mb-6 max-w-[580px]"
              style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>
              Launch Your <br />
              <span style={{
                background: 'linear-gradient(135deg, #6B3EFA 0%, #A78BFA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Digital Marketing
              </span>{' '}Career
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl mb-10 max-w-[480px] font-medium leading-relaxed"
              style={{ color: '#4B5563' }}>
              Learn from industry experts, earn{' '}
              <span className="font-bold" style={{ color: '#0D0A1E' }}>₹15,000+ stipend</span>,
              and get job-ready with real experience.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <button
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-white transition-all"
                  style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, background: '#6B3EFA', boxShadow: '0 8px 28px rgba(107,62,250,0.35)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#4A1FD8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#6B3EFA'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Explore Courses <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/signup">
                <button
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold transition-all"
                  style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, background: 'transparent', color: '#6B3EFA', border: '2px solid #EDE9FE' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#6B3EFA'; e.currentTarget.style.background = 'rgba(107,62,250,0.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#EDE9FE'; e.currentTarget.style.background = 'transparent'; }}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT PANEL: video background ── */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="relative hidden lg:flex items-stretch min-h-screen overflow-hidden"
          >
            {/* Video fills the entire right panel */}
            <video
              src={brandVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 0 }}
            />

            {/* Gradient overlay: dark on right → fades to transparent on left, blending into white */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                zIndex: 1,
                background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.15) 18%, rgba(15,23,42,0.35) 60%, rgba(15,23,42,0.72) 100%)',
              }}
            />
          </motion.div>

          {/* Mobile-only: video below text */}
          <div className="relative lg:hidden h-[400px] overflow-hidden bg-slate-50">
            <video
              src={brandVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 1.5 TRUSTED BY SECTION */}
      <section className="py-16 bg-white border-y border-slate-50 overflow-hidden relative">
        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 mb-10 text-center">
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
            Trusted by learners from top companies
          </p>
        </div>

        <div className="logo-track flex items-center gap-16 md:gap-24 px-4">
          {[
            { name: "Google", url: "https://www.vectorlogo.zone/logos/google/google-ar21.svg" },
            { name: "Meta", url: "https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg" },
            { name: "Amazon", url: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" },
            { name: "Netflix", url: "https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg" },
            { name: "Microsoft", url: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" },
            { name: "Airbnb", url: "https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg" },
            // Duplicated for infinite scroll
            { name: "Google", url: "https://www.vectorlogo.zone/logos/google/google-ar21.svg" },
            { name: "Meta", url: "https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg" },
            { name: "Amazon", url: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" },
            { name: "Netflix", url: "https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg" },
            { name: "Microsoft", url: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" },
            { name: "Airbnb", url: "https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg" }
          ].map((logo, idx) => (
            <img 
              key={idx} 
              src={logo.url} 
              alt={logo.name}
              className="h-8 md:h-10 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer scale-90 hover:scale-105"
            />
          ))}
        </div>
      </section>

      {/* 2. FEATURES */}
      <section className="py-24" style={{ background: '#F5F3FF' }}>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = {
              zap: Zap,
              briefcase: Briefcase,
              target: Target,
              users: Users
            }[feature.icon?.toLowerCase()] || Zap;

            return (
              <motion.div key={feature._id || idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
                className="bg-white p-8 rounded-3xl shadow-sm transition-all"
                style={{ border: '1px solid #EDE9FE' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 60px rgba(107,62,250,0.1)'; e.currentTarget.style.borderColor = '#6B3EFA'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = '#EDE9FE'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(107,62,250,0.1)', color: '#6B3EFA' }}>
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>{feature.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. CAREER-READY PROGRAMS */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
            >
              Curriculum built for 2026
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark font-heading leading-tight mb-6">
              Our Career-Ready <span className="text-primary">Programs</span>
            </h2>
            <p className="text-slate-500 font-inter text-lg">
              Master the most in-demand digital skills through our outcome-oriented bootcamps designed by industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {loading ? (
              // Simple Loading Skeletons
              [1, 2, 3].map(i => (
                <div key={i} className="h-[450px] bg-slate-50 rounded-3xl animate-pulse border border-slate-100" />
              ))
            ) : courses.length > 0 ? (
              courses.slice(0, 3).map(course => (
                <CourseCard key={course._id || course.id} course={course} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
                <p className="text-slate-400 font-medium italic">No programs available at the moment. Check back soon!</p>
              </div>
            )}
          </div>

          <div className="mt-20 text-center">
            <Link to="/courses">
              <Button variant="outline" className="gap-2 rounded-2xl group px-12 h-16 text-lg">
                View All Programs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-24 text-white text-center relative overflow-hidden" style={{ background: '#0D0A1E' }}>
        <div className="absolute rounded-full blur-3xl pointer-events-none" style={{ width: 500, height: 500, background: 'rgba(107,62,250,0.15)', top: -200, right: -200 }} />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16" style={{ fontFamily: 'Syne, sans-serif' }}>
            Your Path to <span style={{ color: '#A78BFA' }}>Success</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Enroll", desc: "Choose your specialization." },
              { step: "02", title: "Learn", desc: "Master tools through live sessions." },
              { step: "03", title: "Internship", desc: "Work & earn ₹15k stipend." },
              { step: "04", title: "Placement", desc: "Get placed in top startups." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl transition-colors" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 mx-auto text-white" style={{ fontFamily: 'Syne, sans-serif', background: '#6B3EFA', boxShadow: '0 8px 24px rgba(107,62,250,0.4)' }}>{item.step}</div>
                <h3 className="text-xl font-extrabold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REAL SUCCESS STORIES (TESTIMONIALS) */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
            >
              Wall of Fame
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-dark font-heading tracking-tight leading-tight">
              Real Stories from <br /> <span className="text-primary italic">HackSchool</span> Alumni
            </h2>
          </div>

          <div className="testimonial-wrapper mt-10">
            <div className="testimonial-track">
              {displayTestimonials.map((t, idx) => (
                <div 
                  key={idx}
                  className="testimonial-card-scroller group relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
                >
                  <div className="absolute top-8 right-10 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Quote size={48} className="text-primary" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-8">
                    {[...Array(Math.floor(Math.max(0, Math.min(5, Number(t.rating) || 5))))].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-lg font-medium text-slate-700 leading-relaxed mb-10 font-inter italic line-clamp-3">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} className="w-14 h-14 rounded-2xl shadow-lg border-2 border-white" alt={t.name} />
                      <div>
                        <h4 className="font-bold text-dark font-heading">{t.name}</h4>
                        <p className="text-xs font-bold text-primary uppercase tracking-wider">{t.role}</p>
                      </div>
                    </div>
                    <div className="h-8 flex items-center">
                      {t.companyLogo ? (
                        <img 
                          src={t.companyLogo} 
                          className="h-full w-auto grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100" 
                          alt={t.company || "Company"} 
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span class="text-xs font-black text-slate-300 uppercase tracking-widest">${t.company || 'Company'}</span>`;
                          }}
                        />
                      ) : (
                        <span className="text-xs font-black text-slate-300 uppercase tracking-widest">{t.company || 'Company'}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl" style={{ background: '#0D0A1E' }}>
            <div className="absolute rounded-full blur-3xl pointer-events-none" style={{ width: 500, height: 500, background: 'rgba(107,62,250,0.2)', top: -200, left: '50%', transform: 'translateX(-50%)' }} />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>Start Your Career Today</h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>Join 1000+ students and start earning while learning from day one.</p>
              <Link to="/signup">
                <button className="px-12 h-16 text-xl rounded-2xl font-bold text-white transition-all" style={{ fontFamily: 'Syne, sans-serif', background: '#6B3EFA', boxShadow: '0 12px 40px rgba(107,62,250,0.5)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#4A1FD8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#6B3EFA'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;