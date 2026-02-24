
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
          <div className="group bg-white p-8 rounded-xl shadow-sm border-t-4 border-slate-900 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:shadow-slate-300/50 cursor-pointer fade-in-up">
            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-2">
              <span className="text-yellow-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">01.</span> Elétrica em Geral
            </h3>
            <ul className="space-y-4 text-slate-600 font-medium service-list-dot ml-4">
              <li className="transition-colors group-hover:text-slate-900">Manutenção elétrica residencial</li>
              <li className="transition-colors group-hover:text-slate-900">Instalações e reparos elétricos</li>
              <li className="transition-colors group-hover:text-slate-900">Troca e instalação de disjuntores</li>
              <li className="transition-colors group-hover:text-slate-900">Instalação de chuveiros</li>
              <li className="transition-colors group-hover:text-slate-900">Luminárias e tomadas</li>
              <li className="transition-colors group-hover:text-slate-900">Correção de curtos e falhas</li>
              <li className="transition-colors group-hover:text-slate-900">Organização de quadro elétrico</li>
            </ul>
          </div>

          {/* BLOCO B: SEGMENTOS */}
          <div className="group bg-slate-900 p-8 rounded-xl shadow-lg text-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-900/20 cursor-pointer fade-in-up [animation-delay:200ms]">
            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight flex items-center gap-2">
              <span className="text-yellow-400 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">02.</span> Segmentos
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {['Hospitais', 'Consultórios', 'Condomínios', 'Residencial'].map((item, i) => (
                <div key={i} className="bg-slate-800 p-4 rounded border-l-2 border-yellow-400 flex justify-between items-center hover:bg-slate-700 transition-all group-hover:border-l-4">
                  <span className="font-bold">{item}</span>
                  <svg className="w-4 h-4 text-yellow-400 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* BLOCO C: MATERIAIS */}
          <div className="group bg-white p-8 rounded-xl shadow-sm border-t-4 border-yellow-400 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:shadow-yellow-400/10 cursor-pointer fade-in-up [animation-delay:400ms]">
            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-2">
              <span className="text-yellow-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">03.</span> Materiais Elétricos
            </h3>
            <p className="text-xs text-slate-400 mb-4 uppercase font-bold">Venda de Produtos:</p>
            <ul className="space-y-3 text-slate-600 font-medium">
              {[
                'Cabos e fios (diversas bitolas)',
                'Tomadas e interruptores',
                'Chuveiros e resistências',
                'Lâmpadas LED e em geral',
                'Materiais diversos para obras'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 transition-colors group-hover:text-slate-900">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full transition-all group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(250,204,21,0.4)]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
