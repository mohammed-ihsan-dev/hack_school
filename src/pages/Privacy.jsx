import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>
            Privacy <span style={{ color: '#6B3EFA' }}>Policy</span>
          </h1>
          <p className="text-gray-500 italic">Last updated: April 22, 2026</p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>1. Introduction</h2>
            <p>Welcome to HackSchool. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Identity Data</strong> includes first name, last name, and username.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type, and version.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to register you as a new student, manage our relationship with you, and improve our website services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
