import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-4 rounded-[2rem] shadow-sm border border-transparent hover:border-primary/10 transition-all group overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-4 bg-gray-100">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase">
          {course.tag || 'New'}
        </div>
      </div>
      
      <div className="space-y-4">
        {/* Meta */}
        <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500">
          <div className="flex items-center gap-1">
            <BookOpen size={14} className="text-primary" />
            <span>10 Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} className="text-primary" />
            <span>50+ Students</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2 min-h-[3rem]">
          {course.title}
        </h3>

        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              <img src={course.mentor.avatar} alt={course.mentor.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-bold text-gray-600 truncate max-w-[80px]">{course.mentor.name}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xl font-black text-primary">${course.price}</span>
          </div>
        </div>
        
        <Link to={`/course/${course.id}`} className="block">
          <button className="w-full py-3 bg-gray-50 text-gray-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
            Enroll Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;
