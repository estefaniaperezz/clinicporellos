import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
document.title = 'CV Por Ellos';

const container = document.getElementById('root'); // Obtén el contenedor donde se montará la aplicación

const root = createRoot(container); // Crea el root utilizando createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(); // Función para reportar métricas web
