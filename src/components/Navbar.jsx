import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FiArrowRight, FiUser, FiLogOut, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowDropdown(false);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      isScrolled ? 'bg-white/92 backdrop-blur-md py-2.5 shadow-lg shadow-primary/5' : 'bg-white py-4'
    } border-b border-slate-100`}>
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="p-1.5"
          >
            <Logo className="w-10 h-10 md:w-12 md:h-12" />
          </motion.div>
          <span className="text-xl md:text-2xl font-black font-heading text-dark tracking-tighter">
            HackSchool
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center bg-slate-50 p-1.5 rounded-2xl border border-slate-100 gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-2 rounded-xl text-sm font-bold font-heading transition-all duration-300 no-underline ${
                  isActive 
                    ? 'bg-white text-primary shadow-sm shadow-primary/10' 
                    : 'text-slate-500 hover:text-dark'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTAs / User Profile */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-2xl cursor-pointer transition-all hover:border-primary/30"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <FiUser size={18} />
                </div>
                <span className="font-bold text-sm text-dark font-syne">{user.name}</span>
                <FiChevronDown size={14} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-[calc(100%+12px)] right-0 w-52 bg-white border border-slate-100 rounded-[24px] shadow-2xl p-2 z-[100]"
                  >
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 p-4 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-bold text-sm"
                    >
                      <FiLogOut size={16} />
                      Log Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link to="/login" className="no-underline">
                <button className="px-6 py-2.5 text-sm font-bold font-heading text-slate-500 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                  Log In
                </button>
              </Link>
              <Link to="/signup" className="no-underline">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold font-heading rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark hover:-translate-y-0.5 transition-all">
                  Join Now <FiArrowRight size={15} />
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-dark hover:bg-slate-100 rounded-xl transition-all"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-50 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`p-4 rounded-2xl text-lg font-bold font-heading no-underline ${
                      location.pathname === link.path ? 'bg-primary/5 text-primary' : 'text-slate-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                {user ? (
                  <>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                        <FiUser size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-dark">{user.name}</div>
                        <div className="text-sm text-slate-500 font-medium">{user.email}</div>
                      </div>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center justify-center gap-3 p-4 w-full bg-red-50 text-red-500 font-bold rounded-2xl hover:bg-red-100 transition-all"
                    >
                      <FiLogOut size={18} />
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="no-underline w-full">
                      <button className="w-full py-4 bg-slate-50 text-dark font-bold rounded-2xl hover:bg-slate-100 transition-all">
                        Log In
                      </button>
                    </Link>
                    <Link to="/signup" className="no-underline w-full">
                      <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all">
                        Join Now
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;