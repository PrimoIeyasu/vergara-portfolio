import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

function FuturePlans() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mx-4 lg:mx-20 mt-40 mb-20 text-center">
        <motion.h1
          className="text-4xl font-bold mb-6 text-[#66FCF1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Future Plans in Life
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto dark:text-white text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I aim to build a strong and fulfilling career in the tech industry,
          continuously improving my skills and staying updated with evolving
          technologies. I want to be part of innovative projects that solve
          real-world problems and contribute positively to society. One of my
          goals is to work with teams that value collaboration, creativity, and
          growth — and eventually, I hope to lead projects that make a
          meaningful impact. Beyond my career, I dream of having a happy and
          stable family. I want to become a good father — someone who is
          present, supportive, and sets a strong example for my children. I also
          want to be a role model to my siblings, showing them that with hard
          work and determination, they can achieve anything. In the long run, I
          aspire to give back by mentoring others who are starting out,
          especially those who, like me, had to learn a lot on their own. I’d
          love to create or support initiatives that help students or
          underprivileged communities gain access to tech education and
          opportunities. I believe life is not just about personal success but
          also about how we uplift those around us. My future plans revolve
          around balance — growing in my profession, nurturing relationships,
          and making a positive difference in the world.
        </motion.p>
      </main>
      <Footer />
    </div>
  );
}

export default FuturePlans;
