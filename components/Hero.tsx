import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { CONTENT } from '../constants';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-brand-dark via-brand-primary to-indigo-900 overflow-hidden text-white pt-20 pb-16 lg:pt-0">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-brand-light text-sm font-semibold uppercase tracking-wider animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Vida Global Feminina
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
              {CONTENT.hero.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-brand-light/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {CONTENT.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button onClick={onCtaClick} className="group">
                {CONTENT.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-brand-light/80 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>

          {/* Visual Content / Mockup */}
          <div className="relative lg:h-full flex justify-center items-center">
             <div className="relative w-full max-w-[500px] aspect-[4/5] bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-4 md:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Decorative "Mockup" elements representing the bundle */}
                <div className="absolute -top-6 -right-6 bg-brand-accent text-white w-24 h-24 rounded-full flex flex-col items-center justify-center font-bold shadow-lg z-20 animate-bounce-slow">
                    <span className="text-xs uppercase">Oferta</span>
                    <span className="text-xl">TOP</span>
                </div>
                
                <img 
                  src="https://picsum.photos/id/42/800/1000" 
                  alt="Mulher trabalhando remotamente em um café" 
                  className="w-full h-full object-cover rounded-lg shadow-inner opacity-90"
                />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur text-brand-dark p-6 rounded-xl shadow-xl">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="https://picsum.photos/id/64/50/50" className="w-10 h-10 rounded-full border-2 border-brand-primary" alt="Recrutador" />
                        <div>
                           <p className="text-xs font-bold text-gray-500 uppercase">Notificação</p>
                           <p className="text-sm font-bold">Sarah (Recruiter) viu seu perfil</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 italic">"Oi! Vi seu currículo e achei seu perfil excelente para nossa vaga remota de $3k USD..."</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};