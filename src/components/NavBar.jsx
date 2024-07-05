import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-center space-x-6 md:space-x-8">
        <li>
          <Link to="/" className="text-white text-lg md:text-xl hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white text-lg md:text-xl hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/projects" className="text-white text-lg md:text-xl hover:text-gray-300">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
