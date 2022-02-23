import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import Historia from './pages/Historia';
import Miembros from './pages/Miembros';
import Novedades from './pages/Novedades';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/miembros" element={<Miembros />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contacto" element={<Contacto/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);