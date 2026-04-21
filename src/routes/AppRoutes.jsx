import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CourseDetails from '../pages/CourseDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/course/:id" element={<MainLayout><CourseDetails /></MainLayout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
