import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800 tracking-tight">AI Gen</a>
        <div className="flex space-x-6">
          <a href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">Tentang</a>
          <a href="/something-big" className="text-gray-600 hover:text-indigo-600 transition-colors">Proyek</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;