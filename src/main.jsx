import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import '@/css/globals.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {' '}
      {/* Wrap your application in Router */}
      <App />
    </Router>
  </StrictMode>
);
