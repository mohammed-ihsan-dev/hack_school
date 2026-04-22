import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#0D0A1E' }}>
            Terms of <span style={{ color: '#6B3EFA' }}>Use</span>
          </h1>
          <p className="text-gray-500 italic">Last updated: April 22, 2026</p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>1. Agreement to Terms</h2>
            <p>By accessing our website at HackSchool, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on HackSchool's website for personal, non-commercial transitory viewing only.</p>
            <p className="mt-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Modify or copy the materials.</li>
              <li>Use the materials for any commercial purpose.</li>
              <li>Attempt to decompile or reverse engineer any software.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>3. Disclaimer</h2>
            <p>The materials on HackSchool's website are provided on an 'as is' basis. HackSchool makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>4. Limitations</h2>
            <p>In no event shall HackSchool or its suppliers be liable for any damages arising out of the use or inability to use the materials on HackSchool's website.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
