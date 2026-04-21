import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Trophy, PlayCircle } from 'lucide-react';
import { TEAM } from '../utils/mockData';
import Button from '../components/Button';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF4FF] pb-32"
    >
      {/* Hero */}
      <section className="pt-48 pb-24 px-6 bg-gradient-to-br from-primary to-[#A78BFA] text-white">
        <div className="container mx-auto text-center space-y-8">
           <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em]">Our Story</span>
           <h1 className="text-5xl lg:text-8xl font-black tracking-tight leading-none">
             Unique Learning <br /> Experiences<span className="text-secondary">.</span>
           </h1>
           <p className="text-white/80 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
             Join a world-leading platform for business development and career testing. We believe in providing unique learning experiences that prepare you for the real world.
           </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Courses', value: '80+', icon: PlayCircle },
            { label: 'Students', value: '10M+', icon: Users },
            { label: 'Success Rate', value: '98%', icon: Trophy },
            { label: 'Lessons', value: '1.5k+', icon: CheckCircle },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm text-center space-y-4 hover:shadow-xl hover:-translate-y-2 transition-all group">
               <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <stat.icon size={32} />
               </div>
               <div className="text-4xl font-black text-gray-900">{stat.value}</div>
               <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Our Team" />
           </div>
           <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight text-gray-900">
                Building the future of <br /> <span className="text-primary italic">education</span> together
              </h2>
              <div className="space-y-6">
                 <p className="text-gray-600 text-lg font-medium leading-relaxed italic">
                   "We didn't build just another platform. We built a ecosystem where students and experts connect to solve real problems and build real careers."
                 </p>
                 <div className="space-y-4 pt-4">
                    {['Curated Content', 'Expert Guidance', 'Global Community', 'Practical Skills'].map((point) => (
                       <div key={point} className="flex items-center gap-4 text-sm font-black text-gray-800">
                          <CheckCircle className="text-primary" size={24} />
                          {point}
                       </div>
                    ))}
                 </div>
              </div>
              <Button variant="primary" className="px-12 py-4">Join Our Community</Button>
           </div>
        </div>
      </section>

      {/* Founders/Team */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center space-y-4 mb-20">
           <h2 className="text-4xl lg:text-5xl font-black">Meet Our Mentors</h2>
           <p className="text-gray-500 font-medium max-w-xl mx-auto">Learn from the best in the industry with direct access to top-tier expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member, i) => (
            <div key={i} className="bg-white p-8 rounded-[3rem] shadow-sm text-center space-y-6 group hover:shadow-2xl transition-all">
               <div className="w-48 h-48 mx-auto rounded-[2.5rem] overflow-hidden border-8 border-primary/5 shadow-xl transition-all group-hover:scale-105 group-hover:rotate-3">
                  <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
               </div>
               <div>
                  <h4 className="text-2xl font-black text-gray-900">{member.name}</h4>
                  <p className="text-primary font-black uppercase tracking-widest text-xs mt-1">{member.role}</p>
               </div>
               <p className="text-sm text-gray-500 font-medium leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
