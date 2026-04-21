import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-slate-100 rounded-none overflow-hidden hover:border-accent/40 transition-all duration-700 group flex flex-col h-full"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-700" />
        <div className="absolute bottom-6 left-6">
          <span className="bg-primary/90 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
            {course.tag}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow space-y-6">
        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>{course.category}</span>
          <div className="flex items-center gap-1 text-accent">
            <Star size={12} fill="currentColor" />
            <span>{course.level}</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors leading-tight min-h-[4rem]">
          {course.title}
        </h3>

        <div className="pt-6 border-t border-slate-50 mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 italic">Investment</span>
            <span className="text-xl font-bold text-primary">₹{course.price}</span>
          </div>
          
          <Link to={`/course/${course.id}`}>
            <button className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary hover:text-accent transition-all group/btn">
              View Collection
              <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
