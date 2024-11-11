import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import initAOS from './animations/AOS';


import SvgParallax from './components/parallax/svgParallax.js';


initAOS(); // Викликаємо функцію для ініціалізації AOS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SvgParallax/>
    <App />
    
  </React.StrictMode>
);

reportWebVitals();
