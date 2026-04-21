import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import CourseDetails from '../pages/CourseDetails';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/course/:id" element={<MainLayout><CourseDetails /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
