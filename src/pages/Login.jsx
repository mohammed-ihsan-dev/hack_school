import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Key, Mail, ArrowLeft } from 'lucide-react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Access Granted.', {
      style: {
        borderRadius: '0px',
        background: '#0F172A',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
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
      {/* Left: Classic Visual Panel */}
      <div className="hidden lg:flex w-[40%] bg-primary relative overflow-hidden items-center justify-center p-20 shadow-2xl">
        <div className="absolute inset-0 grayscale opacity-40">
           <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Library" />
        </div>
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative z-10 text-white space-y-16 max-w-sm text-center">
          <Link to="/" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-all font-bold uppercase tracking-[0.4em] text-[10px] group">
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            Home
          </Link>
          
          <div className="space-y-8">
            <div className="w-20 h-20 mx-auto border border-white/20 flex items-center justify-center text-white shadow-2xl rotate-45">
              <Compass size={40} strokeWidth={1} className="-rotate-45" />
            </div>
            <h1 className="text-6xl font-bold tracking-tight italic">
              Verification.
            </h1>
            <p className="text-white/60 text-lg font-medium italic leading-relaxed">
              Enter the inner circle. Access your archives and research modules.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="w-full lg:w-[60%] bg-background flex items-center justify-center p-8 sm:p-24">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-primary tracking-tight">Login</h2>
            <div className="w-12 h-px bg-accent mx-auto" />
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[9px]">Authentication Protocol</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-8">
              <Input 
                label="Registry Email" 
                type="email" 
                placeholder="operatve@archives.edu" 
                icon={Mail} 
                className="bg-transparent border-x-0 border-t-0 border-b-2 rounded-none px-0 focus:ring-0"
                required
              />
              <div className="space-y-4">
                <Input 
                  label="Private Key" 
                  type="password" 
                  placeholder="••••••••" 
                  icon={Key} 
                  className="bg-transparent border-x-0 border-t-0 border-b-2 rounded-none px-0 focus:ring-0"
                  required
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="remember" className="accent-accent h-3 w-3" />
                    <label htmlFor="remember" className="text-[10px] uppercase font-bold text-slate-500 cursor-pointer tracking-widest">Persist</label>
                  </div>
                  <button type="button" className="text-[10px] font-black text-accent uppercase tracking-widest hover:underline underline-offset-4">Lost Key?</button>
                </div>
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-full shadow-none">
              Authorize Access
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100" />
            </div>
            <div className="relative flex justify-center text-[9px] uppercase font-black tracking-[0.4em]">
              <span className="bg-background px-6 text-slate-300">Third Party</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-4 py-3 border border-slate-100 font-bold text-[10px] uppercase tracking-widest hover:border-accent transition-all">
              <FaGoogle className="text-primary text-lg" />
              Google Authorization
            </button>
          </div>

          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Non-Member? {' '}
            <Link to="/signup" className="text-accent font-black hover:underline underline-offset-4">Register Inquiry</Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
