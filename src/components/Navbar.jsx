import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', path: '/about' },
    { name: 'Collections', path: '/courses' },
    { name: 'Membership', path: '/' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'nav-blur shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-primary group-hover:text-accent transition-colors">
            <Shield size={28} strokeWidth={1} />
          </div>
          <span className="text-xl font-bold tracking-[0.3em] uppercase transition-colors group-hover:text-accent">
            Hack<span className="font-light italic">School</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all relative py-1 ${isActive(link.path) ? 'text-accent' : 'text-slate-500 hover:text-accent'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/login" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-accent transition-colors">
            Admissions
          </Link>
          <Link to="/signup">
            <Button variant="gold" className="px-6 py-2">Inquire Now</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl h-screen"
          >
            <div className="flex flex-col items-center justify-center h-2/3 p-8 gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold uppercase tracking-[0.3em] ${isActive(link.path) ? 'text-accent' : 'text-slate-900 border-b-2 border-transparent hover:border-accent transition-all'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col items-center gap-6 w-full pt-10">
                <Link to="/login" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  Admissions
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full">
                  <Button variant="gold" className="w-full">Inquire Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
