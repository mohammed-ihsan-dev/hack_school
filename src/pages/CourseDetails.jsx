import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Calendar, 
  Users, 
  Star, 
  PlayCircle, 
  ArrowRight,
  ChevronDown,
  Briefcase,
  Award
} from 'lucide-react';
import Button from '../components/Button';

const CourseDetails = () => {
  const { id } = useParams();

  // Mock data - in real app would fetch by id
  const course = {
    title: 'Performance Marketing & Digital Ads Masterclass',
    mentor: 'Deepak Vishnode',
    role: 'Growth Lead at Razorpay',
    rating: 4.9,
    reviews: 1240,
    price: 4999,
    oldPrice: 9999,
    duration: '12 Weeks',
    students: '2.5k+',
    description: 'Learn the exact strategies used by top unicorn startups to scale their revenue through performance marketing. This program focuses on execution, data analysis, and scaling paid campaigns across Meta, Google, and LinkedIn.',
    curriculum: [
      { title: 'Module 1: Fundamentals of Digital Growth', duration: '2 Hours' },
      { title: 'Module 2: Mastering Meta Ads Manager', duration: '4 Hours' },
      { title: 'Module 3: Google Search & Display Network', duration: '5 Hours' },
      { title: 'Module 4: Data Analytics & Attribution', duration: '3 Hours' },
    ],
    highlights: [
      'Guaranteed Paid Internship',
      'Direct Mentorship from Growth Leads',
      'Life-time Access to Study Material',
      'Industrial Certification',
      'Exclusive Community Access'
    ]
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12 relative">
        {/* Left Column: Content */}
        <div className="flex-grow space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <nav className="flex text-sm text-slate-500 gap-2 font-medium">
              <span>Courses</span>
              <span>/</span>
              <span className="text-primary font-bold">Marketing</span>
            </nav>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              {course.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="font-bold">{course.rating}</span>
                <span className="text-slate-500">({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Users size={18} className="text-primary" />
                <span className="font-medium">{course.students} Students Enrolled</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar size={18} className="text-primary" />
                <span className="font-medium">{course.duration} Cohort</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl w-fit">
              <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Mentor" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Mentor</p>
                <p className="font-bold text-slate-900">{course.mentor}</p>
                <p className="text-xs text-slate-500">{course.role}</p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-slate-100 pb-4">Course Overview</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {course.description}
            </p>
          </section>

          {/* Curriculum */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-slate-100 pb-4">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum Detail */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Curriculum</h2>
              <span className="text-sm font-medium text-slate-500">{course.curriculum.length} Modules • Total 14h content</span>
            </div>
            <div className="space-y-4">
              {course.curriculum.map((module, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-center justify-between group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-primary transition-colors">
                        <PlayCircle size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{module.title}</h4>
                        <p className="text-xs text-slate-500">{module.duration}</p>
                      </div>
                    </div>
                    <ChevronDown size={20} className="text-slate-300" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internship Section */}
          <section className="bg-gradient-primary rounded-3xl p-10 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <Briefcase size={120} />
             </div>
             <div className="relative z-10 space-y-6">
               <div className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest">
                 Exclusives
               </div>
               <h2 className="text-3xl font-bold">Paid Internship Guaranteed</h2>
               <p className="text-white/80 text-lg max-w-xl">
                 After completing 8 weeks of training, you will be placed in a guaranteed 1-month paid internship with our partner startups to implement your learnings.
               </p>
               <div className="flex items-center gap-4 text-sm font-bold">
                 <Award size={24} />
                 <span>Stipend range: ₹10,000 - ₹25,000</span>
               </div>
             </div>
          </section>
        </div>

        {/* Right Column: Pricing Floating Card */}
        <div className="lg:w-[400px] shrink-0">
          <div className="sticky top-32 glass-card p-8 border-2 border-primary/10">
             <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Preview" />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer">
                 <PlayCircle size={64} className="text-white group-hover:scale-110 transition-transform" />
               </div>
             </div>

             <div className="space-y-6">
               <div className="flex items-baseline gap-4">
                 <span className="text-4xl font-bold">₹{course.price}</span>
                 <span className="text-xl text-slate-400 line-through">₹{course.oldPrice}</span>
                 <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded">50% OFF</span>
               </div>

               <Button className="w-full py-4 text-lg">Enroll Now</Button>
               
               <p className="text-center text-xs text-slate-500 font-medium">30-Day Money Back Guarantee</p>

               <div className="space-y-4 pt-6 border-t border-slate-100">
                 <h4 className="font-bold text-sm text-slate-900">This course includes:</h4>
                 <div className="space-y-3">
                    {[
                      { icon: PlayCircle, text: '24 hours on-demand video' },
                      { icon: Briefcase, text: 'Real-world project training' },
                      { icon: Award, text: 'Certificate of completion' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
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
    </div>
  );
};

export default CourseDetails;
