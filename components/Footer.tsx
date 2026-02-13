
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-500 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-white font-black text-xl mb-2 block tracking-tighter">ELÉTRICA<span className="text-yellow-400">RIO</span></span>
          <p className="text-sm">Especialista em manutenção residencial no Rio de Janeiro.</p>
          <p className="text-xs mt-1">CNPJ: 00.000.000/0001-00 (Simulado)</p>
        </div>
        
        <div className="flex flex-col md:items-end">
          <p className="text-sm font-bold text-slate-400 mb-2">Links Rápidos</p>
          <div className="flex gap-6 text-xs uppercase tracking-widest font-semibold">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#sobre" className="hover:text-yellow-400 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-yellow-400 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-yellow-400 transition-colors">Contato</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
        <p>© {new Date().getFullYear()} ElétricaRio - Todos os direitos reservados. Design Profissional para Eletricistas.</p>
      </div>
    </footer>
  );
};

export default Footer;
