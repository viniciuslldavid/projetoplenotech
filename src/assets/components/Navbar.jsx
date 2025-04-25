import React, { useState } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50 h-14">
      <div className="max-w-7xl mx-auto pl-2 pr-4 py-1 flex items-center justify-between">
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="PlenoTech Logo"
            className="h-10 w-auto max-h-10 object-contain sm:h-8 sm:max-h-8"
          />
        </div>

        {/* Botão hamburguer para mobile */}
        <button
          className="sm:block md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links de navegação */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-8 text-sm font-medium text-gray-800 absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <li className="md:inline-block block mb-2 md:mb-0">
            <a href="#inicio" className="hover:text-blue-500">
              Início
            </a>
          </li>
          <li className="md:inline-block block mb-2 md:mb-0">
            <a href="#sobre" className="hover:text-blue-500">
              Sobre
            </a>
          </li>
          <li className="md:inline-block block mb-2 md:mb-0">
            <a href="#servicos" className="hover:text-blue-500">
              Serviços
            </a>
          </li>
          <li className="md:inline-block block mb-2 md:mb-0">
            <a href="#portfolio" className="hover:text-blue-500">
              Portfólio
            </a>
          </li>
          <li className="md:inline-block block mb-2 md:mb-0">
            <a href="#contato" className="hover:text-blue-500">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;