import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          
          
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-green-200">Home</a></li>
          <li><a href="#sobre" className="hover:text-green-200">Sobre</a></li>
          <li><a href="#servicos" className="hover:text-green-200">Serviços</a></li>
          <li><a href="#portfolio" className="hover:text-green-200">Portfólio</a></li>
          <li><a href="#depoimentos" className="hover:text-green-200">Depoimentos</a></li>
          <li><a href="#faq" className="hover:text-green-200">FAQ</a></li>
          <li><a href="#contato" className="hover:text-green-200">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}
