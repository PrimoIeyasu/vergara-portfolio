import { Link, useLocation } from 'react-router-dom';
import '@/css/transnav.css';

const links = [
  { name: 'about Me', path: '/' },
  // { name: 'about Me', path: '/aboutme' },
  { name: 'skills', path: '/skills' },
  { name: 'projects', path: '/projects' },
  { name: 'challenges', path: '/challenges' },
  { name: 'plans', path: '/future' },
  { name: 'resume', path: '/resume' },
  { name: 'contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <nav className="flex gap-8 relative">
      {links.map((link, index) => {
        const isActive = activeLink === link.path;

        return (
          <Link
            to={link.path}
            key={index}
            className={`capitalize font-medium transition-all relative before:content-[''] before:block before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-[#66FCF1] before:transition-all ${
              isActive
                ? 'text-[#66FCF1] before:w-full'
                : 'text-white hover:text-[#66FCF1] before:w-0 hover:before:w-full'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
