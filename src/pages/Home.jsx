import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote, ShieldCheck, Globe, Trophy } from 'lucide-react';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import { COURSES, TESTIMONIALS, STATS } from '../utils/mockData';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-40 pb-40"
    >
      {/* Hero Section - Classic High Contrast */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-px bg-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Established MMXXIV</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight text-primary drop-shadow-sm">
              The Art of <br />
              <span className="italic font-light">Digital Mastery.</span>
            </h1>
            
            <p className="text-slate-500 text-lg lg:text-xl leading-relaxed max-w-lg font-medium italic">
              Cultivating the next generation of marketing visionaries through high-budget execution and exclusive mentorship.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 pt-6">
              <Link to="/courses">
                <Button variant="primary" className="px-12 py-4">Explore Collections</Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" className="text-primary hover:text-accent font-black tracking-[0.3em]">Our Philosophy</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative lg:h-[700px] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              alt="Executive"
            />
            <div className="absolute bottom-12 right-12 text-white text-right space-y-2">
              <div className="text-5xl font-bold italic tracking-tighter">Legacy</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80 underline underline-offset-8">Scroll to unfold</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar - Refined Ivory */}
      <section className="bg-white py-24 border-y border-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center px-10 border-x border-slate-50 first:border-0 last:border-0"
              >
                <div className="text-5xl font-bold text-primary mb-3">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses - Minimal Grid */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-6 mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Active Cohorts</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary">Curated Masterclasses</h2>
          <div className="w-20 h-px bg-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Why Section - Classic Iconography */}
      <section className="bg-primary/5 py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Institutional Excellence</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">The Foundation of Success.</h2>
                <p className="text-slate-500 text-lg leading-relaxed italic">At HackSchool, we treat digital marketing as a high-stake craft, blending classical discipline with modern execution.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { icon: ShieldCheck, title: "Trust & Ethics", desc: "Rigorous standards for data and strategy." },
                  { icon: Globe, title: "Global Network", desc: "Access to venture-backed startups worldwide." },
                  { icon: Trophy, title: "Elite Placement", desc: "Guaranteed 1-month residency with partners." },
                  { icon: Star, title: "Master Mentors", desc: "Direct guidance from established operators." }
                ].map((f, i) => (
                  <div key={i} className="space-y-4">
                    <div className="text-accent">
                      <f.icon size={32} strokeWidth={1} />
                    </div>
                    <h3 className="text-lg font-bold text-primary uppercase tracking-widest">{f.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-bold uppercase tracking-widest opacity-60">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover brightness-75 transition-all duration-1000 grayscale origin-top scale-110 hover:scale-100" alt="Office" />
               <div className="absolute inset-0 border-[20px] border-white/10 m-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant Quote Section */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                className="text-center space-y-10"
              >
                <div className="text-accent flex justify-center">
                  <Quote size={40} className="opacity-20" />
                </div>
                <p className="text-xl font-medium text-slate-700 italic leading-relaxed">"{t.quote}"</p>
                <div className="flex flex-col items-center gap-4">
                   <div className="w-16 h-16 rounded-none rotate-45 overflow-hidden border border-accent/20">
                     <img src={t.avatar} className="-rotate-45 scale-150 grayscale" alt={t.name} />
                   </div>
                   <div className="pt-4">
                     <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">{t.name}</h4>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{t.role}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Institutional Banner */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="bg-primary text-white p-20 lg:p-32 relative overflow-hidden text-center space-y-12">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 blur-[100px]" />
           <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-accent">Inquiry Admissions</span>
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tight">Your trajectory starts here.</h2>
              <div className="w-24 h-px bg-accent mx-auto" />
              <p className="text-slate-400 text-lg italic max-w-xl mx-auto">Join a hand-selected cohort of future digital leaders. Admissions are now open for the winter cycle.</p>
              <div className="pt-10">
                <Link to="/signup">
                  <Button variant="gold" className="px-16 py-6 text-sm">Become a Member</Button>
                </Link>
              </div>
           </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
