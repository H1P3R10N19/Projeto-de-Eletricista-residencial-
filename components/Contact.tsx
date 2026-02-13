
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-16 bg-slate-900 text-white">
            <h2 className="text-4xl font-extrabold mb-8">Vamos resolver <br/><span className="text-yellow-400">sua elétrica?</span></h2>
            <p className="text-slate-400 text-lg mb-12">
              Atendimento ágil, limpo e com garantia. Entre em contato agora para emergências ou agendamentos.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-yellow-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefone / WhatsApp</h4>
                  <p className="text-slate-400">(21) 98971-4357</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-yellow-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Área de Atendimento</h4>
                  <p className="text-slate-400">Rio de Janeiro (Capital e Região Metropolitana)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-yellow-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horário de Funcionamento</h4>
                  <p className="text-slate-400">Seg - Sex: 08:00 às 17:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center text-center">
            <div className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center mb-8">
              <svg className="w-12 h-12 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Orçamento Instantâneo</h3>
            <p className="text-slate-600 mb-8 max-w-sm">
              Clique no botão abaixo para abrir o WhatsApp e me enviar uma mensagem direta. Respondo o mais rápido possível!
            </p>
            <a 
              href="https://wa.me/5521989714357" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-green-700 hover:scale-105 transition-all shadow-xl shadow-green-600/20 flex items-center justify-center gap-3 uppercase"
            >
              Chamar no WhatsApp
            </a>
            <p className="mt-6 text-xs text-slate-400 uppercase tracking-widest font-bold">Respostas em menos de 15 minutos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
