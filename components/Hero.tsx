
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Dutra Instalações Elétrica
          </h1>
          <h2 className="text-xl md:text-3xl text-yellow-400 font-bold mb-8 uppercase tracking-wide">
            Serviços elétricos completos e fornecimento de materiais
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl border-l-4 border-yellow-400 pl-6">
            Especialistas em atendimento para Residencial, Condomínios, Consultórios e Hospitais com padrão técnico de excelência.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#servicos" className="bg-yellow-400 text-slate-900 px-8 py-4 rounded font-black uppercase text-sm tracking-widest hover:bg-white transition-all">
              Ver Serviços
            </a>
            <a href="#contato" className="bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded font-black uppercase text-sm tracking-widest hover:bg-slate-700 transition-all">
              Falar com a Dutra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
