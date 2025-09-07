import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800 tracking-tight">AI Gen</a>
        <div className="flex space-x-6">
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;