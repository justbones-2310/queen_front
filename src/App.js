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
import { useEffect, useState } from "react";



function App() {

  const [showPreloader, setShowPreloader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowPreloader(false);
      }, 2000);

    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">

      {showPreloader && (
        <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
          <h1> Bienvenidos </h1>
        </div>
      )}

      {!showPreloader && (
        <div>

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
      )}
    </div>
  );
}

export default App;