
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 fade-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&h=600&auto=format&fit=crop" 
                alt="Quadro elétrico profissional e organizado" 
                loading="lazy"
                className="rounded shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-4 -left-4 bg-slate-900 p-6 rounded shadow-xl border-l-4 border-yellow-400">
                <span className="text-white font-bold block">Dutra Instalações</span>
                <span className="text-yellow-400 text-xs font-black uppercase">Padrão de Qualidade</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 fade-in-up">
            <span className="text-yellow-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Institucional</span>
            <h2 className="text-slate-900 text-4xl font-extrabold mb-8 leading-tight">
              Confiança, Organização <br/>e Segurança Total
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              A <strong>Dutra Instalações Elétrica</strong> é referência em serviços técnicos de alta precisão no Rio de Janeiro. Nosso foco principal é garantir que cada sistema elétrico opere com 100% de segurança, eliminando riscos de sobrecarga e curto-circuitos.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Atuamos com destaque na região da <strong>Taquara (Boiuna)</strong> e atendemos clientes que buscam não apenas um eletricista, mas um parceiro técnico que preza pela limpeza, pontualidade e transparência nos orçamentos.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-2 border-slate-200 pl-4 py-2">
                <span className="block font-black text-slate-900 uppercase text-xs">Atuação</span>
                <span className="text-slate-500 text-sm">Rio de Janeiro / RJ</span>
              </div>
              <div className="border-l-2 border-slate-200 pl-4 py-2">
                <span className="block font-black text-slate-900 uppercase text-xs">Foco</span>
                <span className="text-slate-500 text-sm">Organização Técnica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
