import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12 text-green-700"
          data-aos="zoom-in-up"
        >
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/servicos/manutencao" className="block" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white border-2 border-green-500 shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 active:scale-95 cursor-pointer">
              <img
                src="https://www.findup.com.br/wp-content/uploads/2020/11/iStock-625135580.jpg"
                alt="Manutenção"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Manutenção de Computadores</h3>
                <p className="text-gray-600">Formatamos, limpamos e otimizamos seu PC.</p>
                <span className="text-green-600 font-medium mt-2 flex items-center">
                  Ver detalhes <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </Link>

          <Link to="/servicos/sites" className="block" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white border-2 border-green-500 shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 active:scale-95 cursor-pointer">
              <img
                src="https://ribnet.com.br/wp-content/uploads/2021/09/banner-criacao-de-sites-1.png"
                alt="Criação de Sites"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Criação de Sites</h3>
                <p className="text-gray-600">Sites profissionais, modernos e responsivos.</p>
                <span className="text-green-600 font-medium mt-2 flex items-center">
                  Ver detalhes <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </Link>

          <Link to="/servicos/apps" className="block" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-white border-2 border-green-500 shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 active:scale-95 cursor-pointer">
              <img
                src="https://img.freepik.com/vetores-gratis/banner-de-desenvolvimento-de-aplicativos_33099-1720.jpg"
                alt="Desenvolvimento de Apps"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Desenvolvimento de Apps</h3>
                <p className="text-gray-600">Aplicativos para Android sob medida para sua ideia.</p>
                <span className="text-green-600 font-medium mt-2 flex items-center">
                  Ver detalhes <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
