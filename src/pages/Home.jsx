import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Zap, ArrowRight, Quote, CheckCircle } from 'lucide-react';
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
      className="space-y-32"
    >
      {/* 1. Hero Section - Textured & Dynamic */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Textures */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,#C4B5FD20_0%,transparent_50%)]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-full shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">Live: Enrollment open for Batch 12</span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black leading-[0.95] text-slate-900 tracking-tighter">
              Hack the industry. <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent italic">Own your career.</span>
            </h1>
            
            <p className="text-slate-600 text-lg lg:text-2xl leading-relaxed max-w-xl font-medium">
              Join elite marketing cohorts led by unicorn operators. Learn by execution, land a <span className="text-primary font-bold">paid internship</span>, and scale to high-growth roles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/signup">
                <Button className="py-5 px-12 text-lg shadow-2xl shadow-primary/30">
                  Join the cohort
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="py-5 px-12 text-lg bg-white">
                  View Programs
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-4 grayscale opacity-40 overflow-hidden">
               {['Google', 'Meta', 'Amazon', 'Shopify'].map(l => (
                 <span key={l} className="text-xl font-black tracking-tighter uppercase">{l}</span>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full translate-x-10 translate-y-10" />
            <div className="relative glass-card p-4 rounded-[2.5rem] border-2 border-white overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-[2rem]"
                alt="Hackers at work"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl flex items-center justify-between">
                 <div>
                   <div className="text-3xl font-black text-primary leading-none mb-1">10X</div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Growth Potential</div>
                 </div>
                 <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="Student" />
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Bar - Clean & Informative */}
      <section className="bg-slate-900 py-10 relative overflow-hidden">
        <div className="container mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex justify-between items-center min-w-[800px]">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center md:text-left border-l first:border-0 border-slate-700 px-12 py-4"
              >
                <div className="text-3xl lg:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Courses Grid */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-lg text-primary text-[10px] font-black uppercase tracking-widest">Enrollment Open</div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">Elite <span className="text-primary italic">Career</span> Cohorts</h2>
            <p className="text-slate-500 text-lg max-w-xl font-medium">Curated by operators, not instructors. Built for those who execute.</p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="border-2 py-4 px-8 font-bold">Explore All Cohorts</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* 4. Why HackSchool - Cards with Icons */}
      <section className="container mx-auto px-6">
        <div className="bg-slate-100/50 rounded-[4rem] p-12 lg:p-24 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-4xl lg:text-5xl font-black">Why leading marketers <br /> <span className="text-primary italic">trust us</span></h2>
            <p className="text-slate-500 font-medium">We've ripped up the textbook and replaced it with a real marketing engine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Execution First", desc: "No boring lectures. You get a budget and a goal. Execute or pivot." },
              { icon: Target, title: "Unicorn Mentorship", desc: "Direct 1:1 sessions with growth leads from top startups." },
              { icon: Users, title: "Exclusive Network", desc: "Access the private discord with over 5000+ elite operatives." },
              { icon: CheckCircle, title: "Paid Placements", desc: "Guaranteed 1-month paid internship with our partner startups." }
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-black mb-4">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials - Proof of Impact */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12 mb-20 font-medium">
           <Quote size={64} className="mx-auto text-primary/20" />
           <h2 className="text-4xl lg:text-5xl font-black">Success Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm relative"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(t.rating)].map((_, j) => <CheckCircle key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed font-medium">"{t.quote}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                 <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                   <img src={t.avatar} alt={t.name} />
                 </div>
                 <div>
                   <h4 className="font-extrabold text-slate-900">{t.name}</h4>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CTA Banner - Dark/Gradient Bg */}
      <section className="container mx-auto px-6 mb-32">
        <div className="relative bg-slate-900 rounded-[3rem] p-16 lg:p-24 overflow-hidden text-center lg:text-left">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-primary opacity-20 blur-[120px] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1]">The world's best <br /> <span className="text-accent italic">Hackers</span> are here.</h2>
              <p className="text-slate-400 text-lg lg:text-xl font-medium max-w-lg">Apply for the next cohort and transform your career in 12 weeks. Your growth trajectory starts here.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Button className="py-5 px-12 text-lg">Enroll into Batch 12</Button>
                 <Button variant="ghost" className="text-white hover:bg-white/10 py-5 px-12 text-lg border border-white/10">Talk to Counselor</Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
               <div className="grid grid-cols-2 gap-6">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="aspect-square bg-slate-800 rounded-3xl border border-slate-700/50 flex items-center justify-center text-slate-600 animate-pulse">
                     <Rocket size={48} className="opacity-10" />
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
