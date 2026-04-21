import React from 'react';

const Input = ({ label, icon: Icon, error, ...props }) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-sm font-semibold text-slate-700 ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
            <Icon size={20} />
          </div>
        )}
        <input
          className={`w-full ${Icon ? 'pl-12' : 'px-4'} pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-400 ${error ? 'border-red-500 bg-red-50' : ''}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 ml-1 font-medium">{error}</p>}
    </div>
  );
};

export default Input;
