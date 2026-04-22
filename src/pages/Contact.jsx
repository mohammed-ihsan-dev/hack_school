import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email Us",
      value: "hello@hackschool.com",
      desc: "Our friendly team is here to help."
    },
    {
      icon: <FiMessageCircle />,
      title: "Live Chat",
      value: "Available 10am - 6pm",
      desc: "Speak to our admission experts."
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      value: "+91 98765 43210",
      desc: "Mon-Fri from 9am to 6pm."
    },
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      value: "Calicut, Kerala",
      desc: "Come say hello at our office."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>
            Get in <span style={{ color: '#6B3EFA' }}>Touch</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Have questions about our program? Reach out to us and we'll get back to you as soon as possible.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all bg-white group text-center"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto text-2xl transition-colors bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>{info.title}</h3>
              <p className="font-bold text-primary mb-2 tracking-tight">{info.value}</p>
              <p className="text-sm text-gray-500">{info.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Simple contact box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto rounded-[40px] p-12 text-center relative overflow-hidden"
          style={{ 
            background: 'rgba(255, 255, 255, 0.72)', 
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(107, 62, 250, 0.12)',
            boxShadow: '0 24px 80px rgba(107, 62, 250, 0.1)'
          }}
        >
          <h2 className="text-3xl font-extrabold mb-6" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>Prefer Email?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">Drop us a line at <strong>hello@hackschool.com</strong> and we'll reply within 24 hours.</p>
          <a href="mailto:hello@hackschool.com">
            <button className="px-12 py-4 rounded-2xl font-bold text-white transition-all hover:scale-105 active:scale-95" style={{ background: '#6B3EFA', boxShadow: '0 8px 24px rgba(107, 62, 250, 0.3)' }}>
              Send Message
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
