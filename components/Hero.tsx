
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="#1B2588" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block">
             <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="40" r="35" stroke="#F1B524" strokeWidth="4" />
                <path d="M45 65 Q50 75 55 65 L45 80 Q50 90 55 80" stroke="#F1B524" strokeWidth="4" strokeLinecap="round" />
                <path d="M55 25 L40 45 L52 45 L45 60 L60 40 L48 40 L55 25Z" fill="#F1B524" />
              </svg>
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-none text-[#1B2588] mb-4 tracking-tighter">
            Dutra Instalações <br/>Elétrica
          </h1>
          <h2 className="text-xl md:text-3xl text-slate-600 font-bold mb-8 uppercase tracking-wide">
            Serviços elétricos completos e venda de materiais
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl border-l-4 border-[#F1B524] pl-6 font-medium">
            Atendimento especializado para Residencial, Condomínios, Consultórios e Hospitais no Rio de Janeiro.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#servicos" className="bg-[#1B2588] text-white px-8 py-4 rounded font-black uppercase text-sm tracking-widest hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20">
              Ver Serviços
            </a>
            <a href="#contato" className="bg-white text-[#1B2588] border-2 border-[#1B2588] px-8 py-4 rounded font-black uppercase text-sm tracking-widest hover:bg-slate-50 transition-all">
              Falar com a Dutra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
