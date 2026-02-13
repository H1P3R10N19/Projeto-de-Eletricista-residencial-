
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-10 md:p-16 text-white">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Fale com a Dutra</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 pt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.569 4.569l.773-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase text-slate-400 mb-1">Telefones</h4>
                  <p className="text-lg font-bold">(21) 2299-6429</p>
                  <p className="text-lg font-bold">(21) 98971-4357</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 pt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase text-slate-400 mb-1">E-mail</h4>
                  <p className="font-bold">boasnovasmarcio@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-yellow-400 pt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase text-slate-400 mb-1">Endereço</h4>
                  <p className="text-sm leading-relaxed max-w-xs font-medium">
                    Estrada da Boiuna, 1030, Lote 11, Casa B, Taquara, Rio de Janeiro - RJ, CEP 22723-018
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-yellow-400 p-10 md:p-16 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">Atendimento Especializado</h3>
            <p className="text-slate-800 mb-8 font-medium">
              Entre em contato agora mesmo para solicitar seu orçamento ou visita técnica.
            </p>
            <a 
              href="https://wa.me/5521989714357" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-8 py-5 rounded font-black text-center uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl"
            >
              Chamar no WhatsApp
            </a>
            <div className="mt-8 pt-8 border-t border-slate-900/10">
              <p className="text-slate-900 font-bold text-sm tracking-tight italic">"Qualidade e Segurança em cada conexão."</p>
              <p className="text-slate-700 text-xs mt-1 font-bold">dutraestalacoeseletrica.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
