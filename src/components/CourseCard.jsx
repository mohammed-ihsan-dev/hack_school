import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-primary text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm">
            {course.tag}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow space-y-4">
        {/* Badges */}
        <div className="flex items-center gap-3 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart size={14} className="text-primary" />
            <span>{course.level}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-slate-100 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 line-through font-medium">₹{course.oldPrice}</span>
              <span className="text-xl font-extrabold text-slate-900">₹{course.price}</span>
            </div>
            
            <Link to={`/course/${course.id}`}>
              <Button variant="outline" className="px-3 py-2 text-sm group/btn">
                Details
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
