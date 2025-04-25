
import React from "react";

const services = [
  {
    title: "Manutenção de Computadores",
    description: "Formatamos, limpamos e otimizamos seu equipamento para máximo desempenho.",
    image: "https://www.findup.com.br/wp-content/uploads/2020/11/iStock-625135580.jpg"
  },
  {
    title: "Criação de Sites",
    description: "Desenvolvimento de sites responsivos, modernos e rápidos para sua presença online.",
    image: "https://ribnet.com.br/wp-content/uploads/2021/09/banner-criacao-de-sites-1.png"
  },
  {
    title: "Desenvolvimento de Aplicativos",
    description: "Aplicativos personalizados para Android, iOS e web com performance e design.",
    image: "https://source.unsplash.com/600x400/?app,development"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
        <p className="text-lg text-gray-700">Confira como podemos te ajudar:</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover scale-110" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
