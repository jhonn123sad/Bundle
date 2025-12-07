import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/id/65/300/400" alt="Rebecca" className="rounded-2xl shadow-lg w-full h-auto object-cover mt-8" />
               <img src="https://picsum.photos/id/64/300/400" alt="Jéssica" className="rounded-2xl shadow-lg w-full h-auto object-cover mb-8" />
             </div>
             {/* Decorative element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border-2 border-brand-primary/20 rounded-full z-0"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
              Quem criou o método?
            </h2>
            <h3 className="text-xl text-brand-primary font-bold mb-4">Rebecca & Jéssica</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Somos brasileiras comuns que decidiram não aceitar os limites geográficos para nossas carreiras. 
              Hoje, trabalhamos para grandes empresas internacionais, viajamos o mundo e ganhamos em dólar.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Criamos a <strong>Vida Global Feminina</strong> porque cansamos de ver mulheres talentosas ganhando pouco no Brasil simplesmente por não saberem <em>como</em> se vender para o mercado externo.
            </p>
            <p className="text-slate-700 font-semibold italic">
              Não somos "gurus". Somos profissionais que vivem no campo de batalha e empacotamos exatamente o que funcionou para nós e para centenas de alunas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};