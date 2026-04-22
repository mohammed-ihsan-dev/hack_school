import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiBook, FiDollarSign, FiUser, FiSettings, FiHelpCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HelpCentre = () => {
  const categories = [
    {
      icon: <FiBook />,
      title: "Admissions & Courses",
      desc: "Learn about our cohort process, curriculum, and how to enroll.",
      items: ["Application Process", "Curriculum Overview", "Batch Timings"]
    },
    {
      icon: <FiDollarSign />,
      title: "Stipends & Payments",
      desc: "Information regarding stipend payouts, course fees, and refunds.",
      items: ["Earning While Learning", "Fee Structure", "Payment Methods"]
    },
    {
      icon: <FiUser />,
      title: "Student Account",
      desc: "Manage your profile, access your dashboard, and tracking progress.",
      items: ["Password Reset", "Profile Settings", "Progress Tracking"]
    },
    {
      icon: <FiSettings />,
      title: "Technical Support",
      desc: "Troubleshooting platform issues and accessing live sessions.",
      items: ["Live Session Access", "Portal Login Issues", "Platform Features"]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>
            How can we <span style={{ color: '#6B3EFA' }}>help you?</span>
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search for answers..."
              className="w-full pl-14 pr-6 py-5 rounded-2xl border border-gray-100 shadow-sm focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all text-lg"
            />
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all bg-white group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-colors bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>{cat.title}</h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">{cat.desc}</p>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        <Link to="/faq" className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                          <FiHelpCircle className="text-xs" /> {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Help Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[40px] p-12 text-center relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #0D0A1E 0%, #1A1633 100%)',
            boxShadow: '0 24px 80px rgba(107, 62, 250, 0.15)'
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-6 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Still have questions?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Can't find the answer you're looking for? Our support team is here to help you 24/7.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-10 py-4 rounded-2xl font-bold text-white transition-all bg-primary hover:bg-secondary shadow-lg shadow-primary/20">
                  Contact Support
                </button>
              </Link>
              <Link to="/faq">
                <button className="px-10 py-4 rounded-2xl font-bold text-white transition-all border border-white/10 hover:bg-white/5">
                  Visit FAQ
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HelpCentre;
