import "./App.css";
import "./normalize.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/layout/Nav.js";
import Footer from "./components/layout/Footer.js";

import HomePage from "./pages/HomePage";
import LaBandaDeRockPage from "./pages/LaBandaDeRockPage";
import AdministradorPage from "./pages/AdministradorPage";
import LiveAidPage from "./pages/LiveAidPage";
import ContactoPage from "./pages/ContactoPage";



function App() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      const content = document.getElementById('content');
      preloader.style.display = 'none'; // Esconde el preloader
      content.style.display = 'block'; // Muestra el contenido
    }, 4000);
  });

  return (
    <div className="App">

      <div id="preloader">
        <img src="./images/queen_bio3.jpg" alt="Cargando..." />
      </div>

      <div id="content">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="la banda de rock" element={<LaBandaDeRockPage />} />
            <Route path="administrador" element={<AdministradorPage />} />
            <Route path="live aid" element={<LiveAidPage />} />
            <Route path="contacto" element={<ContactoPage />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </div>
  );
}

export default App;