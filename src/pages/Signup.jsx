import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail as Mail, FiLock as Lock, FiEye as Eye, FiEyeOff as EyeOff, FiUser as User, FiArrowLeft as ArrowLeft, FiTarget } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Input from '../components/Input';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Account created! Welcome to HackSchool.');
      setTimeout(() => navigate('/'), 1000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-light-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px]" />

      <Link to="/" className="fixed top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-sm group">
        <div className="p-2 bg-white rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
          <ArrowLeft size={18} />
        </div>
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl"
      >
        <div className="text-center mb-10">
          <Logo className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold font-heading text-dark mb-2">Create Account</h1>
          <p className="text-slate-500 font-medium font-inter">Join 5000+ students on their path to a tech career.</p>
        </div>

        <div className="glass-card p-8 md:p-12 border-white/40">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Input 
                label="Full Name"
                placeholder="John Doe"
                icon={User}
                required
              />
              <Input 
                label="Email Address"
                placeholder="name@example.com"
                type="email"
                icon={Mail}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <Input 
                  label="Password"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  icon={Lock}
                  required
                />
              </div>
              <div className="relative">
                <Input 
                  label="Confirm Password"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  icon={Lock}
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
               <FiTarget className="text-primary mt-1 flex-shrink-0" size={20} />
               <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                  By clicking "Create Account", I agree to receive internship updates and course notifications from HackSchool. I have read the terms and conditions.
               </p>
            </div>

            <Button type="submit" size="lg" className="w-full h-14 rounded-2xl" loading={loading}>
              Create Account
            </Button>
          </form>

          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-grow bg-slate-100" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Or sign up with</span>
            <div className="h-px flex-grow bg-slate-100" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 bg-white border border-slate-100 rounded-2xl font-bold text-dark hover:bg-slate-50 transition-all shadow-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-4 bg-white border border-slate-100 rounded-2xl font-bold text-dark hover:bg-slate-50 transition-all shadow-sm">
              <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-5 h-5" alt="LinkedIn" />
              LinkedIn
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-slate-500 font-medium">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
