import React from 'react';
import { motion } from 'framer-motion';
import { COURSES } from '../utils/mockData';
import CourseCard from '../components/CourseCard';
import { Search, Compass } from 'lucide-react';

const Courses = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pb-40"
    >
      {/* Editorial Header */}
      <section className="bg-white pt-48 pb-32 text-center relative overflow-hidden border-b border-slate-50">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50" />
        <div className="container mx-auto px-6 relative z-10 space-y-10">
          <div className="inline-flex items-center gap-4 mx-auto">
             <div className="w-10 h-px bg-accent" />
             <span className="text-[10px] font-bold text-accent uppercase tracking-[0.5em]">Collections</span>
             <div className="w-10 h-px bg-accent" />
          </div>
          <h1 className="text-5xl lg:text-8xl font-bold text-primary tracking-tight">
            Our <span className="italic font-light">Archive.</span>
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto italic font-medium">
            Explore a curated selection of intensive cohorts designed for the modern digital strategist.
          </p>
        </div>
      </section>

      {/* Boutique Filter Bar */}
      <div className="container mx-auto px-6 lg:px-12 -mt-10 relative z-20">
        <div className="bg-white p-6 shadow-2xl border border-slate-50 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="relative w-full md:w-[500px]">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
             <input 
               type="text" 
               placeholder="Search the archives..."
               className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-transparent focus:border-accent/40 outline-none transition-all font-bold uppercase tracking-widest text-[10px]"
             />
          </div>
          <div className="flex gap-8 items-center">
             {['All', 'Marketing', 'SEO', 'Branding'].map((tag) => (
               <button 
                 key={tag}
                 className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative py-1 ${tag === 'All' ? 'text-accent border-b border-accent' : 'text-slate-300 hover:text-primary'}`}
               >
                 {tag}
               </button>
             ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="container mx-auto px-6 lg:px-12 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Courses;
