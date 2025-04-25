
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-green-500 to-green-700 text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6 leading-tight">
          Tecnologia que Transforma
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Soluções digitais e manutenção de computadores em Uberlândia.
        </p>
        <a
          href="#contato"
          className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-green-100 transition-all duration-300 inline-flex items-center gap-2"
        >
          <FaPaperPlane /> Entre em Contato
        </a>
      </div>
    </section>
  );
}
