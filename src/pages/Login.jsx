import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Rocket, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Successfully logged in!', {
      icon: '🚀',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Branding & Decoration */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center p-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-primary opacity-20 blur-[120px]"></div>
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
              Start your journey <br /> with <span className="bg-gradient-primary bg-clip-text text-transparent italic">HackSchool</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-md">
              Access your courses, community, and internship portal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-12">
            {[
              { label: 'Courses', value: '25+' },
              { label: 'Community', value: '10K+' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 sm:p-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md space-y-10"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Welcome back!</h2>
            <p className="text-slate-500 font-medium">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="john@example.com" 
              icon={Mail} 
              required
            />
            <div className="space-y-1">
              <Input 
                label="Password" 
                type="password" 
                placeholder="••••••••" 
                icon={Lock} 
                required
              />
              <div className="flex justify-end pr-1">
                <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot Password?</button>
              </div>
            </div>

            <Button type="submit" className="w-full py-4 text-lg">
              Sign In
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or continue with</span>
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
            Don't have an account? {' '}
            <Link to="/signup" className="text-primary font-bold hover:underline">Sign up for free</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
