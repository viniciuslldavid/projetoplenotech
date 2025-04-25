import React from "react";

export default function Portfolio() {
  const projetos = [
    { title: "Site Loja Online", img: "/portfolio1.jpg" },
    { title: "Aplicativo Delivery", img: "/portfolio2.jpg" },
    { title: "Blog Profissional", img: "/portfolio3.jpg" },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-700" data-aos="zoom-in-up">
          Portfólio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projetos.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
