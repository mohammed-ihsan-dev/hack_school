import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-black text-gray-900 tracking-tight">
              Etech<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-500 font-medium leading-relaxed">
              Build your unique skills with a world-leading platform for business development and career excellence.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-black text-gray-900">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Courses', 'Instructors', 'Benefits'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-gray-500 font-semibold hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-black text-gray-900">Support</h4>
            <ul className="space-y-4">
              {['Help Center', 'Safety Center', 'Community Guidelines', 'Privacy Policy', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-gray-500 font-semibold hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-black text-gray-900">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-gray-500">
                <MapPin className="text-primary shrink-0" size={20} />
                <span className="font-semibold text-sm">123 Learning Lane, EdTech Hub, Earth</span>
              </li>
              <li className="flex gap-4 text-gray-500">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="font-semibold text-sm">+91 (800) ETECH-101</span>
              </li>
              <li className="flex gap-4 text-gray-500">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="font-semibold text-sm">support@etech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">© 2024 Etech Platform. All rights reserved.</p>
          <div className="flex gap-8 text-gray-400 text-sm font-bold uppercase tracking-widest">
            <Link to="/" className="hover:text-primary">Terms</Link>
            <Link to="/" className="hover:text-primary">Privacy</Link>
            <Link to="/" className="hover:text-primary">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
