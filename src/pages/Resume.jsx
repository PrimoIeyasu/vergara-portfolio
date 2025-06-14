// src/pages/Resume.jsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

import { motion } from 'framer-motion';

function Resume() {
  return (
    <>
      <Header />
      <main className="mx-4 lg:mx-20 mt-40 mb-20 text-center text-[#66FCF1]">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Resume
        </motion.h1>

        <motion.div
          className="max-w-4xl mx-auto mb-1 mh-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <iframe
            src="assets/Vergara-Resume.pdf"
            className="w-full h-[90vh] border rounded-md overflow-hidden"
            style={{
              transform: 'scale(0.9)',
              transformOrigin: 'top',
              height: '100vh',
            }}
            title="My Resume"
          />
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2"
            onClick={() => window.open('assets/Vergara-Resume.pdf', '_blank')}
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

export default Resume;
