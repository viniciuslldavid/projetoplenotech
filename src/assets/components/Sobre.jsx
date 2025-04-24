import React from "react";

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre a Plenotech</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2" data-aos="fade-right">
  <p className="text-lg mb-4">Somos uma empresa de Uberlândia apaixonada por tecnologia.</p>
  <p className="text-lg">Desde 2020, ajudamos pessoas e negócios a evoluírem com soluções digitais.</p>
</div>
          <div className="md:w-1/2">
            <img src="/team.jpg" alt="Equipe Plenotech" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
