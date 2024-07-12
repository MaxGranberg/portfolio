import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'max_granberg@hotmail.com',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '0763-070757',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/max-granberg-b49330316',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    link: 'https://github.com/MaxGranberg',
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 text-white">
      <div className="max-w-6xl w-full mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contactDetails.map((detail, index) => (
            <a key={index} href={detail.link} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-gray-900 transform transition-transform duration-500 hover:scale-105">
              <div className="text-blue-500 text-5xl mb-4">{detail.icon}</div>
              <h2 className="text-xl font-bold mb-2">{detail.label}</h2>
              <p className="text-gray-700">{detail.value}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
