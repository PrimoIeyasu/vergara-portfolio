import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/css/globals.css';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
// import SwiperWork from "./components/Carousel"; // Import your SwiperWork component

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add SwiperWork route */}
        </Routes>
      </Layout>
    </Router>
  );
}
