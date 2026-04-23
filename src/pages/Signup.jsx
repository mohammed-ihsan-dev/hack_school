import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail as Mail, FiLock as Lock, FiEye as Eye, FiEyeOff as EyeOff, FiUser as User, FiArrowLeft as ArrowLeft, FiTarget } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Input from '../components/Input';

import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error('Passwords do not match');
    }
    setLoading(true);
    try {
      await signup(name, email, password);
      navigate('/');
    } catch (err) {
      // Error handled by AuthContext
    } finally {
      setLoading(false);
    }
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
          <p className="text-slate-500 font-medium font-inter">Join 1000+ students on their path to a tech career.</p>
        </div>

        <div className="glass-card p-8 md:p-12 border-white/40">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Input 
                label="Full Name"
                placeholder="John Doe"
                icon={User}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input 
                label="Email Address"
                placeholder="name@example.com"
                type="email"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <Input 
                  label="Confirm Password"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  icon={Lock}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-slate-100 rounded-2xl font-bold text-dark hover:bg-slate-50 transition-all shadow-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Sign up with Google
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
