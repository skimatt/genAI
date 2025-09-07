import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-50 text-gray-500 py-6 mt-12 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} AI Image Generator. All rights reserved.</p>
        <p className="mt-1">
          Dibuat dengan ❤️ oleh <a href="https://www.instagram.com/skimatt_" className="text-indigo-600 hover:underline">Rahmat Mulia</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;