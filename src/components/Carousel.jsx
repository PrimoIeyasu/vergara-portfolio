import React, { useState, useRef, useEffect } from 'react';
import '@/css/Carousel.css';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa';
import {
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiTailwindcss,
  SiMysql,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiPython, SiDjango, SiSqlite } from 'react-icons/si';

import { motion, useAnimation } from 'framer-motion';

const Carousel = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const panels = [
    {
      image: 'assets/CVSUweb.png',
      text: 'CVSU Website',
      description:
        'We were tasked as our first project in ITEC 50 to create our own version of the CVSU Website.',
      buttonText: 'Visit My Website',
      link: 'https://primoieyasu.github.io/',
      technologies: [
        { name: 'HTML5', icon: <FaHtml5 />, color: 'bg-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'bg-blue-500' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'bg-yellow-400' },
      ],
    },
    {
      image: 'assets/ITWeb.png',
      text: 'IT Website',
      description:
        'We were tasked as our second project in ITEC 50 to create our own IT Company about us website.',
      buttonText: 'Visit My Website',
      link: 'https://primoieyasu.github.io/FinalITWebsite/',
      technologies: [
        { name: 'HTML5', icon: <FaHtml5 />, color: 'bg-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'bg-blue-500' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'bg-yellow-400' },
      ],
    },
    {
      image: 'assets/wedding.png',
      text: 'Catering Reservation System',
      description: 'OOP Project to create our own management system.',
      buttonText: 'Github',
      link: 'https://github.com/PrimoIeyasu/Wedding-Catering-Reservation-System',
      technologies: [
        {
          name: 'Java',
          icon: <FaJava />,
          color: 'bg-red-500',
        },
        {
          name: 'MySQL',
          icon: <SiMysql />,
          color: 'bg-blue-600',
        },
      ],
    },
    {
      image: 'assets/bbird.jpg',
      text: 'Barrel Bird',
      description: 'A twist on the beloved flappy bird game.',
      buttonText: 'Github',
      link: 'https://github.com/MrkDchvz/BarrelBird',
      technologies: [
        {
          name: 'Java',
          icon: <FaJava />,
          color: 'bg-red-500',
        },
      ],
    },
    {
      image: 'assets/enroll.png',
      text: 'Enrollment System',
      description:
        'A full-stack Enrollment Management System built for our final COSC 75 project.',
      buttonText: 'Github',
      link: 'https://github.com/Daves03/Project', // Replace with actual repo if different
      technologies: [
        { name: 'Laravel', icon: <SiLaravel />, color: 'bg-red-600' },
        { name: 'MySQL', icon: <SiMysql />, color: 'bg-blue-600' },
        { name: 'React', icon: <FaReact />, color: 'bg-cyan-500' },
      ],
    },
    {
      image: 'assets/pins.png',
      text: 'Pinspire',
      description: 'Pinspire — a Pinterest clone built with Django.',
      buttonText: 'Github',
      link: 'https://github.com/PrimoIeyasu/Pinspire_Project',
      technologies: [
        {
          name: 'Python',
          icon: <SiPython />,
          color: 'bg-blue-500',
        },
        {
          name: 'Django',
          icon: <SiDjango />,
          color: 'bg-green-700',
        },
        {
          name: 'SQLite',
          icon: <SiSqlite />,
          color: 'bg-gray-600',
        },
      ],
    },
  ];

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: 'easeInOut' },
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.main
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }} // Start position off-screen vertically
      animate={controls}
      className="w-screen h-screen bg-black overflow-hidden relative"
    >
      {/* Title */}
      <div className="absolute top-10 left-0 right-0 text-center z-20">
        <h2 className="text-4xl font-bold text-white mb-0.5">My Projects</h2>
        <a className="text-lg font-semibold text-white">(click/tap to open)</a>
      </div>
      <div
        className="h-full w-full overflow-hidden flex items-center justify-center p-4 relative"
        style={{
          backgroundImage: `url(${
            panels[expandedIndex]?.image || panels[0].image
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Background blur overlay */}
        <div className="inset-0 absolute bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-0"></div>

        {/* Image carousel and content */}
        <div
          className="flex w-full max-w-7xl h-[80vh] gap-2 items-center justify-center z-10 relative"
          style={{ paddingTop: '30px' }}
        >
          {panels.map((panel, index) => (
            <motion.div
              key={index}
              onClick={() => handleClick(index)}
              className={`h-full rounded-2xl bg-white cursor-pointer transition-all duration-1000 ease-in-out overflow-hidden ${
                expandedIndex === index
                  ? index === 3
                    ? 'w-[80%] sm:w-[40%] md:w-[40%] lg:w-[25%]' // Responsive width for "Barrel Bird"
                    : 'w-[200%]' // Default expanded width for other panels
                  : 'w-[15%] hover:bg-gray-200'
              } min-w-[40px] block relative`}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.1, ease: 'easeInOut' },
              }}
            >
              <img
                src={panel.image}
                alt="panel"
                className="w-full h-full object-cover object-top"
              />

              {/* Centered vertical text */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                  expandedIndex === index
                    ? 'opacity-0 transform scale-0 translate-y-[150%]'
                    : 'bg-[rgba(0,0,0,0.7)]'
                } z-10 text-white text-2xl font-bold`}
                style={{
                  writingMode: 'vertical-rl',
                  transform: expandedIndex === index ? 'none' : 'rotate(0deg)',
                }}
              >
                <span>{panel.text}</span>
              </div>

              {/* Text, button */}
              <div
                className={`absolute bottom-10 left-10 z-20 text-white p-4 bg-[rgba(28,28,34,0.5)] rounded-lg text-container ${
                  expandedIndex === index ? 'show' : 'hide'
                }`}
              >
                <h2 className="text-2xl sm:text-xl md:text-4xl font-bold">
                  {panel.text}
                </h2>
                <p className="mt-2 text-base sm:text-sm md:text-lg">
                  {panel.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {panel.technologies?.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full text-white ${tech.color}`}
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <a href={panel.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 px-6 py-3 bg-[#66FCF1] hover:bg-[#50c6be] text-black rounded-lg">
                    {panel.buttonText}
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Carousel;
