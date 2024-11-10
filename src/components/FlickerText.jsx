import React, { useEffect, useState } from "react";
import "@/css/FlickerText.css";

const TypingFlickerText = () => {
  const fullText = "Jon Ken Heron Vergara";
  const [displayedText, setDisplayedText] = useState(fullText);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setDisplayedText((prev) => (prev === fullText ? fullText : fullText));
    }, 500); // Flicker speed (in ms)

    return () => clearInterval(flickerInterval);
  }, [fullText]);

  return (
    <span className="text-yellow-400 flicker-effect">{displayedText}</span>
  );
};

export default TypingFlickerText;
