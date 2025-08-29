import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButton from '../ui/FloatingActionButton';
import ScrollProgressBar from '../ui/ScrollProgressBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Layout;