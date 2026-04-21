import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Users, 
  BookOpen, 
  Clock, 
  ChevronDown, 
  CheckCircle,
  ArrowLeft,
  Circle
} from 'lucide-react';
import Button from '../components/Button';
import { COURSES } from '../utils/mockData';

const AccordionItem = ({ index, title }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:border-primary/20 transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm">
            {index}
          </div>
          <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
        </div>
        <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-20 pb-8 text-gray-500 text-sm font-medium leading-relaxed space-y-3"
          >
             <p>This module covers the fundamental concepts and practical applications through hands-on exercises and case studies.</p>
             <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl text-xs font-bold text-gray-600">
                   <Circle size={8} fill="currentColor" className="text-primary" /> 2 Video Lessons
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl text-xs font-bold text-gray-600">
                   <Circle size={8} fill="currentColor" className="text-primary" /> 1 Cheat Sheet
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === id);

  if (!course) return (
    <div className="min-h-screen flex items-center justify-center">
      <Link to="/courses"><Button variant="primary">Return to Courses</Button></Link>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#FDF4FF] pb-40"
    >
      {/* Hero Header */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-primary to-[#A78BFA] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto">
          <Link to="/courses" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold text-sm mb-10 transition-colors">
            <ArrowLeft size={16} /> Back to Courses
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">
                {course.category}
              </span>
              <h1 className="text-4xl lg:text-7xl font-black leading-tight tracking-tight">
                {course.title}
              </h1>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2 font-bold">
                  <Play size={18} /> 15+ Hours Content
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <Users size={18} /> 10k+ Students
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <BookOpen size={18} /> 12 Modules
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-20">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          {/* Main Info */}
          <div className="lg:w-2/3 space-y-20">
            
            {/* Benefits */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black text-gray-900 flex items-center gap-4">
                <div className="w-2 h-10 bg-primary rounded-full" />
                What you'll master
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.whatYouWillLearn.map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl shadow-sm border border-transparent hover:border-primary/20 transition-all">
                    <CheckCircle className="text-primary shrink-0" size={24} />
                    <span className="text-gray-700 font-bold leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-gray-900 flex items-center gap-4">
                  <div className="w-2 h-10 bg-primary rounded-full" />
                  Course Curriculum
                </h2>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{course.modules} Modules</span>
              </div>
              <div className="space-y-4">
                {course.curriculum.map((module, i) => (
                  <AccordionItem key={i} index={i + 1} title={module} />
                ))}
              </div>
            </section>

            {/* Teacher Section */}
            <section className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12">
               <div className="w-48 h-48 rounded-[3rem] overflow-hidden border-8 border-primary/5 shrink-0 shadow-2xl">
                 <img src={course.mentor.avatar} className="w-full h-full object-cover" alt={course.mentor.name} />
               </div>
               <div className="space-y-4">
                 <div>
                   <h3 className="text-3xl font-black text-gray-900">{course.mentor.name}</h3>
                   <p className="text-primary font-black uppercase tracking-widest text-xs mt-1">{course.mentor.role}</p>
                 </div>
                 <p className="text-gray-500 font-medium leading-relaxed italic">"{course.mentor.bio}"</p>
               </div>
            </section>
          </div>

          {/* Sticky Checkout */}
          <div className="lg:w-1/3">
            <div className="sticky top-40 bg-white p-10 rounded-[3.5rem] shadow-2xl shadow-primary/10 border border-gray-100 space-y-10 text-center">
               <div className="space-y-4">
                 <div className="text-xs font-black uppercase tracking-widest text-gray-400">Total Investment</div>
                 <div className="flex items-baseline justify-center gap-4">
                   <span className="text-6xl font-black text-gray-900">${course.price}</span>
                   <span className="text-xl text-gray-300 line-through font-bold">${course.oldPrice}</span>
                 </div>
               </div>

               <div className="space-y-4">
                 <Button className="w-full py-6 text-xl shadow-2xl shadow-primary/40">Enroll in Course</Button>
                 <Button variant="outline" className="w-full py-6">Inquiry with Mentor</Button>
               </div>

               <div className="pt-8 border-t border-gray-50 space-y-6 text-left">
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-900">What's included:</h4>
                  <div className="space-y-4">
                     {[
                       { icon: Clock, text: 'Lifetime access' },
                       { icon: BookOpen, text: 'Certificate of completion' },
                       { icon: Users, text: 'Private community access' },
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-sm font-bold text-gray-600">
                         <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <item.icon size={16} />
                         </div>
                         {item.text}
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetails;
