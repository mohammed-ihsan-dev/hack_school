import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Globe, MapPin, ArrowUpRight } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-40 pb-20 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="space-y-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="text-white group-hover:text-accent transition-colors">
                <Shield size={32} strokeWidth={1} />
              </div>
              <span className="text-2xl font-bold tracking-[0.3em] uppercase">HackSchool</span>
            </Link>
            <p className="text-slate-400 font-medium italic leading-relaxed text-sm">
              Cultivating strategic digital visionaries through rigorous institutional discipline and exclusive venture network access.
            </p>
            <div className="flex gap-8">
              {[FaTwitter, FaLinkedin, FaGithub].map((Icon, idx) => (
                <a key={idx} href="#" className="text-slate-500 hover:text-accent transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Internal Routes</h4>
            <ul className="space-y-6">
              {[
                { name: 'Admissions', path: '/login' },
                { name: 'Philosophy', path: '/about' },
                { name: 'Collections', path: '/courses' },
                { name: 'Archives', path: '/' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-between group">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Bylaws</h4>
            <ul className="space-y-6">
              {['Operational Protocol', 'Privacy Policy', 'Institutional Ethics', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Archives Insight</h4>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">Subscribe to the archives for curated growth strategy and residency intakes.</p>
            <div className="relative group border-b border-white/10 pb-2 flex items-center">
              <input 
                type="email" 
                placeholder="REGISTRY EMAIL"
                className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.2em] placeholder:text-slate-700"
              />
              <button className="text-accent hover:text-white transition-colors"><ArrowUpRight size={20} /></button>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-600">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <p>© MMXXIV HackSchool Institutional Platform.</p>
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2"><MapPin size={12} className="text-accent" /> Institutional HQ</span>
              <span className="flex items-center gap-2"><Globe size={12} className="text-accent" /> Earth, SOL</span>
            </div>
          </div>
          <div className="flex items-center gap-2 italic tracking-[0.2em]">
            <span>ESTABLISHED IN INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
