import React, { useState, useEffect } from 'react';
import { FiSearch as Search, FiSliders as SlidersHorizontal } from 'react-icons/fi';
import { LuPackageOpen as PackageOpen } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import API from '../services/api';

const Levels = ['All', 'Beginner', 'Advanced'];

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await API.get('/courses');
        setCourses(data);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-primary/5 py-24 mb-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">100% Outcome Oriented</span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 tracking-tight">Boost Your Career <br /> with <span className="text-primary">HackSchool</span></h1>
            <p className="text-slate-500 font-inter leading-relaxed">Choose from our list of expert-led bootcamps and start your journey with a paid internship guaranteed for top performers.</p>
          </motion.div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="sticky top-[76px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6 mb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Level Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
              {Levels.map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`
                    px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap
                    ${selectedLevel === lvl 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}
                  `}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Find your bootcamp..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 rounded-2xl text-sm border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COURSE GRID */}
      <section className="container mx-auto px-6">
        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 font-bold">{error}</p>
            <button onClick={() => window.location.reload()} className="mt-4 text-primary underline">Try again</button>
          </div>
        )}

        {!loading && !error && (
          <AnimatePresence mode='wait'>
            {filteredCourses.length > 0 ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {filteredCourses.map(course => (
                  <CourseCard key={course._id || course.id} course={course} />
                ))}
              </motion.div>
            ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300 mb-6">
                <PackageOpen size={48} />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2 font-heading">No such program yet</h3>
              <p className="text-slate-500 font-inter max-w-xs mx-auto">Try adjusting your filters or search terms for better results.</p>
              <button 
                onClick={() => {setSelectedLevel('All'); setSearchQuery('');}}
                className="mt-8 text-primary font-bold hover:underline underline-offset-4"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        )}
      </section>
    </div>
  );
};

export default Courses;
