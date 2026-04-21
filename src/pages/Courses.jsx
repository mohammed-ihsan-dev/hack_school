import React from 'react';
import { motion } from 'framer-motion';
import { COURSES } from '../utils/mockData';
import CourseCard from '../components/CourseCard';
import { Filter, Search } from 'lucide-react';

const Courses = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-primary opacity-10 blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-extrabold text-white"
          >
            Explore <span className="text-accent italic">Our Cohorts</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto"
          >
            Join a community of 5000+ elite hackers and start building your career in digital marketing.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar (UI Only) */}
      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search for courses..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-transparent rounded-xl focus:border-primary outline-none transition-all font-medium"
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {['All', 'Marketing', 'SEO', 'Branding', 'Analytics'].map((tag) => (
              <button 
                key={tag}
                className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${tag === 'All' ? 'bg-primary text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {tag}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hidden lg:flex">
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <section className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Empty State Mock */}
      {COURSES.length === 0 && (
        <div className="text-center py-20">
          <div className="text-slate-300 mb-4 flex justify-center"><Search size={64} /></div>
          <h3 className="text-xl font-bold">No courses found matching your criteria</h3>
          <p className="text-slate-500">Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  );
};

export default Courses;
