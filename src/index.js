import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css'
import 'aos/dist/aos.css'



import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.js'
import './utils/helpers.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

