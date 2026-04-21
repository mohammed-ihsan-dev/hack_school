import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Welcome back to Etech!', {
      style: {
        borderRadius: '2rem',
        background: '#8B5CF6',
        color: '#fff',
        fontWeight: 'bold',
      },
    });
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex bg-[#FDF4FF]"
    >
      {/* Left: Illustration Panel */}
      <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden items-center justify-center p-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-secondary opacity-50" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative z-10 text-white text-center space-y-12 max-w-lg">
          <Link to="/" className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-all font-bold uppercase tracking-widest text-xs group">
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            Back to home
          </Link>
          <div className="space-y-6">
            <h1 className="text-6xl font-black leading-tight italic">Learn <br /> better <br /> now.</h1>
            <p className="text-white/80 text-xl font-medium leading-relaxed">Join 10 million students worldwide and develop your unique skills today.</p>
          </div>
          <div className="flex justify-center pt-8">
             <div className="w-full aspect-square rounded-[3rem] overflow-hidden border-8 border-white/20 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" alt="Student" />
             </div>
          </div>
        </div>
      </div>

      {/* Right: Form Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-5xl font-black text-gray-900 tracking-tight">Sign In</h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Enter your details to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <Input 
                label="Email Address" 
                type="email" 
                placeholder="you@example.com" 
                icon={Mail} 
                className="bg-white border-2 border-gray-100 rounded-3xl p-6 focus:border-primary"
                required
              />
              <div className="space-y-4">
                <Input 
                  label="Password" 
                  type="password" 
                  placeholder="••••••••" 
                  icon={Lock} 
                  className="bg-white border-2 border-gray-100 rounded-3xl p-6 focus:border-primary"
                  required
                />
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="remember" className="accent-primary h-4 w-4 rounded-md" />
                    <label htmlFor="remember" className="text-xs font-bold text-gray-500">Remember me</label>
                  </div>
                  <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot password?</button>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full py-6 text-xl shadow-2xl shadow-primary/20">Sign In Now</Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100" />
            </div>
            <div className="relative flex justify-center text-xs uppercase font-black tracking-widest">
              <span className="bg-[#FDF4FF] px-6 text-gray-400">Or continue with</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-4 py-4 bg-white border-2 border-gray-100 rounded-3xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
            <FaGoogle className="text-red-500 text-xl" />
            Google Account
          </button>

          <p className="text-center text-sm font-bold text-gray-400">
            Don't have an account? {' '}
            <Link to="/signup" className="text-primary font-black hover:underline uppercase tracking-widest">Create One</Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
