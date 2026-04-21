import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail as Mail, FiLock as Lock, FiEye as Eye, FiEyeOff as EyeOff, FiArrowLeft as ArrowLeft } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Welcome back to HackSchool!');
      setTimeout(() => navigate('/'), 1000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-light-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px]" />

      <Link to="/" className="fixed top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-sm group">
        <div className="p-2 bg-white rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
          <ArrowLeft size={18} />
        </div>
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Logo className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold font-heading text-dark mb-2">Welcome Back</h1>
          <p className="text-slate-500 font-medium font-inter">Continue your career journey today.</p>
        </div>

        <div className="glass-card p-8 md:p-10 border-white/40">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              label="Email Address"
              placeholder="name@example.com"
              type="email"
              icon={Mail}
              required
            />
            
            <div className="relative">
              <Input 
                label="Password"
                placeholder="••••••••"
                type={showPassword ? 'text' : 'password'}
                icon={Lock}
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-slate-400 hover:text-primary transition-colors"
                tabIndex="-1"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary accent-primary" />
                <span className="text-xs text-slate-600 font-bold group-hover:text-primary">Remember me</span>
              </label>
              <a href="#" className="text-xs text-primary font-bold hover:underline">Forgot password?</a>
            </div>

            <Button type="submit" size="lg" className="w-full h-14 rounded-2xl" loading={loading}>
              Sign In
            </Button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-grow bg-slate-100" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Or continue with</span>
            <div className="h-px flex-grow bg-slate-100" />
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-slate-100 rounded-2xl font-bold text-dark hover:bg-slate-50 transition-all shadow-sm">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
            Google
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-slate-500 font-medium">
          Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Create Account</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
