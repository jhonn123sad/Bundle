import React from 'react';
import { Check, ShieldCheck, Lock } from 'lucide-react';
import { Button } from './Button';

interface OfferProps {
  onBuyClick: () => void;
}

export const Offer: React.FC<OfferProps> = ({ onBuyClick }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white" id="offer">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="bg-brand-dark p-6 text-center text-white">
            <h3 className="text-2xl font-bold uppercase tracking-wider">Oferta Especial Limitada</h3>
          </div>
          
          <div className="p-8 md:p-12 text-center">
            <div className="mb-8">
               <p className="text-slate-500 text-lg mb-2 line-through">De R$ 497,00</p>
               <p className="text-slate-600 font-semibold mb-4">Por apenas 12x de</p>
               <div className="flex justify-center items-end gap-1 text-brand-primary">
                 <span className="text-4xl font-bold mb-2">R$</span>
                 <span className="text-7xl md:text-8xl font-extrabold tracking-tighter">19</span>
                 <span className="text-2xl font-bold mb-4">,90</span>
               </div>
               <p className="text-slate-500 mt-2">ou R$ 197,00 à vista</p>
            </div>

            <div className="flex flex-col gap-4 max-w-sm mx-auto mb-10">
              <div className="flex items-center gap-3 text-left">
                <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                <span className="text-slate-700 font-medium">Acesso Vitalício ao Bundle</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                <span className="text-slate-700 font-medium">Modelos de Currículo Editáveis</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                <span className="text-slate-700 font-medium">Scripts de LinkedIn e Entrevista</span>
              </div>
               <div className="flex items-center gap-3 text-left">
                <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                <span className="text-slate-700 font-medium">Bônus Exclusivos</span>
              </div>
            </div>

            <Button onClick={onBuyClick} variant="primary" fullWidth className="max-w-md py-5 text-xl animate-pulse-slow">
              QUERO MINHA CARREIRA EM DÓLAR
            </Button>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 text-sm text-slate-500">
               <div className="flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-brand-primary" />
                 <span>Garantia de 7 dias</span>
               </div>
               <div className="flex items-center gap-2">
                 <Lock className="w-5 h-5 text-green-500" />
                 <span>Pagamento Seguro</span>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};