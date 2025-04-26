import React from "react";
import { Parallax } from "react-scroll-parallax";
import bgImage from "../images/background.png";
import notebook from "../images/notebook.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay verde escuro */}
      <div className="absolute inset-0 bg-green-800 opacity-70"></div>

      {/* Conteúdo Flexível */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Texto à esquerda */}
        <div
          className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Plenotech - Tecnologia que Transforma
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
            Manutenção de computadores, desenvolvimento de apps e sites em Uberlândia.
          </p>
          <a
            href="#contato"
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-100 hover:shadow-lg hover:shadow-green-400/50 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Entre em Contato
          </a>
        </div>

        {/* Notebook com padding e parallax */}
        <div className="w-full md:w-1/2 flex justify-center px-4 md:px-10 mb-10 md:mb-0">
          <Parallax speed={-10}>
            <img
              src={notebook}
              alt="Notebook Explodido"
              className="w-full object-contain max-w-[320px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[650px]"
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
}
