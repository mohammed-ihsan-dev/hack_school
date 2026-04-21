import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, MapPin, Phone } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-gradient-primary w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Rocket size={28} />
              </div>
              <span className="text-3xl font-black tracking-tighter">HackSchool</span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed">
              Empowering the next generation of digital operatives through execution-first learning and venture-backed internships.
            </p>
            <div className="flex gap-4">
              {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-primary transition-all group">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Operatives</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white font-bold transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white font-bold transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white font-bold transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  About HackSchool
                </Link>
              </li>
              <li>
                <Link to="/" className="text-slate-400 hover:text-white font-bold transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/" className="text-slate-400 hover:text-white font-bold transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Partner with Us
                </Link>
              </li>
            </ul>

          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Support Protocol</h4>
            <ul className="space-y-4">
              {['Help Center', 'Operational Protocol', 'Privacy Policy', 'Cookie Policy', 'Security'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-slate-400 hover:text-white font-bold transition-all">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Intelligence</h4>
            <p className="text-slate-500 text-sm font-medium">Subscribe for weekly growth hacks and cohort updates.</p>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700 group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-primary transition-all text-sm font-bold"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary rounded-xl text-xs font-black uppercase tracking-widest hover:bg-secondary transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-12 text-xs font-bold text-slate-600 uppercase tracking-widest">
            <p>© 2024 HackSchool Platform. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Remote HQ, Earth</span>
              <span className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 (800) HACK-NOW</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-black text-sm italic">
            <span>HACKED IN INDIA</span>
            <div className="w-6 h-4 bg-orange-500 flex flex-col">
               <div className="flex-1 bg-orange-500"></div>
               <div className="flex-1 bg-white"></div>
               <div className="flex-1 bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
