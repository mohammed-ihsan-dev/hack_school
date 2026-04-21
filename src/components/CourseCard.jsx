import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full">
            {course.tag}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} className="text-primary" />
            <span>{course.modules} Modules</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
          {course.title}
        </h3>

        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <div className="space-y-0.5">
            <span className="text-sm text-slate-500 line-through">₹{course.oldPrice}</span>
            <div className="text-2xl font-bold text-slate-900">₹{course.price}</div>
          </div>
          
          <Link to={`/course/${course.id}`}>
            <Button variant="outline" className="px-4 py-2 group/btn">
              Details
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
