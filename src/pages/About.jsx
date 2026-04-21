import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiZap, FiAward } from 'react-icons/fi';
import { STATS } from '../utils/mockData';

const About = () => {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* 1. MISSION & VISION */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold font-heading mb-8 leading-tight">
              Bridging the gap between <span className="text-primary italic">Learning</span> & <span className="text-secondary underline underline-offset-8">Earning</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-inter">
              HackSchool was founded with a single mission: to revolutionize education by making it outcome-driven. We don't just sell courses; we build careers through real-world experience, paid internships, and direct industry mentorship.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Our Mission", desc: "Empower 100,000+ students with digital skills by 2026.", icon: <FiTarget className="text-primary" /> },
                { title: "Our Vision", desc: "Build the world's most effective job-oriented training platform.", icon: <FiZap className="text-secondary" /> }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-xl">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-dark mb-2 font-heading">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-inter">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-[500px] bg-primary/10 rounded-[60px] relative overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                className="w-4/5 h-4/5 object-cover rounded-[40px] shadow-2xl floating"
                alt="HackSchool Team"
              />
            </div>
            {/* Absolute Badges */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-full flex flex-col items-center justify-center text-white text-center p-4 border-8 border-white shadow-xl -rotate-12">
               <FiAward size={24} className="mb-1" />
               <p className="text-[10px] font-bold uppercase tracking-tight">Best EdTech Award '24</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-dark py-20">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="text-center"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 font-heading tracking-tighter">
                {stat.value}
              </div>
              <div className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY HACKSCHOOL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold font-heading mb-4">Why We're Different</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Real Stipends", desc: "No more free internships. We ensure our students get paid while they learn.", icon: "💸" },
              { title: "Direct Referral", desc: "Our massive network of 400+ partner startups hires directly from us.", icon: "🤝" },
              { title: "Lifetime Access", desc: "Once a HackSchooler, always a HackSchooler. Re-access course updates for life.", icon: "♾️" }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-inter">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-slate-50 rounded-[40px] px-12 py-20 text-center border border-slate-100">
           <h2 className="text-4xl font-extrabold font-heading mb-8">Ready to join the movement?</h2>
           <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Stop worrying about the job market. Start building the skills that make companies worry about losing you.</p>
           <button className="btn-primary text-xl px-12 py-5 rounded-2xl">Start Your Journey Today</button>
        </div>
      </section>
    </div>
  );
};

export default About;
