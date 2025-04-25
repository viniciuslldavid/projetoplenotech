import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ComoNosEncontrar = () => {
  return (
    <section id="encontrar" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-500 to-green-700 text-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Lado esquerdo: informações */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Como nos encontrar?</h2>

          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3">
              <MapPin className="w-6 h-6" /> R. Atílio Valentini, 396 - Santa Mônica, Uberlândia - MG, 38408-214
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-6 h-6" /> (34) 99904-0327
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-6 h-6" /> contato@plenotech.com.br
            </p>
            <p className="flex items-center gap-3">
              <Clock className="w-6 h-6" /> Seg a sex – 9h às 17h | Sáb – 10h às 14h
            </p>
          </div>
        </div>

        {/* Lado direito: mapa */}
        <div className="flex-1 w-full h-[300px] md:h-[400px]">
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2761.480504806372!2d-48.24926591335537!3d-18.915233986287383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1745558638870!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ComoNosEncontrar;
