import { useLocation, Link } from 'react-router-dom';
import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { Button } from './ui/button';

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

const MobileNav = () => {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#66FCF1]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-10 mb-10 flex justify-center">
          <Link to="/">
            <img
              src="assets/BlueLogohd.png"
              alt="Your Logo"
              width={200}
              height={60}
              className="text-2xl items-center"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col justify-center items-center gap-8 mb-8">
          {links.map((link, index) => {
            const isActive = activeLink === link.path;

            return (
              <Link
                to={link.path}
                key={index}
                className={`text-xl capitalize font-medium transition-all relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-[#66FCF1] before:transition-all 
                  ${
                    isActive
                      ? 'text-[#66FCF1] before:w-full'
                      : 'text-white hover:text-[#66FCF1] hover:before:w-full'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Contact Button */}
        <Link to="/contact" className="flex justify-center">
          <Button className="rounded-full bg-[#66FCF1] px-6 py-4 hover:bg-[#50c6be] text-black hover:text-white">
            <span className="font-bold">Contact me!</span>
          </Button>
        </Link>

        {/* Dialog Title */}
        <VisuallyHidden>
          <DialogTitle>Mobile Navigation Menu</DialogTitle>
        </VisuallyHidden>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
