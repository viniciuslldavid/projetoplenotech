import React, { useState } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-white shadow-md w-full fixed top-0 z-50 py-4 px-6"
      data-aos="fade-down"
    >
      <div className="flex items-center justify-between">
        {/* Logo posicionada à esquerda */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo Plenotech"
            className="h-6 md:h-8 w-auto max-h-10 object-contain"
          />
        </div>

        {/* Botão hamburger (aparece no mobile) */}
        <button
  className="md:hidden focus:outline-none"
  onClick={toggleMenu}
  aria-label="Abrir menu"
>
  <div className="space-y-1.5 w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
    <span
      className={`block h-0.5 w-full bg-gray-800 transform transition duration-300 ease-in-out ${
        isOpen ? "rotate-45 translate-y-1.5" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-full bg-gray-800 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    />
    <span
      className={`block h-0.5 w-full bg-gray-800 transform transition duration-300 ease-in-out ${
        isOpen ? "-rotate-45 -translate-y-1.5" : ""
      }`}
    />
  </div>
</button>


        {/* Menu de navegação */}
        <ul
          className={`${isOpen ? "block" : "hidden"
            } md:flex md:space-x-8 text-base font-medium text-gray-800 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <li className="md:inline-block block mb-2 md:mb-0" data-aos="fade-up" data-aos-delay="100">
            <a href="#inicio" className="hover:text-green-600 transition-colors duration-200">
              Início
            </a>
          </li>
          <li className="md:inline-block block mb-2 md:mb-0" data-aos="fade-up" data-aos-delay="200">
            <a href="#sobre" className="hover:text-green-600 transition-colors duration-200">
              Sobre
            </a>
          </li>
          <li className="md:inline-block block mb-2 md:mb-0" data-aos="fade-up" data-aos-delay="300">
            <a href="#servicos" className="hover:text-green-600 transition-colors duration-200">
              Serviços
            </a>
          </li>
          <li className="md:inline-block block mb-2 md:mb-0" data-aos="fade-up" data-aos-delay="400">
            <a href="#portfolio" className="hover:text-green-600 transition-colors duration-200">
              Portfólio
            </a>
          </li>
          <li className="md:inline-block block mb-2 md:mb-0" data-aos="fade-up" data-aos-delay="500">
            <a href="#contato" className="hover:text-green-600 transition-colors duration-200">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
