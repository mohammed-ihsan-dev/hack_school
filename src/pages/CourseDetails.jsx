import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft,
  ChevronRight,
  Shield,
  Circle,
  Award,
  Globe,
  Clock,
  Compass
} from 'lucide-react';
import Button from '../components/Button';
import { COURSES } from '../utils/mockData';

const AccordionItem = ({ index, title }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-slate-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
      >
        <div className="flex items-center gap-8">
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{index.toString().padStart(2, '0')}</span>
          <h4 className="font-bold text-slate-800 text-xl tracking-tight group-hover:text-accent transition-colors">{title}</h4>
        </div>
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-accent' : ''}`}>
          <ChevronRight size={20} className="text-slate-200" />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="pl-12 pb-10 text-slate-500 font-medium italic leading-relaxed space-y-4">
              <p>An in-depth exploration of institutional methodologies and execution frameworks. Operatives will engage in rigorous practical training and case study analysis.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] uppercase font-bold tracking-widest text-primary">
                <li className="flex items-center gap-2"><Circle size={8} fill="currentColor" className="text-accent" /> High-Stakes Execution</li>
                <li className="flex items-center gap-2"><Circle size={8} fill="currentColor" className="text-accent" /> Advisory Mentorship</li>
                <li className="flex items-center gap-2"><Circle size={8} fill="currentColor" className="text-accent" /> Strategic Playbooks</li>
                <li className="flex items-center gap-2"><Circle size={8} fill="currentColor" className="text-accent" /> Resource Access</li>
              </ul>
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

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center p-20">
        <div className="text-center space-y-10">
          <h2 className="text-4xl font-bold italic">Artifact not found.</h2>
          <Link to="/courses">
            <Button variant="outline">Return to Archives</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pb-52"
    >
      {/* Editorial Header */}
      <section className="bg-white pt-48 pb-32 relative overflow-hidden border-b border-slate-50">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-20 items-end">
          <div className="lg:w-2/3 space-y-12">
            <Link to="/courses" className="inline-flex items-center gap-3 text-slate-400 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
              <ArrowLeft size={16} />
              Return to Catalog
            </Link>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-accent" />
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.5em]">{course.category}</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-bold text-primary leading-tight tracking-tight">
                {course.title}
              </h1>
              <p className="text-slate-500 text-xl lg:text-2xl font-medium italic max-w-3xl leading-relaxed">
                {course.description}
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-end">
             <div className="text-right space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Authored by</span>
                <div className="flex items-center gap-4 justify-end">
                  <div className="text-right">
                    <div className="font-bold text-primary">{course.mentor.name}</div>
                    <div className="text-[10px] font-bold text-accent uppercase tracking-widest">{course.mentor.role}</div>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-100 shadow-xl">
                    <img src={course.mentor.avatar} className="grayscale" alt="Mentor" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 mt-32">
        <div className="flex flex-col lg:flex-row gap-32 relative">
          <div className="lg:w-2/3 space-y-24">
            
            {/* Philosophical Pillars */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold text-primary tracking-tight italic underline underline-offset-1 w-fit">Core Methodologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {course.whatYouWillLearn.map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <span className="text-accent font-bold text-[10px] uppercase tracking-widest mt-1 opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}.</span>
                    <span className="text-slate-700 font-bold text-sm tracking-widest uppercase leading-loose">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum (Accordion) */}
            <section className="space-y-12">
              <div className="flex items-center justify-between border-b-2 border-primary pb-6">
                <h2 className="text-3xl font-bold text-primary tracking-tight">Syllabus Breakdown</h2>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300">
                  <Compass size={14} />
                  <span>{course.modules} Modules of Intensity</span>
                </div>
              </div>
              <div className="divide-y divide-slate-50">
                {course.curriculum.map((module, i) => (
                  <AccordionItem key={i} index={i + 1} title={module} />
                ))}
              </div>
            </section>

            {/* Residency Section */}
            <section className="bg-primary text-white p-12 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-16 shadow-2xl">
               <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none rotate-12">
                 <Shield size={250} strokeWidth={1} />
               </div>
               <div className="relative z-10 lg:w-3/5 space-y-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-[0.3em]">
                   Residency Program
                 </div>
                 <h2 className="text-5xl font-bold tracking-tight">Venture-Backed Apprenticeship</h2>
                 <p className="text-slate-400 text-lg italic leading-relaxed">
                   Upon successful completion of the theoretical phase, candidates will proceed to a month-long institutional residency with our venture-backed partner firms.
                 </p>
                 <div className="grid grid-cols-3 gap-10 pt-10 border-t border-white/10">
                    <div className="space-y-2">
                      <div className="text-accent"><Clock size={20} strokeWidth={1}/></div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Duration</div>
                      <div className="text-lg font-bold">4 Weeks</div>
                    </div>
                    <div className="space-y-2">
                       <div className="text-accent"><Globe size={20} strokeWidth={1}/></div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Reach</div>
                      <div className="text-lg font-bold">Global</div>
                    </div>
                    <div className="space-y-2">
                       <div className="text-accent"><Award size={20} strokeWidth={1}/></div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Tier</div>
                      <div className="text-lg font-bold">Premier</div>
                    </div>
                 </div>
               </div>
               <div className="hidden lg:block lg:w-2/5 grayscale brightness-75">
                  <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover" alt="Residency" />
               </div>
            </section>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-40 bg-white p-12 border-2 border-slate-50 shadow-2xl space-y-12">
               <div className="space-y-4">
                 <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Institutional Access</div>
                 <div className="flex items-baseline gap-6">
                   <span className="text-5xl font-bold text-primary tracking-tight">₹{course.price}</span>
                   <span className="text-lg text-slate-300 line-through font-bold">₹{course.oldPrice}</span>
                 </div>
               </div>

               <div className="space-y-6">
                 <Button variant="primary" className="w-full py-5 text-xs">Request Enrollment</Button>
                 <Button variant="outline" className="w-full py-5 text-xs">Curriculum Inquiry</Button>
               </div>

               <div className="pt-10 border-t border-slate-50 space-y-8">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-primary italic">Inclusions:</h4>
                 <div className="space-y-6">
                    {[
                      { text: 'Direct Operator Advisory' },
                      { text: 'Venture Network Access' },
                      { text: 'Portfolio Audit' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span>{item.text}</span>
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
