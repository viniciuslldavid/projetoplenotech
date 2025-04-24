import React from "react";

export default function Hero() {
  
  return (
    
    <section id="home" className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20">

      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Plenotech - Tecnologia que Transforma</h1>
        <p className="text-lg md:text-xl mb-6">Manutenção de computadores, desenvolvimento de apps e sites em Uberlândia.</p>
        <a href="#contato"className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition-transform duration-300 hover:scale-105">
        Entre em Contato
        </a>

      </div>
      
    </section>
  );
}
