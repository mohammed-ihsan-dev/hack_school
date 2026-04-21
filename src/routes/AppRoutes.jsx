import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Pages with MainLayout */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      
      {/* Auth Pages (No MainLayout as they have split layouts) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
