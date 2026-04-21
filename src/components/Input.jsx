import React from 'react';

const Input = ({ 
  label, 
  icon: Icon, 
  error, 
  type = 'text', 
  placeholder, 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand transition-colors">
            <Icon size={20} />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`
            w-full py-3 rounded-xl border transition-all duration-300
            ${Icon ? 'pl-12 pr-4' : 'px-4'}
            ${error 
              ? 'border-red-400 focus:ring-2 focus:ring-red-400/40 bg-red-50' 
              : 'border-gray-200 focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white focus:bg-white'
            }
            outline-none
          `}
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs text-red-500 ml-1 mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
