import React from "react";

export default function Contact() {
  return (
    <section id="contato" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Fale com a gente</h2>
        <p className="text-lg mb-4">Estamos prontos para atender sua necessidade com tecnologia e agilidade.</p>
        <div className="mb-6">
          <p className="mb-2"><i className="fas fa-phone-alt mr-2"></i>(34) 99904-0327</p>
          <p className="mb-2"><i className="fab fa-whatsapp mr-2"></i><a href="https://wa.me/5534999040327" target="_blank" rel="noopener noreferrer">Fale no WhatsApp</a></p>
          <p className="mb-2"><i className="fas fa-envelope mr-2"></i><a href="mailto:contato@plenotech.com.br">contato@plenotech.com.br</a></p>
        </div>
        <a href="https://wa.me/5534999040327" target="_blank" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700">Entre em Contato</a>
      </div>
    </section>
  );
}
