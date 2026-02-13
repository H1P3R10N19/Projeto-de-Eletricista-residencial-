
import React from 'react';

const servicesList = [
  {
    title: "Manutenção Geral",
    desc: "Reparos em tomadas, interruptores, chuveiros elétricos e fiação com desgaste.",
    icon: <path d="M11 2a2 2 0 00-2 2v5H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h5v5a2 2 0 002 2h2a2 2 0 002-2v-5h5a2 2 0 002-2v-2a2 2 0 00-2-2h-5V4a2 2 0 00-2-2h-2z" />
  },
  {
    title: "Quadros de Força",
    desc: "Montagem, organização e troca de disjuntores para evitar sobrecargas e incêndios.",
    icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M7 8h10v2H7V8z M7 12h10v2H7v-2z" />
  },
  {
    title: "Projetos de Iluminação",
    desc: "Instalação de trilhos, pendentes, spots e sistemas de iluminação LED inteligente.",
    icon: <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  },
  {
    title: "Aterramento e Proteção",
    desc: "Implementação de sistemas de aterramento e dispositivos contra surtos (DPS).",
    icon: <path d="M12 2l-5.5 9h11L12 2zm0 20l5.5-9h-11L12 22z" />
  },
  {
    title: "Novas Instalações",
    desc: "Execução completa da fiação e acabamentos para reformas ou novas construções.",
    icon: <path d="M19 11h-2V7h-2v4h-2V7h-2v4H9V7H7v4H5v2h2v4h2v-4h2v4h2v-4h2v4h2v-4h2v-2z" />
  },
  {
    title: "Diagnóstico de Curtos",
    desc: "Identificação precisa de fugas de energia e curto-circuitos ocultos nas paredes.",
    icon: <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 text-4xl font-extrabold mb-4">Serviços Especializados</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Soluções completas para manter sua casa segura e funcional. Atendemos chamados avulsos e projetos de grande porte.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-white text-2xl font-bold mb-2">Precisa de algo específico?</h3>
            <p className="text-slate-400">Faço orçamentos personalizados de acordo com sua necessidade.</p>
          </div>
          <a href="#contato" className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
            Falar com Profissional
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
