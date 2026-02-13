
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&h=600&auto=format&fit=crop" 
                alt="Quadro elétrico residencial extremamente organizado" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover w-full h-[400px] md:h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 md:p-8 rounded-2xl shadow-xl hidden lg:flex items-center justify-center max-w-[200px]">
                <span className="text-slate-900 font-black uppercase text-center text-sm md:text-base leading-tight">
                  Longos anos de experiência
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-slate-900 text-4xl font-extrabold mb-6 leading-tight">
              Compromisso com a <br/>Excelência Técnica
            </h2>
            <div className="w-20 h-1.5 bg-yellow-400 mb-8"></div>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Com mais de uma década de atuação no mercado carioca, foco meu trabalho na segurança e no bem-estar de cada família. Especializado em normas técnicas, garanto que cada fio e disjuntor em sua casa esteja em perfeito estado.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Diferente de amadores, prezo pela organização total do canteiro de serviço, pontualidade britânica e transparência total no orçamento. Sua casa merece um profissional que respeita seu espaço.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Certificado Técnico Profissional', 'Atendimento em toda Região Sul e Barra', 'Disponibilidade para Emergências', 'Uso de materiais de primeira linha'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-900 font-semibold">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
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

export default About;
