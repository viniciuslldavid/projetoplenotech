import React from "react";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="zoom-in-up">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-semibold">Como solicito um orçamento?</h3>
            <p>Você pode usar o formulário na seção de contato ou nos chamar no WhatsApp.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-semibold">Qual o prazo para entrega de um site?</h3>
            <p>Depende do escopo, mas geralmente entre 7 a 15 dias úteis.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
