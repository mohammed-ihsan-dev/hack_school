import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, MapPin, Award, Rocket, Globe } from 'lucide-react';
import Button from '../components/Button';

const About = () => {
  const team = [
    { name: 'Ihsan Mohammed', role: 'Founder & CEO', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ihsan' },
    { name: 'Sarah Jenkins', role: 'Head of Content', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJ' },
    { name: 'Deepak Vishnode', role: 'Lead Mentor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak' },
  ];

  const milestones = [
    { icon: Users, title: '5000+', desc: 'Students across the globe' },
    { icon: Globe, title: '12+', desc: 'Partnering Startups' },
    { icon: Award, title: '95%', desc: 'Placement Rate' },
  ];

  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-primary opacity-10 blur-[120px]" />
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-accent font-bold text-xs uppercase tracking-widest">
              Our Story
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight">
              We're building the <br /> 
              <span className="text-primary italic">Hackers of Tomorrow</span>
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed">
              HackSchool was born out of a simple problem: the gap between academic theory and industry reality. We're on a mission to democratize elite career training.
            </p>
          </div>
          <div className="relative">
             <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 relative">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Team" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
               <Rocket className="text-primary mb-4" size={32} />
               <h4 className="text-2xl font-extrabold text-slate-900">2024</h4>
               <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Year of Impact</p>
             </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
             {milestones.map((m, i) => (
                <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <m.icon size={24} />
                  </div>
                  <h3 className="text-3xl font-extrabold mb-2">{m.title}</h3>
                  <p className="text-slate-500 font-medium">{m.desc}</p>
                </div>
             ))}
             <div className="p-8 bg-gradient-primary rounded-3xl flex flex-col justify-center text-white">
               <h3 className="text-2xl font-bold mb-2 italic">And counting...</h3>
               <p className="text-white/80 font-medium">Join our mission to transform digital careers.</p>
             </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl font-bold">Why we built HackSchool</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                The traditional education system is slow. Industry moves fast. We realized that by the time a student completes a degree, the digital platforms like Google, Meta, and AI tools have evolved five times over.
              </p>
              <p>
                HackSchool is our solution. An execution-focused platform where you don't just "learn" — you hack your way into high-growth roles through real budgets and actual company projects.
              </p>
            </div>
            <Button className="py-4 px-10">Join the movement</Button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-6 text-center py-20 bg-slate-50 rounded-[4rem]">
        <h2 className="text-4xl font-bold mb-16">Meet the <span className="text-primary italic">Architects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="space-y-6"
            >
              <div className="w-48 h-48 mx-auto bg-white rounded-full border-4 border-white shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Logos Placeholder */}
      <section className="container mx-auto px-6 pt-32 text-center">
        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-12">Trusted by industry leaders from</p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-30 grayscale">
          {['Razorpay', 'Swiggy', 'Zomato', 'Canva', 'Slack'].map(l => (
            <span key={l} className="text-2xl font-extrabold tracking-tighter">{l}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
