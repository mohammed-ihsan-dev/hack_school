import React from 'react';
import logoImg from '../assets/hackschoollogo.png';

const Logo = ({ className = "w-10 h-10" }) => (
  <img 
    src={logoImg} 
    alt="HackSchool Logo" 
    className={`${className} object-contain rounded-lg`} 
  />
);

export default Logo;
