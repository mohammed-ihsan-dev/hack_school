import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  CheckCircle2, 
  Calendar, 
  BarChart, 
  Star, 
  ShieldCheck, 
  ChevronRight,
  Briefcase,
  PlayCircle,
  Clock,
  ArrowLeft
} from 'lucide-react';
import Button from '../components/Button';
import { COURSES } from '../utils/mockData';

const AccordionItem = ({ index, title }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="group border border-slate-100 rounded-[1.5rem] overflow-hidden transition-all bg-white hover:border-primary/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-primary transition-all shadow-sm">
            <span className="font-black text-lg">{index}</span>
          </div>
          <h4 className="font-black text-slate-800 text-lg">{title}</h4>
        </div>
        <ChevronRight size={24} className={`text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-90 text-primary' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-24 pb-8 text-slate-500 font-medium leading-relaxed">
              <ul className="list-disc space-y-2">
                <li>Hands-on execution with real budgets</li>
                <li>Case studies from elite digital frameworks</li>
                <li>Live Q&A with industry operatives</li>
                <li>Downloadable resources & playbooks</li>
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Course not found</h2>
          <Link to="/courses">
            <Button variant="outline">Back to Programs</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pb-32"
    >
      {/* Header Banner */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-8">
            <ArrowLeft size={16} />
            Back to Programs
          </Link>
          
          <div className="max-w-4xl space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-lg text-accent text-[10px] font-black uppercase tracking-widest">
              {course.category}
            </div>
            <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight">
              {course.title}
            </h1>
            <p className="text-slate-400 text-lg lg:text-2xl font-medium max-w-3xl leading-relaxed">
              {course.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-white">
                <Star className="text-yellow-400" size={20} fill="currentColor" />
                <span className="font-bold text-lg">4.9/5</span>
                <span className="text-slate-500 font-medium">(1.2k+ reviews)</span>
              </div>
              <div className="h-4 w-px bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-2 text-slate-300 font-bold uppercase tracking-widest text-xs">
                <Clock size={18} className="text-primary" />
                <span>{course.duration} Cohort</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-bold uppercase tracking-widest text-xs">
                <BarChart size={18} className="text-primary" />
                <span>{course.level}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-16">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          {/* Left Column: Course Info (2/3) */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* What you'll learn */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900">What You'll <span className="text-primary italic">Hack</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scale-95 origin-left">
                {course.whatYouWillLearn.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-primary/20 transition-all">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 font-bold text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum (Accordion) */}
            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-slate-900">Curriculum</h2>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{course.modules} Modules Total</span>
              </div>
              <div className="space-y-4">
                {course.curriculum.map((module, i) => (
                  <AccordionItem key={i} index={i + 1} title={module} />
                ))}
              </div>
            </section>


            {/* Internship Section */}
            <section className="bg-gradient-primary rounded-[2.5rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                 <Briefcase size={180} />
               </div>
               <div className="relative z-10 space-y-6">
                 <div className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 rounded-lg text-[10px] font-black uppercase tracking-[0.2em]">
                   Industry Training
                 </div>
                 <h2 className="text-4xl font-black">Guaranteed Paid Internship</h2>
                 <p className="text-white/80 text-xl max-w-2xl font-medium leading-relaxed">
                   After completing 8 weeks of intensive training, you'll be placed in a guaranteed 1-month paid internship with our partner venture-backed startups to implement your learnings at scale.
                 </p>
                 <div className="flex flex-wrap items-center gap-10 pt-8">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Duration</div>
                      <div className="text-xl font-black">4 Weeks</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Stipend Range</div>
                      <div className="text-xl font-black">₹10K - ₹25K</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Certificate</div>
                      <div className="text-xl font-black">Startup Verified</div>
                    </div>
                 </div>
               </div>
            </section>

            {/* Mentor Profile */}
            <section className="space-y-8 bg-slate-50 p-12 rounded-[2.5rem] border border-slate-200">
               <h2 className="text-2xl font-black">Led by the <span className="text-primary italic">Best</span></h2>
               <div className="flex flex-col md:flex-row items-center gap-10">
                 <div className="w-40 h-40 shrink-0 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                   <img src={course.mentor.avatar} alt={course.mentor.name} className="w-full h-full object-cover" />
                 </div>
                 <div className="space-y-4 text-center md:text-left">
                   <div>
                     <h3 className="text-3xl font-black text-slate-900">{course.mentor.name}</h3>
                     <p className="text-primary font-bold uppercase tracking-widest text-sm">{course.mentor.role}</p>
                   </div>
                   <p className="text-slate-600 text-lg font-medium leading-relaxed">
                     {course.mentor.bio}
                   </p>
                 </div>
               </div>
            </section>
          </div>

          {/* Right Column: Sticky Pricing/CTA (1/3) */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 glass-card p-10 border-2 border-primary/10 shadow-2xl space-y-8">
               <div className="space-y-2">
                 <div className="flex items-baseline gap-4">
                   <span className="text-5xl font-black text-slate-900">₹{course.price}</span>
                   <span className="text-xl text-slate-400 line-through font-bold">₹{course.oldPrice}</span>
                 </div>
                 <p className="text-green-600 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                   <ShieldCheck size={16} /> 
                   Special Cohort Pricing
                 </p>
               </div>

               <Button className="w-full py-5 text-lg font-black uppercase tracking-widest">Enroll in Batch 12</Button>
               <Button variant="outline" className="w-full py-5 text-sm font-black uppercase tracking-widest border-2">Talk to Counselor</Button>
               
               <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Limited Slots for Dec Cohort</p>

               <div className="pt-8 border-t border-slate-100 space-y-6">
                 <h4 className="font-black text-xs uppercase tracking-widest text-slate-900">Program Includes:</h4>
                 <div className="space-y-4">
                    {[
                      { icon: PlayCircle, text: '24+ Hours Live Classes' },
                      { icon: Briefcase, text: 'Execution-first Internship' },
                      { icon: ShieldCheck, text: 'Industry Certification' },
                      { icon: CheckCircle2, text: 'Lifetime Alumni Network' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm text-slate-600 font-bold">
                        <item.icon size={18} className="text-primary" />
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
