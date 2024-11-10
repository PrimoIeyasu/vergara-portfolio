import { useEffect, useState } from 'react';
import '@/css/transnav.css';

const links = [
  { name: 'profile', path: '#home' },
  { name: 'about Me', path: '#services' },
  { name: 'projects', path: '#work' },
  { name: '', path: '#contact' },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.path));
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <nav className="flex gap-8 relative">
      {links.map((link, index) => {
        const isActive = activeLink === link.path;

        return (
          <a
            href={link.path}
            key={index}
            className={`capitalize font-medium transition-all relative before:content-[''] before:block before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-[#66FCF1] before:transition-all ${
              isActive
                ? 'text-[#66FCF1] before:w-full'
                : 'text-white hover:text-[#66FCF1] before:w-0 hover:before:w-full'
            } ${isActive ? 'active' : ''}`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
