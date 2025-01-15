import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Importo bootstrap (No hace falta importarlo en ningun otro file)
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from "aos";
import "aos/dist/aos.css";
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom"; // Importo React Router

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
