import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { COURSES } from '../utils/mockData';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';

const Courses = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FDF4FF] min-h-screen pb-32"
    >
      {/* Header */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-primary to-[#A78BFA] text-white">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black tracking-tight">Our Knowledge Hub</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg font-medium">Explore 80+ world-class courses designed to accelerate your career and personal growth.</p>
          
          <div className="max-w-2xl mx-auto relative pt-8 group">
            <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search for your next skill..."
              className="w-full pl-20 pr-40 py-6 bg-white text-gray-900 border-none rounded-full focus:ring-4 focus:ring-primary/20 outline-none transition-all shadow-xl"
            />
            <Button variant="primary" className="absolute right-3 top-3 bottom-3 px-10 shadow-none">Find Course</Button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar (Optional UI) */}
          <div className="lg:w-1/4 space-y-8 hidden lg:block">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm space-y-8">
              <h4 className="text-lg font-black text-gray-900">Categories</h4>
              <div className="space-y-4">
                {['All Courses', 'Marketing', 'SEO', 'Branding', 'Analytics'].map((tag) => (
                  <label key={tag} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-primary rounded-lg" defaultChecked={tag === 'All Courses'} />
                    <span className="text-sm font-bold text-gray-600 group-hover:text-primary transition-colors">{tag}</span>
                  </label>
                ))}
              </div>
              <div className="pt-4">
                 <Button variant="outline" className="w-full text-xs py-3">Clear Filters</Button>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4 space-y-12">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Showing {COURSES.length} Courses</p>
              <button className="flex items-center gap-2 text-primary font-black lg:hidden">
                <Filter size={18} /> Filters
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {COURSES.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Courses;
