import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/PrimoIeyasu' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/jhongkennedy/' },
  { icon: <FaFacebook />, path: 'https://www.facebook.com/JhongKennedy/' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/jon-ken-heron-vergara-b97670337/',
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#060c21] text-white py-6 text-center mt-12">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Connect with me</h2>
        <div className="flex justify-center gap-6 text-2xl">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#66fcf1] transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Jon Ken Heron Vergara. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
