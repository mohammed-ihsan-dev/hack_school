import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button',
  isLoading = false,
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border";
  
  const variants = {
    primary: "bg-primary text-white border-primary hover:bg-accent hover:border-accent",
    outline: "border-primary text-primary hover:bg-primary hover:text-white",
    gold: "bg-gradient-gold text-white border-transparent shadow-gold hover:opacity-90",
    ghost: "border-transparent text-slate-600 hover:bg-slate-50",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : children}
    </motion.button>
  );
};

export default Button;
