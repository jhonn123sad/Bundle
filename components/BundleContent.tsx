import React from 'react';
import { CONTENT } from '../constants';
import { Plus } from 'lucide-react';

export const BundleContent: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">O que está incluso</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 mb-6">
            Sua caixa de ferramentas global
          </h2>
          <p className="text-brand-light/80 max-w-2xl mx-auto text-lg">
            Não é só teoria. É um kit prático de implementação imediata. Você baixa, edita e aplica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT.bundleItems.map((item, index) => (
            <div key={index} className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Plus className="w-12 h-12" />
              </div>
              <div className="mb-6 p-4 bg-gradient-to-br from-brand-primary to-brand-dark rounded-xl inline-block shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">{item.title}</h3>
              <p className="text-brand-light/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};