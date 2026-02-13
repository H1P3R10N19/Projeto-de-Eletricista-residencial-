
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded bg-yellow-400 text-slate-900 font-bold text-xs uppercase tracking-widest mb-6">
            Eletricista Residencial
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Soluções Elétricas com <span className="text-yellow-400">Segurança</span> e Confiança.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Especialista em manutenção preventiva, reparos emergenciais e instalações elétricas completas para sua residência. Atendimento organizado, limpo e profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#servicos" className="inline-block text-center bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20">
              Conhecer Serviços
            </a>
            <a href="#contato" className="inline-block text-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-slate-900 transition-all">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
