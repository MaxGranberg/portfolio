import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Max Granberg. Content on this site may be subject to copyright.</p>
      </div>
    </footer>
  );
}

export default Footer;
