import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Rocket, ArrowLeft } from 'lucide-react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Access Granted! Welcome back.', {
      style: {
        borderRadius: '16px',
        background: '#1e293b',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold',
      },
    });
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex"
    >
      {/* Left: Branding & Tagline Content */}
      <div className="hidden lg:flex w-[45%] bg-slate-900 relative overflow-hidden items-center justify-center p-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-primary opacity-20 blur-[120px]" />
        
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
              Join the <br /> <span className="text-primary italic">Hackers</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium leading-relaxed">
              Log in to access your cohorts, counselor support, and internship portal.
            </p>
          </div>

          <div className="space-y-8 pt-10">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black">10K</div>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Operatives</p>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black">24</div>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Cohorts</p>
             </div>
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="w-full lg:w-[55%] bg-white flex items-center justify-center p-8 sm:p-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-10"
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Identity Verification</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Please enter your credentials to proceed</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <Input 
                label="Registered Email" 
                type="email" 
                placeholder="operative@hackschool.com" 
                icon={Mail} 
                required
              />
              <div className="space-y-2">
                <Input 
                  label="Password" 
                  type="password" 
                  placeholder="••••••••" 
                  icon={Lock} 
                  required
                />
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="remember" className="accent-primary h-4 w-4 rounded-md" />
                    <label htmlFor="remember" className="text-xs font-bold text-slate-500 cursor-pointer">Remember me</label>
                  </div>
                  <button type="button" className="text-xs font-black text-primary hover:underline">Reset Password?</button>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full py-5 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20">
              Access Dashboard
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.2em]">
              <span className="bg-white px-6 text-slate-400">Secure Protocol</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 border border-slate-100 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all font-bold text-sm">
              <FaGoogle className="text-red-500" />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border border-slate-100 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all font-bold text-sm">
              <FaGithub />
              GitHub
            </button>
          </div>

          <p className="text-center text-sm font-bold text-slate-400">
            New here? {' '}
            <Link to="/signup" className="text-primary font-black hover:underline uppercase tracking-widest">Create Identity</Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
