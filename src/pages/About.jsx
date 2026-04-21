import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Compass, Award } from 'lucide-react';
import { TEAM } from '../utils/mockData';

const About = () => {
  const values = [
    { icon: Shield, title: 'Discipline', desc: 'Rigorous attention to detail in every strategy execution.' },
    { icon: Target, title: 'Vision', desc: 'Anticipating market shifts before they become mainstream.' },
    { icon: Compass, title: 'Guidance', desc: 'Direct apprenticeship under established industry operators.' },
    { icon: Award, title: 'Legacy', desc: 'Building careers that stand the test of time, not just trends.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-52"
    >
      {/* Editorial Hero */}
      <section className="bg-slate-900 pt-56 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-20 brightness-50">
           <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Institutional" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center space-y-10">
          <div className="inline-flex items-center gap-4 mx-auto">
             <div className="w-10 h-px bg-accent" />
             <span className="text-[10px] font-bold text-accent uppercase tracking-[0.5em]">Philosophy</span>
             <div className="w-10 h-px bg-accent" />
          </div>
          <h1 className="text-5xl lg:text-9xl font-bold text-white tracking-tighter leading-none">
            The Institutional <br />
            <span className="italic font-light">Standard.</span>
          </h1>
          <p className="text-slate-400 text-xl lg:text-2xl max-w-3xl mx-auto italic font-medium leading-relaxed">
            Founded in 2024, HackSchool was established to bridge the gap between academic theory and institutional-grade digital execution.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 lg:px-12 py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {values.map((v, i) => (
            <div key={i} className="text-center space-y-8 group">
              <div className="w-20 h-20 mx-auto border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 rotate-45">
                <v.icon size={32} strokeWidth={1} className="-rotate-45" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-[0.2em]">{v.title}</h3>
                <p className="text-slate-500 text-sm italic leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="bg-white py-40 border-y border-slate-50">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
           <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">The Vision</span>
                <h2 className="text-4xl lg:text-6xl font-bold text-primary tracking-tight italic">Beyond the pixels.</h2>
              </div>
              <div className="space-y-8 text-lg font-medium text-slate-600 leading-loose italic">
                 <p>"Digital marketing is often reduced to buttons and tools. We believe it is a psychological craft, a strategic game, and an institutional discipline."</p>
                 <p>"We didn't build just another course platform. We built a residency for the next generation of marketing architects."</p>
              </div>
              <div className="pt-6">
                 <div className="text-xl font-bold text-primary font-serif">Ihsan Mohammed</div>
                 <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mt-1">Founder & Chief Strategist</div>
              </div>
           </div>
           <div className="relative aspect-[4/5] overflow-hidden grayscale shadow-2xl">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover origin-top hover:scale-110 transition-all duration-1000" alt="Executive" />
              <div className="absolute inset-0 border-[20px] border-white/20 m-10" />
           </div>
        </div>
      </section>

      {/* Team Archives */}
      <section className="container mx-auto px-6 lg:px-12 py-40">
        <div className="text-center space-y-6 mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Board of Directors</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary">Master Operators.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {TEAM.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 mb-8 border border-slate-100 shadow-xl relative">
                <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-primary/90 backdrop-blur-md">
                   <p className="text-[10px] text-white font-bold uppercase tracking-widest italic">{member.bio || 'Institutional lead with 10+ years of high-budget strategy execution.'}</p>
                </div>
              </div>
              <h4 className="text-xl font-bold text-primary uppercase tracking-[0.2em]">{member.name}</h4>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
