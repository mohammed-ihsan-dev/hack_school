import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Zap, Star, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';

const Home = () => {
  const stats = [
    { label: 'Enrolled Students', value: '10K+' },
    { label: 'Industry Mentors', value: '50+' },
    { label: 'Avg. Internship Stripe', value: '₹15K' },
    { label: 'Placement Rate', value: '94%' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Performance Marketing & Digital Ads Masterclass',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      duration: '12 Weeks',
      modules: 18,
      price: 4999,
      oldPrice: 9999,
      tag: 'Bestseller'
    },
    {
      id: 2,
      title: 'SEO & Content Strategy for High Growth',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      duration: '8 Weeks',
      modules: 12,
      price: 3499,
      oldPrice: 6999,
      tag: 'Trending'
    },
    {
      id: 3,
      title: 'Social Media Management & Branding',
      image: 'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?q=80&w=2148&auto=format&fit=crop',
      duration: '10 Weeks',
      modules: 15,
      price: 3999,
      oldPrice: 7999,
      tag: 'Popular'
    }
  ];

  const features = [
    { icon: Rocket, title: 'Learn by Doing', desc: 'Real-world projects and case studies from day one.' },
    { icon: Zap, title: 'Paid Internships', desc: 'Get guaranteed internship opportunities with top startups.' },
    { icon: Target, title: 'Expert Mentorship', desc: 'Direct access to industry leaders and digital gurus.' },
    { icon: Users, title: 'Elite Community', desc: 'Network with fellow hackers and scale your career.' },
  ];

  return (
    <div className="space-y-32 mb-32">
      {/* Hero Section */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Admissions Open for Winter Cohort
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Hack Your Career with <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Digital Expertise</span>
          </h1>
          
          <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-xl">
            Don't just learn. Execute. Get trained by industry experts and land a 
            <span className="text-primary font-bold"> guaranteed paid internship </span> 
            in high-growth digital marketing roles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="py-4 px-10 text-lg">
              Explore Courses
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="py-4 px-10 text-lg">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full translate-x-10 translate-y-10"></div>
          <div className="relative glass-card p-4 aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              className="w-full h-full object-cover rounded-2xl"
              alt="Hero"
            />
            {/* Float Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[240px]"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <Star fill="currentColor" size={24} />
              </div>
              <div>
                <div className="text-xl font-bold">4.9/5</div>
                <div className="text-sm text-slate-500">Student Satisfaction Rate</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-2"
              >
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <h2 className="text-4xl font-bold">Why <span className="text-primary italic">HackSchool</span>?</h2>
          <p className="text-slate-600">We bridge the gap between classroom theory and industry reality through our execution-first approach.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-soft transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Launch Your Career</h2>
            <p className="text-slate-600 max-w-xl">Curated cohorts designed to make you industry-ready in weeks, not years.</p>
          </div>
          <Button variant="outline">View All Courses</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <div className="relative bg-slate-900 rounded-[2rem] p-12 lg:p-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-primary opacity-20 blur-[100px]"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Ready to hack your way <br /> to success?</h2>
              <p className="text-slate-400 text-lg">Join 10,000+ students who transformed their careers with HackSchool's execution-first training.</p>
              <div className="flex flex-wrap gap-4">
                <Button className="py-4 px-10">Get Started Now</Button>
                <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 py-4 px-10">Talk to Expertise</Button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="bg-slate-800/50 backdrop-blur aspect-square rounded-2xl border border-slate-700/50"></div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
