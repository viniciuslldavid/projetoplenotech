// src/assets/components/Navbar.jsx
import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Links de navegação à direita */}
        <ul className="flex space-x-8 text-sm font-medium text-gray-800">
          <li><a href="#inicio" className="hover:text-blue-500">Início</a></li>
          <li><a href="#sobre" className="hover:text-blue-500">Sobre</a></li>
          <li><a href="#servicos" className="hover:text-blue-500">Serviços</a></li>
          <li><a href="#portfolio" className="hover:text-blue-500">Portfólio</a></li>
          <li><a href="#contato" className="hover:text-blue-500">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
