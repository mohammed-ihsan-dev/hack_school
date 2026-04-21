import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: '16px',
            background: '#1e293b',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '16px 24px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          },
        }}
      />
    </div>
  );
};

export default MainLayout;
