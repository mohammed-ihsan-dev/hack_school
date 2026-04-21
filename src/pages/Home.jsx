import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiArrowRight as ArrowRight, 
  FiCheckCircle as CheckCircle,
  FiTarget as Target,
  FiZap as Zap,
  FiUsers as Users,
  FiBriefcase as Briefcase,
  FiAward as Award,
  FiTrendingUp as TrendingUp,
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
    <div className="overflow-x-hidden pt-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10 hidden lg:block" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 opacity-60" />
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-6">
              <Zap size={14} className="fill-primary" /> Next Cohort Starts Soon
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 font-heading">
              Launch Your <br />
              <span className="text-gradient">Digital Marketing</span> Career 🚀
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg font-medium">
              Learn from industry experts, earn <span className="text-dark font-bold">₹15,000+ stipend</span>, and get job-ready with real experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button size="lg" className="px-10 gap-2">Explore Courses <ArrowRight size={20} /></Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="lg" className="px-10">Get Started</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 floating rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" className="w-full" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-4">
               <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold">145%</div>
               <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Avg. Salary Hike</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURES */}
      <section className="py-24 bg-light-bg">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">{idx === 0 ? "💰" : idx === 1 ? <Briefcase /> : idx === 2 ? <Target /> : <Users />}</div>
              <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
              <p className="text-slate-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. COURSES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-16 text-center leading-tight">Our Career-Ready <span className="text-primary">Programs</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map(course => <CourseCard key={course.id} course={course} />)}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-24 bg-dark text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-16">Your Path to <span className="text-primary">Success</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Enroll", desc: "Choose your specialization." },
              { step: "02", title: "Learn", desc: "Master tools through live sessions." },
              { step: "03", title: "Internship", desc: "Work & earn ₹15k stipend." },
              { step: "04", title: "Placement", desc: "Get placed in top startups." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-2xl font-black mb-6 mx-auto">{item.step}</div>
                <h3 className="text-xl font-extrabold mb-3 font-heading">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold font-heading mb-16 text-center tracking-tight">Real Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="p-8 rounded-3xl bg-light-bg border border-slate-100 flex gap-6">
                <img src={t.avatar} className="w-16 h-16 rounded-full shadow-lg" />
                <div>
                  <p className="text-slate-600 mb-4 font-medium italic">"{t.quote}"</p>
                  <h4 className="font-bold text-dark">{t.name}</h4>
                  <p className="text-xs font-bold text-primary">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 font-heading">Start Your Career Today 🚀</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Join 5000+ students and start earning while learning from day one.</p>
            <Link to="/signup"><Button variant="dark" size="lg" className="px-12 h-16 text-xl rounded-2xl">Get Started Now</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
