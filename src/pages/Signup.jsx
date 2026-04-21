import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Rocket, ArrowLeft, User } from 'lucide-react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import Input from '../components/Input';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Onboarding Initiated! Check your email.', {
      style: {
        borderRadius: '16px',
        background: '#1e293b',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold',
      },
    });
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-row-reverse"
    >
      {/* Right: Branding Background */}
      <div className="hidden lg:flex w-[45%] bg-slate-900 relative overflow-hidden items-center justify-center p-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-primary opacity-20 blur-[120px]" />
        
        <div className="relative z-10 text-white space-y-12 max-w-sm">
          <Link to="/" className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all font-bold uppercase tracking-widest text-xs group">
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            Back to website
          </Link>
          
          <div className="space-y-6">
            <div className="bg-gradient-primary w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-2xl">
              <Rocket size={40} />
            </div>
            <h1 className="text-6xl font-black leading-tight tracking-tighter">
              Start your <br /> <span className="text-primary italic">Trajectory</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium leading-relaxed">
              Join 5000+ operatives scaling their careers through intensive execution-first training.
            </p>
          </div>

          <div className="pt-10">
             <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-6">Trusted Graduates At</p>
             <div className="flex flex-wrap gap-8 opacity-40 font-black tracking-tighter grayscale">
                <span>SWIGGY</span>
                <span>RAZORPAY</span>
                <span>CANVA</span>
             </div>
          </div>
        </div>
      </div>

      {/* Left: Signup Form */}
      <div className="w-full lg:w-[55%] bg-white flex items-center justify-center p-8 sm:p-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md space-y-10"
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Onboarding</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Create your professional identity</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Input 
                label="Full Name" 
                type="text" 
                placeholder="John " 
                icon={User} 
                required
              />
              <Input 
                label="Professional Email" 
                type="email" 
                placeholder="john@operative.io" 
                icon={Mail} 
                required
              />
              <Input 
                label="Password" 
                type="password" 
                placeholder="Minimum 8 characters" 
                icon={Lock} 
                required
              />
            </div>

            <div className="flex items-start gap-3 px-1">
              <input type="checkbox" id="terms" className="mt-1 accent-primary h-4 w-4 rounded-md" required />
              <label htmlFor="terms" className="text-[11px] font-bold text-slate-500 leading-tight cursor-pointer">
                I verify that the information provided is accurate and I agree to the HackSchool <span className="text-primary">Operational Protocol</span> and <span className="text-primary">Privacy Policy</span>.
              </label>
            </div>

            <Button type="submit" className="w-full py-5 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20">
              Initialize Account
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.2em]">
              <span className="bg-white px-6 text-slate-400">Collaborative Entry</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 border border-slate-100 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all font-bold text-sm">
              <FaGoogle className="text-red-500" />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border border-slate-100 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all font-bold text-sm">
              <FaGithub />
              GitHub
            </button>
          </div>

          <p className="text-center text-sm font-bold text-slate-400">
            Already have an account? {' '}
            <Link to="/login" className="text-primary font-black hover:underline uppercase tracking-widest">Sign In</Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Signup;
