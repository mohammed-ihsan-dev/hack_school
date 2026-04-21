import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-primary w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-soft">
                <Rocket size={24} />
              </div>
              <span className="text-2xl font-bold">HackSchool</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Empowering students with career-focused skills and paid internships. Join the next generation of digital marketing experts.
            </p>
            <div className="flex gap-4">
              {[FaTwitter, FaLinkedin, FaGithub].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>

          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Courses', 'Internships', 'Pricing'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-slate-400 hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Support</h4>
            <ul className="space-y-4">
              {['Help Center', 'Terms of Service', 'Privacy Policy', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-slate-400 hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Newsletter</h4>
            <p className="text-slate-400 text-sm">
              Get the latest updates and career tips.
            </p>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:border-primary transition-all text-sm"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 HackSchool. All rights reserved.</p>
          <p>Made with ❤️ for Hackers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
