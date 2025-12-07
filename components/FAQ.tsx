import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark text-center mb-12">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {CONTENT.faq.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
              <button 
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-brand-dark text-lg">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};