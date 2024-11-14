import "./App.css";
import "./normalize.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/layout/Nav.js";
import Footer from "./components/layout/Footer.js";

import HomePage from "./pages/HomePage";
import LaBandaDeRockPage from "./pages/LaBandaDeRockPage";
import MusicaPage from "./pages/MusicaPage";
import LiveAidPage from "./pages/LiveAidPage";
import ContactoPage from "./pages/ContactoPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="la banda de rock" element={<LaBandaDeRockPage />} />
          <Route path="musica" element={<MusicaPage />} />
          <Route path="live aid" element={<LiveAidPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;