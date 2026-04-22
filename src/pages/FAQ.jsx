import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "What is HackSchool?",
      answer: "HackSchool is a premium digital marketing cohort where you learn master-level skills, work on real projects, and earn a stipend while you learn."
    },
    {
      question: "Is the ₹15,000 stipend guaranteed?",
      answer: "Yes, once you pass the initial training phase and move into the internship module, you start earning your stipend as you work on partner projects."
    },
    {
      question: "Do I need prior experience?",
      answer: "No. We start from the basics. However, a passion for digital marketing and a willingness to work hard are essential."
    },
    {
      question: "How long is the program?",
      answer: "The complete program typically lasts for 4 to 6 months, including training and the hands-on internship phase."
    },
    {
      question: "Is it completely online?",
      answer: "Yes, our cohorts are designed to be remote-first with live sessions, community support, and online mentorship."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>
            Frequently Asked <span style={{ color: '#6B3EFA' }}>Questions</span>
          </h1>
          <p className="text-gray-500">Everything you need to know about our program and process.</p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
