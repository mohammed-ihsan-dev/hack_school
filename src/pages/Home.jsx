import React from 'react';
import { motion } from 'framer-motion';
import { Search, Play, CheckCircle, Star, Quote, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import { COURSES, TESTIMONIALS } from '../utils/mockData';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
              Develop your <br />
              <span className="text-primary italic">skills</span> in a new <br />
              and unique way
            </h1>
            <p className="text-gray-500 text-lg lg:text-xl font-medium max-w-lg leading-relaxed">
              Join a world-leading platform for business development and career testing. We believe in providing unique learning experiences.
            </p>
            <div className="flex items-center gap-8">
              <Button variant="primary" className="px-10 py-4 text-lg">Enroll Now</Button>
              <button className="flex items-center gap-3 font-bold group">
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-primary/20">
                  <Play size={20} fill="currentColor" />
                </div>
                What's Etech?
              </button>
            </div>
            
            <div className="flex items-center gap-12 pt-8">
              <div>
                <div className="text-2xl font-black text-gray-900 font-sans">80+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Online Courses</div>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div>
                <div className="text-2xl font-black text-gray-900 font-sans">10M+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Online Students</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1523240715630-992bb373950d?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover"
                alt="Student"
              />
            </div>
            {/* Decors */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20 floating" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary rounded-full blur-3xl opacity-20 floating animate-delay-1000" />
            
            {/* Floating Card Mock */}
            <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block floating">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                   <CheckCircle size={20} />
                </div>
                <div>
                   <div className="text-xs font-black">2.4k+ Students</div>
                   <div className="text-[10px] text-gray-400">Enrolled this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Partners bar */}
      <section className="bg-primary py-8 overflow-hidden">
        <div className="container mx-auto px-6 whitespace-nowrap overflow-x-auto scrollbar-hide flex items-center justify-between gap-12 lg:gap-0 opacity-80">
          {['duolingo', 'magic leap', 'Microsoft', 'Codecov', 'UserTesting'].map((partner) => (
            <span key={partner} className="text-white text-xl lg:text-3xl font-black uppercase italic tracking-tighter mix-blend-overlay">
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Search Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center space-y-12">
          <h2 className="text-4xl lg:text-5xl font-black">Search Courses</h2>
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search for over 50+ courses"
              className="w-full pl-16 pr-40 py-6 bg-white border-2 border-gray-100 rounded-full focus:border-primary outline-none transition-all shadow-sm"
            />
            <Button variant="primary" className="absolute right-2 top-2 bottom-2 px-10">Search</Button>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-6 scale-90 lg:scale-100">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`aspect-square rounded-[3rem] overflow-hidden shadow-2xl ${i % 2 === 0 ? 'mt-12' : ''}`}>
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} className="w-full h-full bg-slate-100" alt="Student" />
              </div>
            ))}
          </div>
          
          <div className="space-y-10">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              <span className="text-secondary font-serif italic">Benefits</span> From Our Online <br /> Learning
            </h2>
            <div className="space-y-8">
              {[
                { title: 'Online Degree', desc: 'Earn accredited degrees from top global universities fully online.', icon: '🎓' },
                { title: 'Short Courses', desc: 'Master high-demand skills in weeks with targeted micro-credentials.', icon: '⏱️' },
                { title: 'Training From Experts', desc: 'Learn directly from industry leaders at Fortune 500 companies.', icon: '🏆' },
                { title: '1.5k+ Video Courses', desc: 'Access an ever-growing library of high-quality HD video modules.', icon: '🎥' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6 group hover:translate-x-2 transition-transform">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-xl flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all">
                    {benefit.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-gray-900">{benefit.title}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Popular Courses (Purple Gradient Section) */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary to-[#A78BFA] relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center text-white space-y-4 mb-20">
            <h2 className="text-4xl lg:text-5xl font-black">Our Popular Courses</h2>
            <p className="text-white/80 max-w-xl mx-auto font-medium">World-class courses designed to give you a head start in your career and practical skills for the real world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Instructor Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              If You Are A Certified Teacher <br /> Then <span className="text-primary italic">Become An Instructor</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium">Share your knowledge and inspire the world. We provide everything you need to reach millions of students globally.</p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-black">Enjoy Many Perks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-sm font-bold text-gray-600">
                {['Global Reach', 'Flexible Schedule', 'Passive Income', 'Certified Status', 'Direct Support', 'Analytics Dashboard'].map((perk) => (
                   <div key={perk} className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-primary" />
                     {perk}
                   </div>
                ))}
              </div>
            </div>

            <Button variant="primary" className="px-10 py-4">Become an Instructor</Button>
          </div>

          <div className="relative flex justify-center">
             <div className="w-full aspect-square max-w-md rounded-full bg-primary/20 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
             <div className="w-full aspect-[4/5] max-w-md rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img src="https://images.unsplash.com/photo-1544717297-fa154da09f9b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Teacher" />
             </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#A78BFA] to-primary overflow-hidden relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center text-white space-y-4 mb-20">
            <h2 className="text-4xl lg:text-5xl font-black">Student's Testimonials</h2>
            <p className="text-white/80 max-w-2xl mx-auto font-medium">Over 10 million students have changed their lives through Etech. Hear what they have to say about us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] text-white flex flex-col items-center text-center space-y-6"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                  <img src={t.avatar} className="w-full h-full object-cover" alt={t.name} />
                </div>
                <div className="flex text-yellow-400 gap-1">
                   {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="italic font-medium leading-relaxed opacity-90">"{t.quote}"</p>
                <div>
                   <h4 className="text-lg font-black">{t.name}</h4>
                   <p className="text-xs font-bold uppercase tracking-widest opacity-60">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto bg-primary rounded-[3rem] p-12 lg:p-24 text-white text-center space-y-8 relative overflow-hidden shadow-2xl shadow-primary/20">
           <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
           <h2 className="text-4xl lg:text-6xl font-black leading-tight max-w-3xl mx-auto">Ready to develop your unique skills?</h2>
           <p className="text-xl opacity-80 max-w-xl mx-auto">Join 10M+ students today and start your journey towards excellence.</p>
           <div className="pt-8">
             <Link to="/signup">
               <Button className="bg-white text-primary hover:bg-white/90 px-16 py-6 text-xl">Get Started Now</Button>
             </Link>
           </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
