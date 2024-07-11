import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoccerBall, faServer, faGamepad, faPalette, faFilm } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const projects = [
  {
    title: 'Fantasyfotbollsspel för lokalfotboll',
    description: 'Fantasyfotbollsspel för lokalfotboll, slutgilitgt projektarbete under mina studier. Skapade även eget API som spelet använde sig av.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Jest'],
    image: '/lfl.png',
    liveLink: 'https://grasrotsfantasy-9871479275bf.herokuapp.com/',
    repoLink: 'https://github.com/MaxGranberg/local-fantasy-football',
    icon: faSoccerBall,
  },
  {
    title: 'API för fantasyfotbollsspel',
    description: 'API för ett fantasyfotbollsspel där man kan skapa & hantera användare, spelare, ligor, lag & fantasylag .',
    technologies: ['Node.js', 'Express', 'MongoDB', 'OpenAPI'],
    image: '/api.png',
    liveLink: 'https://fflapi-a68806964222.herokuapp.com/api-docs/',
    repoLink: 'https://github.com/MaxGranberg/Local-Fantasy-Football-API',
    icon: faServer,
  },
  {
    title: 'Onlinespel med chatt',
    description: 'Onlinespel där jag byggt upp en 2D-värld där användare kan gå runt och chatta med varandra och spela minispel. Skapat under mitt första år av studierna.',
    technologies: ['React', 'Phaser 3', 'Tiled', 'Socket.IO', 'Node.js', 'Express', 'MongoDB'],
    image: '/ff.png',
    liveLink: 'https://fellowshipfields.netlify.app/',
    repoLink: 'https://github.com/MaxGranberg/FellowshipFieldsFrontEnd',
    icon: faGamepad,
  },
  {
    title: 'The Color Game',
    description: 'Ett kul litet spel där användarens RGB kunskaper sätts på prov. Skapade ett NPM paket som jag sedan använde mig av när jag byggde spelet.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: '/rgb-game.png',
    liveLink: 'https://thergbcolorgame.netlify.app/',
    repoLink: 'https://github.com/MaxGranberg/TheColorGame',
    icon: faPalette,
  },
  {
    title: 'Netflix search- & visualization tool',
    description: 'Skoluppgift där jag använde mig av Elasticsearch. Visualisering av innehåll på Netflix, det finns även en sök och filtreringsfunktion.',
    technologies: ['React', 'Tailwind CSS', 'Elasticsearch', 'Node.js', 'Express', 'Chart.js'],
    image: '/netflix.png',
    liveLink: 'https://netflix-visualization-ddbaf3e0356b.herokuapp.com/',
    repoLink: 'https://github.com/MaxGranberg/netflix-visualization',
    icon: faFilm,
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getTransform = (index) => {
    const angle = (index - 1.8) * 5; // Adjusting the angle to center the cards
    const yOffset = Math.abs(angle) * 7; // Adjusting the vertical offset based on the angle
    return `rotate(${angle}deg) translateY(${yOffset}px)`;
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <div className="max-w-6xl w-full">
        <div className="flex justify-center space-x-4 ">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 ${hoveredIndex === index ? 'z-20 scale-110 shadow-2xl' : 'z-10 scale-100'} playing-card`}
              style={{
                transform: hoveredIndex === index ? 'rotate(0deg) translateY(0px)' : getTransform(index),
                zIndex: hoveredIndex === index ? 20 : 10,
                marginLeft: index !== 0 ? '-10%' : '0',
              }}
            >
              <FontAwesomeIcon icon={project.icon} className="top-left-icon" />
              <FontAwesomeIcon icon={project.icon} className="bottom-right-icon" />
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-600 mb-4">
                <strong>Tekniker:</strong> {project.technologies.join(', ')}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href={project.repoLink}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
