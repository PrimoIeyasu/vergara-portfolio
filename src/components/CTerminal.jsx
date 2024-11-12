import React, { useEffect, useRef, useState } from 'react';
import '@/css/CTerminal.css';
import { motion } from 'framer-motion';

const CTerminal = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      id="screen"
      className="min-h-screen flex items-center justify-center relative"
      ref={sectionRef}
      initial={{ backgroundColor: 'transparent' }} // Start with transparent background
      animate={{
        backgroundColor: inView ? 'green' : 'transparent', // Background changes to green once in view
        transition: {
          duration: 0.6, // Time it takes to transition from transparent to green
          ease: 'easeOut',
          delay: inView ? 0.5 : 1,
        },
      }}
    >
      {/* Animated scanlines background */}
      <motion.div
        className="absolute inset-0"
        initial={{ y: 20 }}
        animate={inView ? { y: 0 } : { y: 20 }} // Adjust scanlines animation if needed
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img
          src="assets/scanlines.png"
          id="scan"
          className="noselect w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated bezel background */}
      <motion.div
        className="absolute inset-0"
        initial={{ y: 20 }}
        animate={inView ? { y: 0 } : { y: 20 }} // Adjust bezel animation if needed
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img
          src="assets/bezel.png"
          id="bezel"
          className="noselect w-full h-full object-cover"
        />
      </motion.div>

      {/* Content section */}
      <div id="content" className="relative pt-8 text-center">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 px-4 sm:px-6 md:px-8">
          {/* Contact Information */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 relative xl:-translate-x-6 w-full">
            <div className="contact-info text-center sm:text-left mx-auto max-w-full">
              {inView && (
                <>
                  <motion.h1
                    className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                  >
                    CONTACT ME:
                  </motion.h1>
                  <motion.h2
                    className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl underline-email mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                  >
                    Gmail: <br />
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=jonkenvergara@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline block mt-4 sm:mt-2 sm:mx-0 mx-auto"
                    >
                      jonkenvergara@gmail.com
                    </a>
                  </motion.h2>
                  <motion.h2
                    className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1 }}
                  >
                    <a
                      href="https://www.linkedin.com/in/jon-ken-heron-vergara-b97670337/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline block mt-4 sm:mt-2 sm:mx-0 mx-auto"
                    >
                      LinkedIn
                    </a>
                  </motion.h2>
                  <motion.h2
                    className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.1 }}
                  >
                    <a
                      href="https://www.facebook.com/JhongKennedy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline block mt-4 sm:mt-2 sm:mx-0 mx-auto"
                    >
                      Facebook
                    </a>
                  </motion.h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CTerminal;
