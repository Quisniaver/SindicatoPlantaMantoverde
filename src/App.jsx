import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 🟩 Páginas principales
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Multimedia from "./pages/Multimedia";
import Documentos from "./pages/Documentos";
import Noticias from "./pages/Noticias";

// 🟦 Convenios y Beneficios

import Optica from "./pages/Optica";
import ConveniosCiudad from "./pages/ConveniosCiudad";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Multimedia" element={<Multimedia />} />
        <Route path="/Documentos" element={<Documentos />} />
        <Route path="/Noticias" element={<Noticias />} />

        {/* 🟦 Convenios y Beneficios */}

        <Route path="/Optica" element={<Optica />} />
        <Route path="/ConveniosCiudad" element={<ConveniosCiudad />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
