import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './css/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/vergara-portfolio">
      {' '}
      {/* ← Important fix */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
