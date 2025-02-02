import React from 'react';
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaUser } from 'react-icons/fa';
import './About.css';

const milestones = [
  {
    icon: <FaGraduationCap />,
    title: 'Linnéuniversitetet',
    description: 'Studerade och tog högskoleexamen i programmet Webbprogrammering. 120 HP på distans.',
    date: 'Augusti 2022 - Juni 2024',
  },
  {
    icon: <FaBriefcase />,
    title: 'Jobberfarenheter',
    description: 'Letar nu efter mitt första jobb i branschen. Tidigare har jag jobbat på lager, i butik och även drivit eget företag i några år.',
    date: 'Juni 2015 - Nu',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Tekniker & Verktyg',
    description: [
      'JavaScript',
      'Typescript',
      'Next.js',
      'HTML',
      'CSS',
      'TailwindCSS',
      'Bootstrap',
      'React',
      'Node.JS',
      'Express',
      'MongoDB',
      'MySQL',
      'Java',
      'GIT',
      'REST',
      'Agil utveckling',
    ],
    date: 'Några av de tekniker & verktyg jag jobbat med under min utbildning & projekt.',
  },
  {
    icon: <FaUser />,
    title: 'Intressen',
    description: 'Jag är en nyyfiken person som alltid vill lära mig mer och försöker alltid göra så bra som möjligt ifrån mig i vad jag än sätter mig in i. Spelat fotboll hela livet och är en lagspelare som vet vikten av att jobba i team och samarbeta. Vänner och familj skulle beskriva mig som lugn, omtänksam och lojal.',
    date: 'Lite info om mig som person.',
  },
];

const About = () => {
  const handleCardClick = (index) => {
    document.getElementById(`card-${index}`).classList.toggle('flipped');
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-white md:text-3xl font-bold mt-8">Klicka på ett kort för ytterligare info</h1>
      <div className="max-w-6xl w-full mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="perspective">
              <div
                id={`card-${index}`}
                className="card-inner"
                onClick={() => handleCardClick(index)}
              >
                <div className="card-front bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl">
                  <div className="text-blue-500 text-5xl mb-4">{milestone.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-center">{milestone.title}</h3>
                  <p className="text-gray-400 text-sm flex justify-center">{milestone.date}</p>
                </div>
                <div className="card-back p-6 rounded-lg shadow-lg flex flex-col items-center text-white">
                  <h3 className="text-xl font-bold mb-2 text-center">{milestone.title}</h3>
                  {Array.isArray(milestone.description) ? (
                    <ul className="text-sm text-center">
                      {milestone.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-center">{milestone.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
