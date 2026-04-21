import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight as ArrowRight,
  FiTarget as Target,
  FiZap as Zap,
  FiUsers as Users,
  FiBriefcase as Briefcase,
} from 'react-icons/fi';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import { COURSES, TESTIMONIALS, STATS, FEATURES } from '../utils/mockData';
import { Link } from 'react-router-dom';

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="pb-24 overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full rounded-l-[100px] -z-10 hidden lg:block" style={{ background: 'rgba(107,62,250,0.05)' }} />
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl -z-10 opacity-60" style={{ background: 'rgba(107,62,250,0.1)' }} />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6" style={{ background: 'rgba(107,62,250,0.1)', color: '#6B3EFA' }}>
              <Zap size={14} /> Next Cohort Starts Soon
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>
              Launch Your <br />
              <span style={{ background: 'linear-gradient(135deg, #6B3EFA 0%, #A78BFA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Digital Marketing
              </span>{' '}Career
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-lg font-medium" style={{ color: '#4B5563' }}>
              Learn from industry experts, earn <span className="font-bold" style={{ color: '#0D0A1E' }}>₹15,000+ stipend</span>, and get job-ready with real experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <button className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-white transition-all" style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, background: '#6B3EFA', boxShadow: '0 8px 24px rgba(107,62,250,0.3)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#4A1FD8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#6B3EFA'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Explore Courses <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/signup">
                <button className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold transition-all" style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, background: 'transparent', color: '#6B3EFA', border: '2px solid #EDE9FE' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#6B3EFA'; e.currentTarget.style.background = 'rgba(107,62,250,0.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#EDE9FE'; e.currentTarget.style.background = 'transparent'; }}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 floating rounded-3xl overflow-hidden shadow-2xl" style={{ border: '8px solid #fff' }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" className="w-full" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4" style={{ border: '1px solid #EDE9FE' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(107,62,250,0.1)', color: '#6B3EFA', fontFamily: 'Syne, sans-serif' }}>145%</div>
              <div className="text-xs font-bold uppercase tracking-tighter" style={{ color: '#9CA3AF' }}>Avg. Salary Hike</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURES */}
      <section className="py-24" style={{ background: '#F5F3FF' }}>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
              className="bg-white p-8 rounded-3xl shadow-sm transition-all"
              style={{ border: '1px solid #EDE9FE' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 60px rgba(107,62,250,0.1)'; e.currentTarget.style.borderColor = '#6B3EFA'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = '#EDE9FE'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(107,62,250,0.1)', color: '#6B3EFA' }}>
                {idx === 0 ? <Zap /> : idx === 1 ? <Briefcase /> : idx === 2 ? <Target /> : <Users />}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>{feature.title}</h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. COURSES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center leading-tight" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>
            Our Career-Ready <span style={{ color: '#6B3EFA' }}>Programs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map(course => <CourseCard key={course.id} course={course} />)}
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

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-16 text-center tracking-tight" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>Real Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="p-8 rounded-3xl flex gap-6" style={{ background: '#F5F3FF', border: '1px solid #EDE9FE' }}>
                <img src={t.avatar} className="w-16 h-16 rounded-full shadow-lg" />
                <div>
                  <p className="mb-4 font-medium italic" style={{ color: '#4B5563' }}>"{t.quote}"</p>
                  <h4 className="font-bold" style={{ color: '#0D0A1E' }}>{t.name}</h4>
                  <p className="text-xs font-bold" style={{ color: '#6B3EFA' }}>{t.role}</p>
                </div>
              </div>
            ))}
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
              <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>Join 5000+ students and start earning while learning from day one.</p>
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