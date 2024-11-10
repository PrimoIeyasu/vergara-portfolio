import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.9, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.9, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[320px] h-[320px] xl:w-[420px] xl:h-[420px] absolute"
        >
          <img
            src="/assets/circleprofile.png"
            alt="Profile"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </motion.div>

        {/* Circle with Enhanced Gradient */}
        <motion.svg
          className="w-[320px] xl:w-[426px] h-[320px] xl:h-[426px] flicker-circle"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Enhanced Gradient Definition */}
            <linearGradient
              id="gradient-id"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#66FCF1" />
              <stop offset="25%" stopColor="#56d0d4" />
              <stop offset="50%" stopColor="#44e3ff" />
              <stop offset="75%" stopColor="#0098c7" />
              <stop offset="100%" stopColor="#00bbff" />
            </linearGradient>
          </defs>
          <circle
            cx="253"
            cy="253"
            r="250"
            stroke="url(#gradient-id)" // Apply the enhanced gradient
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
