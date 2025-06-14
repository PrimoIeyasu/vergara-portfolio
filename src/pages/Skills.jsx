import { useState } from 'react';
import {
  BiLogoNetlify,
  BiLogoPostgresql,
  BiLogoTypescript,
} from 'react-icons/bi';
import { CgVercel } from 'react-icons/cg';
import { DiGithubAlt, DiMongodb } from 'react-icons/di';
import { FaDocker } from 'react-icons/fa';
import {
  FaAws,
  FaCss3Alt,
  FaDigitalOcean,
  FaGitAlt,
  FaGitlab,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaPhp,
} from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiFlask,
  SiJest,
  SiPassport,
  SiPythonanywhere,
  SiSequelize,
  SiTailwindcss,
  SiMysql,
  SiSqlite,
  SiLaravel,
} from 'react-icons/si';
import { TbBrandDjango } from 'react-icons/tb';
import { X } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Programming Languages/Markup Languages',
    items: [
      { icon: <FaPhp className="text-2xl" />, name: 'PHP' },
      { icon: <FaPython className="text-2xl" />, name: 'Python' },
      { icon: <IoLogoJavascript className="text-2xl" />, name: 'JavaScript' },
      { icon: <FaHtml5 className="text-2xl" />, name: 'HTML' },
      { icon: <FaCss3Alt className="text-2xl" />, name: 'CSS' },
    ],
  },
  {
    title: 'Frontend Technologies/Frameworks',
    items: [
      { icon: <FaReact className="text-2xl" />, name: 'React' },
      { icon: <SiTailwindcss className="text-2xl" />, name: 'Tailwind CSS' },
      { icon: <SiJest className="text-2xl" />, name: 'Jest' },
      { icon: <TbBrandDjango className="text-2xl" />, name: 'Django' },
    ],
  },
  {
    title: 'Backend Technologies/Frameworks',
    items: [
      { icon: <FaPhp className="text-2xl" />, name: 'PHP' },
      { icon: <SiLaravel className="text-2xl" />, name: 'Laravel' },
      { icon: <FaNodeJs className="text-2xl" />, name: 'NodeJS' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { icon: <SiMysql className="text-2xl" />, name: 'MySQL' },
      { icon: <SiSqlite className="text-2xl" />, name: 'SQLite' },
      { icon: <DiMongodb className="text-2xl" />, name: 'MongoDB' },
    ],
  },
  {
    title: 'DevOps / Hosting / Cloud',
    items: [
      { icon: <BiLogoNetlify className="text-2xl" />, name: 'Netlify' },
      { icon: <CgVercel className="text-2xl" />, name: 'Vercel' },
      { icon: <FaDigitalOcean className="text-2xl" />, name: 'Digital Ocean' },
      { icon: <FaAws className="text-2xl" />, name: 'AWS EC2' },
      {
        icon: <SiPythonanywhere className="text-2xl" />,
        name: 'PythonAnywhere',
      },
      { icon: <FaDocker className="text-2xl" />, name: 'Docker' },
    ],
  },
  {
    title: 'Version Control & Collaboration',
    items: [
      { icon: <FaGitAlt className="text-2xl" />, name: 'Git' },
      { icon: <DiGithubAlt className="text-2xl" />, name: 'Github' },
      { icon: <FaGitlab className="text-2xl" />, name: 'Gitlab' },
    ],
  },
];

const sampleImages = [
  {
    url: 'assets/deans.jpeg',
    alt: 'Project 1',
  },
  {
    url: 'assets/deans1.jpeg',
    alt: 'Project 2',
  },
  {
    url: 'assets/medal.jpeg',
    alt: 'Project 3',
  },
  {
    url: 'assets/nstp.jpeg',
    alt: 'Project 4',
  },
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mt-20">
      <h4 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Acquired Certificates
      </h4>

      {/* Uniform Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {sampleImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="cursor-pointer w-full h-80 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 bg-gray-100"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full hover:bg-black"
          >
            <X size={28} />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

function Skills() {
  return (
    <>
      <Header />
      <motion.section
        id="skills"
        className="mx-4 lg:mx-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h4
          className="text-4xl font-bold text-center mt-40 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Skillset
        </motion.h4>

        <div className="mt-10 space-y-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + groupIndex * 0.2 }}
            >
              <h5 className="text-2xl font-semibold mb-4 dark:text-white">
                {group.title}
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {group.items.map((item, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium text-[#66fcf1] dark:text-red-500"
                    style={{ backgroundColor: '#060c21' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + idx * 0.05 }}
                  >
                    {item.icon} {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <ImageGallery />

      <Footer />
    </>
  );
}

export default Skills;
