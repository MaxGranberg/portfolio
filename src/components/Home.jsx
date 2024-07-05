import React from 'react';
import './Home.css'; // Import the custom CSS

const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="flex flex-col items-center mt-12">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mb-4">
          <img
            src="/profilbild.jpg"
            alt="Your Name"
            className="w-full h-full object-cover custom-object-position custom-zoom" // Use custom class for fine adjustment
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Välkommen till min portfolio!</h1>
        <p className="text-xl md:text-2xl text-center">
          Här får du reda på lite mer om mig och vilka projekt jag skapat & jobbar med!
        </p>
      </div>
    </div>
  );
};

export default Home;
