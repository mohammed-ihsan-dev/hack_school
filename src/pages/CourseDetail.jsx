import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiClock as Clock, 
  FiBookOpen as BookOpen, 
  FiStar as Star, 
  FiChevronLeft as ChevronLeft,
  FiZap,
  FiPlayCircle,
  FiMessageSquare,
  FiUsers,
  FiArrowRight
} from 'react-icons/fi';
import API from '../services/api';
import Button from '../components/Button';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await API.get(`/courses/${id}`);
        setCourse(data);
      } catch (err) {
        console.error('Error fetching course:', err);
        setError('Course not found or failed to load.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-dark mb-4">Oops! {error || 'Course not found'}</h2>
        <Link to="/courses">
          <Button variant="primary">Back to Bootcamps</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20 bg-white min-h-screen font-inter">
      {/* MINIMALIST HERO SECTION */}
      <section className="relative py-16 md:py-24 border-b border-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[10rem] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link to="/courses" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary font-bold text-sm transition-colors group">
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Bootcamps
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary/10 text-primary text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  {course.level}
                </span>
                {course.isInternship && (
                  <span className="bg-emerald-50 text-emerald-600 text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                    <FiZap size={12} /> Internship Included
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading text-dark mb-8 leading-tight tracking-tight">
                {course.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-8 mb-10 border-y border-slate-50 py-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary">
                    <Clock size={22} />
                  </div>
                  <div>
                    <div className="text-lg font-black text-dark leading-none">{course.duration}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary">
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <div className="text-lg font-black text-dark leading-none">{course.lessons}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Modules</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-amber-500">
                    <Star size={22} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-dark leading-none">{course.rating || '4.9'}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Trust Score</div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <h3 className="text-2xl font-black text-dark mb-4">About this program</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {course.description || "Transform your career with our industry-leading bootcamp. Designed by experts, this program provides you with the practical skills, mentorship, and real-world projects needed to excel in the digital marketing landscape."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-12 pt-12 border-t border-slate-50">
                <Button size="lg" className="px-12 py-6 rounded-2xl shadow-2xl shadow-primary/20 text-lg group">
                  Join Bootcamp <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="px-12 py-6 rounded-2xl text-lg w-full">
                    <FiMessageSquare className="mr-2" /> Talk to Expert
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="sticky top-32 space-y-12">
                {/* Visual Preview */}
                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border-8 border-white group">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                      <FiPlayCircle size={40} className="text-primary ml-1" />
                    </div>
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Why Join Us?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                        <FiUsers size={12} />
                      </div>
                      <span className="text-slate-600 font-medium text-sm">Join a community of 5000+ active learners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                        <FiZap size={12} />
                      </div>
                      <span className="text-slate-600 font-medium text-sm">Industry recognized ISO certification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                        <FiUsers size={12} />
                      </div>
                      <span className="text-slate-600 font-medium text-sm">1-on-1 mentorship with experts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SYLLABUS & MENTOR SECTION */}
      <section className="py-24 bg-slate-50/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Short Syllabus */}
            <div>
              <h2 className="text-3xl font-black font-heading text-dark mb-10 flex items-center gap-4">
                <span className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white text-xl">
                  <BookOpen size={24} />
                </span>
                Program Syllabus
              </h2>
              <div className="space-y-4">
                {[
                  "Introduction to Digital Ecosystem",
                  "Market Research & Consumer Psychology",
                  "Search Engine Optimization (SEO) Mastery",
                  "Performance Marketing & Paid Ads",
                  "Content Strategy & Social Media",
                  "Analytics & Conversion Optimization"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-primary/30 transition-all group"
                  >
                    <span className="text-lg font-black text-slate-200 group-hover:text-primary/30 transition-colors w-8">0{index + 1}</span>
                    <span className="text-slate-700 font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mentors */}
            <div>
              <h2 className="text-3xl font-black font-heading text-dark mb-10 flex items-center gap-4">
                <span className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white text-xl">
                  <FiUsers size={24} />
                </span>
                Your Lead Mentor
              </h2>
              <div className="bg-white rounded-[3rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-700" />
                
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                  <div className="relative">
                    <img 
                      src={course.mentor?.image || course.mentor?.avatar || 'https://i.pravatar.cc/150'} 
                      alt={course.mentor?.name || 'Instructor'} 
                      className="w-32 h-32 rounded-[2rem] object-cover border-4 border-white shadow-2xl"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl shadow-lg">
                      <FiZap size={16} />
                    </div>
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl font-black text-dark mb-2">{course.mentor?.name || 'Rahul Mehta'}</h3>
                    <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
                      {course.mentor?.role || 'Growth Marketer'} @ {course.mentor?.company || 'BrandHackers'}
                    </p>
                    <p className="text-slate-500 leading-relaxed font-medium mb-8">
                      Industry veteran with 10+ years of experience. Helped 100+ brands scale their revenue through performance marketing and data-driven strategies.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <div className="px-5 py-2.5 bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 uppercase tracking-widest border border-slate-100">
                        10+ Years Exp
                      </div>
                      <div className="px-5 py-2.5 bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 uppercase tracking-widest border border-slate-100">
                        Ex-Google
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 border-t border-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black font-heading text-dark mb-6">Ready to launch your career?</h2>
            <p className="text-slate-500 text-lg mb-12">Don't miss out on the opportunity to learn from the best in the industry. Our bootcamps are filling up fast.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="px-16 py-6 rounded-2xl shadow-2xl shadow-primary/30 text-lg">Join This Bootcamp</Button>
              <Link to="/contact" className="text-primary font-black text-lg hover:underline underline-offset-8 transition-all">
                Still have questions? Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
