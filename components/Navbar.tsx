
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="bg-yellow-400 p-1.5 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg leading-none">DUTRA</span>
              <span className="text-[10px] uppercase tracking-widest text-yellow-400 font-bold">Instalações Elétrica</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 font-semibold text-sm uppercase tracking-wide">
              <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#sobre" className="hover:text-yellow-400 transition-colors">Sobre</a>
              <a href="#servicos" className="hover:text-yellow-400 transition-colors">Serviços</a>
              <a href="#contato" className="hover:text-yellow-400 transition-colors">Contato</a>
            </div>
          </div>

          <div>
            <a 
              href="https://wa.me/5521989714357" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 text-slate-900 px-5 py-2 rounded font-bold text-xs uppercase tracking-wider hover:bg-yellow-300 transition-all flex items-center gap-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
