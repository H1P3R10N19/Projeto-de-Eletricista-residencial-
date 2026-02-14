
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-slate-900 shadow-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <circle cx="50" cy="40" r="35" stroke="#F1B524" strokeWidth="4" />
                <path d="M45 65 Q50 75 55 65 L45 80 Q50 90 55 80" stroke="#F1B524" strokeWidth="4" strokeLinecap="round" />
                <path d="M55 25 L40 45 L52 45 L45 60 L60 40 L48 40 L55 25Z" fill="#F1B524" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[#1B2588] font-black text-2xl leading-none tracking-tight">DUTRA</span>
                <span className="text-[#1B2588] text-[8px] font-bold uppercase tracking-[0.2em] -mt-0.5">Instalações Elétrica</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 font-bold text-xs uppercase tracking-widest text-slate-600">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Contato', href: '#contato' }
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="group relative py-2 hover:text-[#1B2588] transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F1B524] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <a 
              href="https://wa.me/5521989714357" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1B2588] text-white px-6 py-2.5 rounded font-black text-xs uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20"
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
