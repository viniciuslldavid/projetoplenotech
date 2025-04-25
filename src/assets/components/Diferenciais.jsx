import React from "react";

export default function Diferenciais() {
  const itens = [
    { title: "Atendimento Ágil", desc: "Respostas rápidas e suporte dedicado para cada cliente." },
    { title: "Preços Justos", desc: "Qualidade com excelente custo-benefício." },
    { title: "Soluções Modernas", desc: "Usamos tecnologia atual para garantir eficiência." },
  ];

  return (
    <section id="diferenciais" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-700" data-aos="zoom-in-up">
          Nossos Diferenciais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itens.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
