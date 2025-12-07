import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const Transformation: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-brand-dark mb-12">
            A jornada de transformação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            {/* The "Old Way" */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none border border-slate-200">
              <h3 className="text-xl font-bold text-slate-500 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                Antes do Bundle
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Currículo traduzido no Google Tradutor que ninguém lê.</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Medo paralisante de não falar inglês perfeito.</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Aplicando para 100 vagas e não recebendo nenhuma resposta.</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Ganhando em reais e vendo o poder de compra cair.</span>
                </li>
              </ul>
            </div>

            {/* The "New Way" */}
            <div className="bg-brand-primary text-white p-8 md:p-12 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none shadow-xl transform md:scale-105 z-10 relative">
              <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Vida Global
              </div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                Depois do Bundle
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="text-green-400 mt-1 font-bold">✓</span>
                  <span className="text-brand-light">Currículo otimizado para ATS e atrativo para recrutadores.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green-400 mt-1 font-bold">✓</span>
                  <span className="text-brand-light">Clareza e scripts prontos para se comunicar com confiança.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green-400 mt-1 font-bold">✓</span>
                  <span className="text-brand-light">Recrutadores vindo até o seu perfil no LinkedIn.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green-400 mt-1 font-bold">✓</span>
                  <span className="text-brand-light">Liberdade financeira ganhando 5x mais em dólar.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};