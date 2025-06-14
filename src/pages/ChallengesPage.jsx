import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const ChallengesPage = () => {
  return (
    <>
      <Header />
      <motion.section
        className="min-h-screen px-4 py-16 bg-[#1c1c22] text-white mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-center">
            Challenges & Learnings
          </h1>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#66FCF1] mb-2">
              Challenges I’ve Faced
            </h2>
            <p className="text-justify">
              One of the biggest challenges I faced was learning to code largely
              through self-study. Throughout college, much of my learning
              journey was independent, as structured guidance was often limited.
              This required extra discipline, resourcefulness, and persistence
              to build my skills and confidence as a developer. Another
              challenge was the lack of consistent face-to-face classes during
              my college years. Most of the learning was delivered through
              online or modular formats, which made it difficult to grasp
              concepts practically. As someone who learns best through hands-on
              repetition and real-time interaction, this setup made it harder to
              fully absorb and apply what I was studying.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <h2 className="text-2xl font-semibold text-[#66FCF1] mb-2">
              Acquired Life Learnings
            </h2>
            <p className="text-justify">
              One important life lesson I've learned along the way is that
              progress doesn't have to be perfect—it just has to be consistent.
              Whether it's coding, studying, or facing challenges in life, I've
              realized that showing up and putting in the effort, even when I
              feel stuck or unsure, leads to growth over time. Patience and
              self-discipline are just as valuable as technical skills.Through
              various academic and personal experiences, I’ve learned the value
              of consistency, adaptability, and the importance of asking for
              help when needed. Learning to manage time effectively and staying
              curious have been key takeaways from my journey. I've learned that
              comparing myself to others only distracts me from my own growth.
              Everyone has a different journey, and it's more important to focus
              on improving myself day by day than to chase someone else's pace.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
};

export default ChallengesPage;
