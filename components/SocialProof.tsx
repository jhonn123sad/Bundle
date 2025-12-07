import React from 'react';
import { Star } from 'lucide-react';
import { CONTENT } from '../constants';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
            De perfis invisíveis a <span className="text-brand-accent">contratadas em dólar</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Veja o que acontece quando você aplica a estratégia correta de internacionalização de carreira.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTENT.testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-brand-dark">{item.name}</h4>
                  <span className="text-sm text-slate-500">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter "Screenshots" Simulation */}
        <div className="mt-20">
          <p className="text-center font-bold text-brand-primary uppercase tracking-widest text-sm mb-8">
            Resultados Reais de Alunas
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center opacity-80">
             {/* Fake Email/Message prints */}
             <div className="bg-white p-4 rounded-lg shadow border border-gray-200 max-w-sm w-full transform -rotate-2">
                <div className="flex items-center gap-2 mb-2 border-b pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <p className="text-xs text-gray-500 mb-1">Subject: Job Offer - Senior Analyst (Remote)</p>
                <p className="text-sm font-semibold text-gray-800">We are pleased to offer you the position with a salary of $3,500 USD/month...</p>
             </div>
             <div className="bg-white p-4 rounded-lg shadow border border-gray-200 max-w-sm w-full transform rotate-2">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">in</div>
                    <span className="text-xs font-bold text-gray-600">LinkedIn Message</span>
                 </div>
                 <p className="text-sm text-gray-800">"Hi! I came across your profile and I'm impressed with your background. Are you open to international roles?"</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};