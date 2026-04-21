import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      transition: 'all 0.4s ease',
      background: isScrolled ? 'rgba(255,255,255,0.92)' : '#ffffff',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: '1px solid #EDE9FE',
      boxShadow: isScrolled ? '0 2px 24px rgba(107,62,250,0.07)' : 'none',
      padding: isScrolled ? '10px 0' : '16px 0',
    }}>
      <div className="container mx-auto px-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            padding: 6,
            background: 'rgba(107,62,250,0.08)',
            borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.3s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Logo className="w-9 h-9" />
          </div>
          <span style={{
            fontSize: 22,
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            color: '#0D0A1E',
            letterSpacing: '-0.5px',
          }}>
            HackSchool
          </span>
        </Link>

        {/* Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#F5F3FF',
          padding: '6px',
          borderRadius: 18,
          border: '1px solid #EDE9FE',
          gap: 2,
        }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  padding: '8px 22px',
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: 'Syne, sans-serif',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  background: isActive ? '#ffffff' : 'transparent',
                  color: isActive ? '#6B3EFA' : '#6B7280',
                  boxShadow: isActive ? '0 2px 8px rgba(107,62,250,0.1)' : 'none',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#0D0A1E'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#6B7280'; }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '9px 20px',
              background: 'transparent',
              border: 'none',
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 700,
              fontFamily: 'Syne, sans-serif',
              color: '#6B7280',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#6B3EFA'; e.currentTarget.style.background = 'rgba(107,62,250,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.background = 'transparent'; }}
            >
              Log In
            </button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '10px 24px',
              background: '#6B3EFA',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 700,
              fontFamily: 'Syne, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: '0 6px 20px rgba(107,62,250,0.3)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#4A1FD8'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(107,62,250,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#6B3EFA'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(107,62,250,0.3)'; }}
            >
              Join Now <FiArrowRight size={15} />
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;