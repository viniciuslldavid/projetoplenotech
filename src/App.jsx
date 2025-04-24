import React, { useEffect } from "react";
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

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Sobre />
      <Services />
      <Diferenciais />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

