
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 text-4xl font-extrabold mb-4">Nossa Atuação</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* BLOCO A: SERVIÇOS GERAIS */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-slate-900">
            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-2">
              <span className="text-yellow-500">01.</span> Elétrica em Geral
            </h3>
            <ul className="space-y-4 text-slate-600 font-medium service-list-dot ml-4">
              <li>Manutenção elétrica residencial</li>
              <li>Instalações e reparos elétricos</li>
              <li>Troca e instalação de disjuntores</li>
              <li>Instalação de chuveiros</li>
              <li>Luminárias e tomadas</li>
              <li>Correção de curtos e falhas</li>
              <li>Organização de quadro elétrico</li>
            </ul>
          </div>

          {/* BLOCO B: SEGMENTOS */}
          <div className="bg-slate-900 p-8 rounded-lg shadow-xl text-white">
            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight flex items-center gap-2">
              <span className="text-yellow-400">02.</span> Segmentos
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {['Hospitais', 'Consultórios', 'Condomínios', 'Residencial'].map((item, i) => (
                <div key={i} className="bg-slate-800 p-4 rounded border-l-2 border-yellow-400 flex justify-between items-center">
                  <span className="font-bold">{item}</span>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* BLOCO C: MATERIAIS */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-yellow-400">
            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-2">
              <span className="text-yellow-500">03.</span> Materiais Elétricos
            </h3>
            <p className="text-xs text-slate-400 mb-4 uppercase font-bold">Venda de Produtos:</p>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                Cabos e fios (diversas bitolas)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                Tomadas e interruptores
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                Chuveiros e resistências
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                Lâmpadas LED e em geral
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                Materiais diversos para obras
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
