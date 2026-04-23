import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiZap, FiAward, FiUsers, FiCpu } from 'react-icons/fi';
import API from '../services/api';
import AboutImage from "../assets/Aboutimage.png";

const About = () => {
  const [stats, setStats] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await API.get('/stats');
        setStats(data);
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="pt-32 pb-24 overflow-hidden">

      {/* 1. MISSION & VISION */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">

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

          {/* RIGHT IMAGE (Larger & Animated) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1, 
              y: [0, -15, 0],
            }}
            transition={{ 
              opacity: { duration: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="flex items-center justify-center w-full"
          >
            <img
              src={AboutImage}
              alt="HackSchool Team"
              className="w-full h-auto object-contain max-w-[720px] lg:scale-125 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-dark py-20">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {!loading && stats.map((stat, idx) => (
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
          {loading && (
            <div className="col-span-full text-center py-10">
              <p className="text-slate-400">Loading metrics...</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. WHY HACKSCHOOL */}
      <section className="py-24 relative bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-primary">
              Our Advantage
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-4 text-dark tracking-tight">
              Why We're Different
            </h2>

            <div className="mx-auto h-1 w-12 rounded-full bg-slate-200" />

            <p className="mt-5 text-sm max-w-lg mx-auto text-slate-500 leading-relaxed">
              Experience a learning ecosystem built for careers, not just certificates.
            </p>
          </motion.div>

          {/* Feature Grid — 2 rows, 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Paid Internship', 
                desc: 'Earn a ₹15,000+ monthly stipend while mastering digital marketing on live partner projects.',
                icon: <FiAward /> 
              },
              { 
                title: 'Direct Hiring', 
                desc: 'Skip the job boards. Our network of 400+ partner startups hires directly from our graduate pool.',
                icon: <FiTarget /> 
              },
              { 
                title: 'Lifetime Learning', 
                desc: 'Get unlimited access to live sessions, updated curriculum, and our exclusive alumni community.',
                icon: <FiZap /> 
              },
              { 
                title: 'Expert Mentors', 
                desc: 'Learn from industry leaders who have successfully built and scaled global digital brands.',
                icon: <FiUsers /> 
              },
              { 
                title: 'Real Projects', 
                desc: 'Work on actual brand campaigns with real budgets, not just theoretical classroom assignments.',
                icon: <FiCpu /> 
              },
              { 
                title: 'Outcome Based', 
                desc: 'Every module is mapped to current industry requirements to ensure you are day-one job ready.',
                icon: <FiCheckCircle /> 
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-3xl mb-8 transition-all duration-500 bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-dark font-heading mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-inter px-2">
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