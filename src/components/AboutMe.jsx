import React from 'react';
import '@/css/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="section-container">
      <h1 className="about-me-title">Who am I?</h1>
      {/* About Me Box */}
      <div className="Am-box">
        <div className="Am-background"></div> {/* Background wrapper */}
        <div className="Am-content">
          <h1 className="h1-Am">About Me</h1>
          <p className="text-justify text-left">
            I'm an easy-going and friendly guy who enjoys life's simple
            pleasures. I aim to live a peaceful, normal life while pursuing my
            passion for technology and continuous self-improvement. Whether it's
            coding, gaming, or just relaxing, I always try to maintain balance
            and good vibes.
          </p>
        </div>
      </div>
      <div className="Am-box">
        <div className="Am-background"></div> {/* Background wrapper */}
        <div className="Am-content">
          <h1 className="h1-Am">Hobbies</h1>
          <p>
            <span className="text-[#66fcf1]">•</span> Playing my Guitar <br />
            <span className="text-[#66fcf1]">•</span> Playing Video Games <br />
            <span className="text-[#66fcf1]">•</span> Watching Random Videos{' '}
            <br />
            <span className="text-[#66fcf1]">•</span> Watching TV shows, Movies,
            Anime and Reading Manga
          </p>
        </div>
      </div>
      <div className="Am-box">
        <div className="Am-background"></div> {/* Background wrapper */}
        <div className="Am-content">
          <h1 className="h1-Am">Family Background</h1>
          <p className="text-justify text-left">
            I live with my mother and stepfather. My mother is a licensed
            radiologic technologist (RadTech), and my stepfather works as a
            Social Screening Officer (SSO) at NAIA Airport. I also have two
            younger siblings: a 13-year-old sister who is currently in Grade 7,
            and a 7-year-old brother in Grade 1.
          </p>
        </div>
      </div>

      <div className="Am-box">
        <div className="Am-background"></div> {/* Background wrapper */}
        <div className="Am-content">
          <h1 className="h1-Am">Goals</h1>
          <p className="text-justify text-left">
            As a third-year Computer Science major, I’m focused on mastering
            core concepts like algorithms, data structures, and software
            engineering, while also expanding my practical skills through
            projects and internships.
          </p>
        </div>
      </div>
      <div className="Am-box">
        <div className="Am-background"></div> {/* Background wrapper */}
        <div className="Am-content">
          <h1 className="h1-Am">Qualities</h1>
          <p>
            <span className="text-[#66fcf1]">•</span> Reliable <br />
            <span className="text-[#66fcf1]">•</span> Driven-oriented <br />
            <span className="text-[#66fcf1]">•</span> Easy-going <br />
            <span className="text-[#66fcf1]">•</span> Meticulous <br />
            <span className="text-[#66fcf1]">•</span> Abstract Thinker <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
