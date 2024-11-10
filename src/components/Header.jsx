import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 transition-all duration-700 text-white z-50 ${
        isScrolled
          ? "bg-black bg-opacity-70 shadow-lg py-5"
          : "bg-transparent py-8"
      }`}
      initial={{ opacity: 0 }} // Set initial opacity to 0
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 0.5, delay: 0.5 }} // Adjust duration and delay as needed
    >
      <div className="container mx-auto flex justify-between items-center transition-all duration-700 max-h-14">
        <Link to="/">
          <img
            src="/assets/BlueLogohd.png"
            alt="Logo"
            className={`transition-all duration-300 ${
              isScrolled ? "h-32 w-auto" : "h-40 w-auto"
            }`}
          />
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <NavBar />
          <Link to="#contact">
            <Button
              className="rounded-full bg-[#66FCF1] px-4 py-2 hover:bg-[#50c6be] text-black hover:text-white"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="font-bold">Contact me!</span>
            </Button>
          </Link>
        </div>
        <div className="block lg:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
