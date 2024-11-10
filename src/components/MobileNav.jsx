import { useEffect, useState } from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { Button } from './ui/button';

const links = [
  { name: 'profile', path: '#home' },
  { name: 'about Me', path: '#services' },
  { name: 'projects', path: '#work' },
  { name: '', path: '#contact' },
];

const MobileNav = () => {
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
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#66FCF1]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-10 mb-10 flex justify-center">
          <a href="/">
            <img
              src="assets/BlueLogohd.png"
              alt="Your Logo"
              width={200}
              height={60}
              className="text-2xl items-center"
            />
          </a>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col justify-center items-center gap-8 mb-8">
          {links.map((link, index) => {
            const isActive = activeLink === link.path;

            return (
              <a
                href={link.path}
                key={index}
                className={`text-xl capitalize transition-all relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-[#66FCF1] before:transition-all 
                  ${
                    isActive
                      ? 'text-[#66FCF1] border-b-2 border-[#66FCF1] before:w-full'
                      : 'text-white hover:[#66FCF1] hover:before:w-full'
                  }
                `}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Contact Button */}
        <a href="#contact" className="flex justify-center">
          <Button className="rounded-full bg-[#66FCF1] px-6 py-4 hover:bg-[#50c6be] text-black hover:text-white">
            <span className="font-bold">Contact me!</span>
          </Button>
        </a>

        {/* Dialog Title for Accessibility */}
        <VisuallyHidden>
          <DialogTitle>Mobile Navigation Menu</DialogTitle>
        </VisuallyHidden>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
