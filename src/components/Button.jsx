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
  const baseStyles = "px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  return (
    <motion.button
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
