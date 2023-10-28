import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-dark-teal/theme.css";
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrimeReactProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PrimeReactProvider>

);
