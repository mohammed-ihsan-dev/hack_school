import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', path: '/courses' },
    { name: 'Teachers', path: '/about' },
    { name: 'Offers', path: '/' },
    { name: 'Contact', path: '/' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black text-gray-900 tracking-tight">
          Etech<span className="text-primary">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="px-5">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary" className="px-6">Free Trial</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-semibold text-gray-700"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">Sign In</Button>
            </Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full">Free Trial</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
