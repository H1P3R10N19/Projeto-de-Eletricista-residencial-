
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-xs">
            <span className="text-slate-900 font-black text-xl block mb-2">DUTRA INSTALAÇÕES</span>
            <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase tracking-wider">
              Serviços elétricos e venda de materiais diversos. Atendimento residencial, comercial e hospitalar.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <span className="block font-black text-xs text-slate-900 uppercase mb-4">Acesso</span>
              <ul className="space-y-2 text-xs font-bold text-slate-500 uppercase">
                <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
                <li><a href="#sobre" className="hover:text-yellow-500">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-yellow-500">Serviços</a></li>
                <li><a href="#contato" className="hover:text-yellow-500">Contato</a></li>
              </ul>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <span className="block font-black text-xs text-slate-900 uppercase mb-4">Contatos Rápidos</span>
              <ul className="space-y-2 text-xs font-bold text-slate-500 uppercase">
                <li>RJ: (21) 2299-6429 / (21) 98971-4357</li>
                <li><a href="https://wa.me/5521989714357" className="text-yellow-600">WhatsApp Direto</a></li>
                <li>E-mail: boasnovasmarcio@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Dutra Instalações Elétrica | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
