import React from 'react';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Max Granberg</h1>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
