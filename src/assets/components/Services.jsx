import React from "react";
import { FaDesktop, FaMobileAlt, FaGlobe } from "react-icons/fa";

export default function Services() {
  const servicos = [
    { icon: "fas fa-desktop", title: "Manutenção de Computadores", desc: "Reparos, upgrades e manutenção preventiva." },
    { icon: "fas fa-mobile-alt", title: "Desenvolvimento de Apps", desc: "Apps personalizados para conectar você aos clientes." },
    { icon: "fas fa-globe", title: "Desenvolvimento de Sites", desc: "Sites modernos e otimizados para negócios." }
  ];

  return (
    <section id="servicos" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              data-aos="zoom-in"
            >
              <i className={`${s.icon} text-green-600 text-4xl mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
