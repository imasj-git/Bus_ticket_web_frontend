import React from 'react';
import { createRoot } from 'react-dom/client'; // Correctly import createRoot
import './index.css'; // Tailwind CSS file
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
