import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import AboutMe from '@/pages/AboutMe';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import Skills from '@/pages/Skills';
import ChallengesPage from '@/pages/ChallengesPage';
import FuturePlans from '@/pages/FuturePlans';
import Resume from '@/pages/Resume';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/challenges" element={<ChallengesPage />} />
      <Route path="/future" element={<FuturePlans />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
