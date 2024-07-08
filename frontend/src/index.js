import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'animate.css/animate.min.css'; // Import animate.css
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import { WOW } from 'wowjs'; // Import WOW.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

new WOW().init(); // Initialize WOW.js

reportWebVitals();
