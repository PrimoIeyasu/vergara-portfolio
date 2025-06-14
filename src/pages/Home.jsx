import Header from '@/components/Header';
import Photo from '@/components/Photo';
import TypingFlickerText from '@/components/FlickerText';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '@/components/Social';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Header />
      <section className="min-h-screen pt-[130px]">
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
                className="h1 text-white/90 text-3xl xsm:text-5xl sm:text-6xl md:text-6xl lg:text-7xl"
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
                <br />I am a third-year Computer Science student from BSCS 3-1
                at Cavite State University - Bacoor Campus, passionate about
                developing innovative digital solutions. My education has
                provided a solid foundation in various programming languages and
                technologies.
              </motion.p>
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
                      window.open(
                        'vergara-portfolio/assets/Vergara-Resume.pdf',
                        '_blank'
                      )
                    }
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
                      iconStyles="w-9 h-9 border border-white rounded-full flex justify-center items-center text-white text-base hover:bg-white hover:text-primary hover:transition-all duration-500"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <>
        <Header />
        <section className="min-h-screen py-12">
          <AboutMe />
        </section>
      </>
      <Footer />
    </>
  );
}
