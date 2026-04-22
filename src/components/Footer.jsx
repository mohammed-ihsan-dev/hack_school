import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <Logo className="w-12 h-12" />
              <span className="text-2xl font-black font-heading tracking-tight">HackSchool</span>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed font-inter">
              The #1 outcome-driven training platform for digital marketing careers. Learn, earn, and get placed at top startups.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaGithub />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 border border-white/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:ml-12">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Home</Link></li>
              <li><Link to="/courses" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Courses</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Our Story</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Success Wall</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:ml-12">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Terms of Use</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-6 font-medium leading-relaxed">Join 5,000+ subscribers for the latest marketing tips & cohort updates.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="you@example.com"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors w-full"
              />
              <button className="bg-primary hover:bg-secondary py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} HackSchool Education Pvt Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
