import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-white/10 pb-12 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-2">Vida Global Feminina</h3>
            <p className="text-brand-light/60 text-sm max-w-xs">
              Empoderando mulheres brasileiras a conquistarem o mundo através da liberdade profissional.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-accent transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-light/40">
          <p>© {new Date().getFullYear()} Vida Global Feminina. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};