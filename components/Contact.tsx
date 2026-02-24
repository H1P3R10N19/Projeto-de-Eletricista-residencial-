
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
          
          <div className="lg:w-1/2 bg-yellow-400 p-10 md:p-16 flex flex-col justify-center fade-in-up">
            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">Envie uma Mensagem</h3>
            <form action="https://formspree.io/f/moqkqbzy" method="POST" className="space-y-4 mb-8">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Seu Nome" 
                  required 
                  className="w-full p-4 rounded bg-white/50 border-2 border-slate-900/10 focus:border-slate-900 outline-none transition-all placeholder:text-slate-600 font-bold"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Seu E-mail" 
                  required 
                  className="w-full p-4 rounded bg-white/50 border-2 border-slate-900/10 focus:border-slate-900 outline-none transition-all placeholder:text-slate-600 font-bold"
                />
              </div>
              <div>
                <textarea 
                  name="message" 
                  placeholder="Como podemos ajudar?" 
                  required 
                  rows={4}
                  className="w-full p-4 rounded bg-white/50 border-2 border-slate-900/10 focus:border-slate-900 outline-none transition-all placeholder:text-slate-600 font-bold"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-slate-900 text-white px-8 py-4 rounded font-black uppercase text-sm tracking-widest hover:bg-slate-800 transition-all shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>

            <div className="pt-8 border-t border-slate-900/10">
              <p className="text-slate-900 font-bold text-sm mb-4 uppercase tracking-tight">Ou se preferir:</p>
              <a 
                href="https://wa.me/5521989714357" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded font-black text-center uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
