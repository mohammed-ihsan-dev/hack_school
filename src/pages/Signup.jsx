import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Rocket, ArrowLeft, User } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import Input from '../components/Input';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Account created successfully!', {
      icon: '✨',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="min-h-screen flex flex-row-reverse">
      {/* Right: Branding & Decoration */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center p-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-primary opacity-20 blur-[120px]"></div>
        <div className="relative z-10 text-white space-y-12">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            <span className="font-medium">Back to website</span>
          </Link>
          
          <div className="space-y-6">
            <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-soft">
              <Rocket size={32} />
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              Join the <br /> <span className="bg-gradient-primary bg-clip-text text-transparent italic">Elite Hackers</span> Community
            </h1>
            <p className="text-slate-400 text-xl max-w-md">
              Start your career with high-growth marketing cohorts and paid internships.
            </p>
          </div>

          <div className="space-y-6">
             <div className="flex -space-x-3">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-700 flex items-center justify-center text-xs font-bold overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                 </div>
               ))}
               <div className="w-12 h-12 rounded-full border-4 border-slate-900 bg-primary flex items-center justify-center text-xs font-bold">
                 +10k
               </div>
             </div>
             <p className="text-sm font-medium text-slate-500">Joined by developers & marketers worldwide</p>
          </div>
        </div>
      </div>

      {/* Left: Signup Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 sm:p-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md space-y-10"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Create account</h2>
            <p className="text-slate-500 font-medium">Join us and start your high-growth journey.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              label="Full Name" 
              type="text" 
              placeholder="John Doe" 
              icon={User} 
              required
            />
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="john@example.com" 
              icon={Mail} 
              required
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="Min. 8 characters" 
              icon={Lock} 
              required
            />

            <div className="flex items-start gap-3">
              <input type="checkbox" id="terms" className="mt-1 accent-primary h-4 w-4" required />
              <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                By signing up, you agree to our <span className="text-primary font-bold">Terms of Service</span> and <span className="text-primary font-bold">Privacy Policy</span>.
              </label>
            </div>

            <Button type="submit" className="w-full py-4 text-lg">
              Create My Account
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold">
              <FaGithub size={18} />
              GitHub
            </button>

          </div>

          <p className="text-center text-sm font-medium text-slate-500">
            Already have an account? {' '}
            <Link to="/login" className="text-primary font-bold hover:underline">Log in here</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
