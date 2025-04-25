import React from "react";

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="zoom-in-up">
          Sobre a Plenotech
        </h2>
        <div className="max-w-3xl mx-auto" data-aos="fade-up" tabIndex={0}>
          <p className="text-lg mb-4">
            Somos uma empresa de Uberlândia apaixonada por tecnologia.
          </p>
          <p className="text-lg">
            Desde 2020, ajudamos pessoas e negócios a evoluírem com soluções digitais.
          </p>
        </div>
      </div>
    </section>
  );
}
