// app.jsx
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

import Social from '@/components/Social';
import Photo from '@/components/Photo';
import TypingFlickerText from '@/components/FlickerText';
import Carousel from '@/components/Carousel';
import CTerminal from '@/components/CTerminal'; // Adjusted import for correct path
import AboutMe from '@/components/AboutMe'; // Adjusted import for correct path
import Header from '@/components/Header';

export default function App() {
  return (
    <div>
      <Header />

      {/* Sections */}
      <section
        id="home"
        className="min-h-screen"
        style={{ paddingTop: '130px' }}
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* Photo Section */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0 relative xl:-translate-x-6">
              <Photo />
            </div>
            {/* Text Section */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <motion.span
                className="text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7 }}
              >
                Third-Year Computer Science Major
              </motion.span>
              <motion.h1
                className="h1 text-white/90 text-3xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8 }}
              >
                Hello! I'm <br />
                <TypingFlickerText />
              </motion.h1>
              <motion.p
                className="max-w[500px] mb-9 text-white/80 text-justify"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1 }}
              >
                <br />I am a third-year Computer Science student, from BSCS 3-1
                at Cavite State University - Bacoor Campus, passionate about
                developing innovative digital solutions. My education has
                provided a solid foundation in various programming languages and
                technologies.
              </motion.p>
              {/* Buttons for CV Download and Social Links */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.1 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                    onClick={() =>
                      window.open('/path/to/your/CV.pdf', '_blank')
                    } // Adjust the CV path
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </motion.div>
                <div className="mb-8 xl:mb-0">
                  <motion.div
                    className="flex flex-row gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.2 }}
                  >
                    <Social
                      containerStyles="flex gap-6"
                      iconStyles="w-9 h-9 border border-white rounded-full flex 
                      justify-center items-center text-white text-base hover:bg-white 
                      hover:text-primary hover:transition-all duration-500"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="services" className="min-h-screen py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          About Me
        </h2>
        <AboutMe />
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="min-h-screen"
        style={{ paddingTop: '20px' }}
      >
        <div className=" mx-auto py-12">
          <div className="flex justify-center">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen">
        <CTerminal />
      </section>
    </div>
  );
}
