import React from "react";

export default function Testimonials() {
  const depoimentos = [
    {
      text: "A Plenotech salvou meu computador! Rápidos e eficientes.",
      autor: "Ana Paula"
    },
    {
      text: "Site moderno e funcional. Meus clientes adoraram!",
      autor: "João Silva"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-700" data-aos="zoom-in-up">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <p className="text-lg italic mb-4">"{d.text}"</p>
              <p className="font-semibold">— {d.autor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
