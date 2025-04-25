import React from "react";

export default function Hero() {
  return (
    <section id="home" className="bg-green-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="zoom-in-up">
          Plenotech - Tecnologia que Transforma
        </h1>
        <p className="text-lg md:text-xl mb-6" data-aos="fade-up" data-aos-delay="200">
          Manutenção de computadores, desenvolvimento de apps e sites em Uberlândia.
        </p>
        <a
          href="#contato"
          className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  );
}
