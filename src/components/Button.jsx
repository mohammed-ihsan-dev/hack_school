import React from 'react';
import { motion } from 'framer-motion';
import { FiLoader as Loader2 } from 'react-icons/fi';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled = false, 
  className = '', 
  onClick,
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/20',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
    ghost: 'text-primary hover:bg-primary/5',
    dark: 'bg-white text-dark hover:bg-white/90',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-bold font-heading transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
