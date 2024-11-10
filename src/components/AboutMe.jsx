import React from 'react';
import '@/css/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="section-container">
      <h1 className="about-me-title">About Me</h1>
      <div className="Am-box">
        <div className="Am-background"></div> {/* Background wrapper */}
        <div className="Am-content">
          <h1 className="h1-Am">Hobbies</h1>
          <p>
            <span className="text-[#66fcf1]">•</span> Playing Video Games <br />
            <span className="text-[#66fcf1]">•</span> Watching Random Videos{' '}
            <br />
            <span className="text-[#66fcf1]">•</span> Watching Anime and Reading
            Manga
          </p>
        </div>
      </div>
      <div className="Am-box">
        <div className="Am-background"></div> {/* Background wrapper */}
        <div className="Am-content">
          <h1 className="h1-Am">Skills</h1>
          <p>
            <span className="text-[#66fcf1]">•</span> Web Development <br />
            <span className="text-[#66fcf1]">•</span> Basic Java <br />
            <span className="text-[#66fcf1]">•</span> Basic Python <br />
            <span className="text-[#66fcf1]">•</span> PHP
          </p>
        </div>
      </div>
      <div className="Am-box">
        <div className="Am-background"></div> {/* Background wrapper */}
        <div className="Am-content">
          <h1 className="h1-Am">Goals</h1>
          <p>
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
