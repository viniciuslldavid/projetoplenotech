import React from "react";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg italic mb-4">"A Plenotech salvou meu computador! Rápidos e eficientes."</p>
            <p className="font-semibold">— Ana Paula</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg italic mb-4">"Site moderno e funcional. Meus clientes adoraram!"</p>
            <p className="font-semibold">— João Silva</p>
          </div>
        </div>
      </div>
    </section>
  );
}
