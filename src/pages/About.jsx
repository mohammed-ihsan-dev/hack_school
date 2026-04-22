import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiZap, FiAward } from 'react-icons/fi';
import { STATS } from '../utils/mockData';
import AboutImage from "../assets/Aboutimage.png";

const About = () => {
  return (
    <div className="pt-32 pb-24 overflow-hidden">

      {/* 1. MISSION & VISION */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold font-heading mb-8 leading-tight">
              Bridging the gap between <span className="text-primary italic">Learning</span> & <span className="text-secondary underline underline-offset-8">Earning</span>.
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-inter">
              HackSchool was founded with a single mission: to revolutionize education by making it outcome-driven. 
              We don't just sell courses; we build careers through real-world experience, paid internships, and direct industry mentorship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Our Mission", desc: "Empower 100,000+ students with digital skills by 2026.", icon: <FiTarget className="text-primary" /> },
                { title: "Our Vision", desc: "Build the world's most effective job-oriented training platform.", icon: <FiZap className="text-secondary" /> }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-xl">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-dark mb-2 font-heading">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-inter">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
         <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center w-full"
        >
          <img
            src={AboutImage}
            alt="HackSchool Team"
            className="w-full h-auto object-contain"
          />
        </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-dark py-20">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 font-heading tracking-tighter">
                {stat.value}
              </div>
              <div className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY HACKSCHOOL */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4 text-primary">
              Our Advantage
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-5 text-dark">
              Why We're Different
            </h2>

            <div className="mx-auto h-1 w-16 rounded-full bg-black/80" />

            <p className="mt-6 text-base max-w-xl mx-auto text-slate-500">
              We don't just teach. We build careers with real outcomes, real money, and real connections.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: '₹15K+',
                title: 'Real Stipends',
                desc: 'No more free internships. Every student on our program gets paid while they learn.',
              },
              {
                stat: '400+',
                title: 'Direct Referrals',
                desc: 'Our network of partner startups hires directly from HackSchool.',
              },
              {
                stat: 'Lifetime',
                title: 'Unlimited Access',
                desc: 'Access all course updates, sessions, and resources forever.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition hover:scale-[1.02]"
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight font-heading">
                  {item.stat}
                </div>

                <div className="w-8 h-[2px] bg-black/20 mb-5" />

                <h3 className="text-lg font-bold mb-3 tracking-wide font-heading">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-slate-50 rounded-[40px] px-12 py-20 text-center border border-slate-100">
          <h2 className="text-4xl font-extrabold font-heading mb-8">
            Ready to join the movement?
          </h2>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Stop worrying about the job market. Start building the skills that make companies worry about losing you.
          </p>

          <button className="btn-primary text-xl px-12 py-5 rounded-2xl">
            Start Your Journey Today
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;