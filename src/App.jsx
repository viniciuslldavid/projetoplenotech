import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manutencao from "./pages/servicos/Manutencao";
import Sites from "./pages/servicos/Sites";
import Apps from "./pages/servicos/Apps";
import ComoNosEncontrar from "./assets/components/ComoNosEncontrar";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Sobre from "./assets/components/Sobre";
import Services from "./assets/components/Services";
import Diferenciais from "./assets/components/Diferenciais";
import Portfolio from "./assets/components/Portfolio";
import Testimonials from "./assets/components/Testimonials";
import FAQ from "./assets/components/FAQ";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          {/* Página inicial com todas as seções */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Sobre />
                <Services />
                <Diferenciais />
                <Portfolio />
                <Testimonials />
                <FAQ />
                <ComoNosEncontrar />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* Rotas individuais dos serviços */}
          <Route path="/servicos/manutencao" element={<Manutencao />} />
          <Route path="/servicos/sites" element={<Sites />} />
          <Route path="/servicos/apps" element={<Apps />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}
