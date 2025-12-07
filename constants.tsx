import React from 'react';
import { 
  FileText, 
  Linkedin, 
  Globe, 
  MessageCircle, 
  ShieldCheck, 
  Briefcase,
  Award,
  BookOpen
} from 'lucide-react';

export const CONTENT = {
  hero: {
    headline: "O passo a passo para conquistar seu primeiro trabalho em dólar — sem sair do Brasil.",
    subheadline: "Aprenda como brasileiros reais estão sendo contratados por empresas americanas com estratégias simples e comprovadas.",
    cta: "Quero trabalhar em dólar",
  },
  benefits: [
    {
      title: "Liberdade Geográfica",
      description: "Trabalhe da sua casa ou de qualquer lugar do mundo.",
      icon: <Globe className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Salário em Dólar",
      description: "Multiplique sua renda ganhando em moeda forte (5x mais).",
      icon: <Briefcase className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Segurança de Carreira",
      description: "Acesse um mercado global com milhares de vagas abertas.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />
    }
  ],
  bundleItems: [
    {
      title: "Currículo Global Otimizado",
      desc: "Modelos editáveis aprovados por recrutadores dos EUA e Europa.",
      icon: <FileText className="w-8 h-8 text-white" />
    },
    {
      title: "LinkedIn Magnético",
      desc: "O checklist para transformar seu perfil em um ímã de oportunidades.",
      icon: <Linkedin className="w-8 h-8 text-white" />
    },
    {
      title: "Scripts de Abordagem",
      desc: "O que escrever para recrutadores e aplicar para vagas ocultas.",
      icon: <MessageCircle className="w-8 h-8 text-white" />
    },
    {
      title: "Guia de Entrevistas em Inglês",
      desc: "As perguntas mais comuns e como respondê-las com confiança.",
      icon: <Award className="w-8 h-8 text-white" />
    },
    {
      title: "Mapa das Vagas Remotas",
      desc: "Lista curada dos melhores sites para encontrar trabalho remoto real.",
      icon: <Globe className="w-8 h-8 text-white" />
    },
    {
      title: "Bônus: Glossário Corp Internacional",
      desc: "Domine os termos que todo profissional global precisa saber.",
      icon: <BookOpen className="w-8 h-8 text-white" />
    }
  ],
  testimonials: [
    {
      name: "Mariana S.",
      role: "Assistente Virtual",
      quote: "Eu achava que precisava ser fluente, mas com o método entendi que meu inglês intermediário bastava. Em 3 semanas consegui meu primeiro contrato de $2000/mês!",
      image: "https://picsum.photos/id/64/150/150"
    },
    {
      name: "Fernanda L.",
      role: "Designer Gráfico",
      quote: "Meu currículo era ignorado. Depois de aplicar o modelo do Bundle, recebi 3 convites para entrevista na mesma semana. O investimento se pagou no primeiro dia de trabalho.",
      image: "https://picsum.photos/id/338/150/150"
    },
    {
      name: "Juliana R.",
      role: "Customer Success",
      quote: "A segurança que a Rebecca e a Jéssica passam é real. Elas vivem isso. O material é direto ao ponto, sem enrolação. Recomendo para todas as minhas amigas.",
      image: "https://picsum.photos/id/129/150/150"
    }
  ],
  faq: [
    {
      question: "Preciso falar inglês fluente?",
      answer: "Não! Você precisa de inglês comunicativo. O Bundle ensina como se posicionar e usar ferramentas para auxiliar na comunicação, permitindo que você trabalhe mesmo com nível intermediário."
    },
    {
      question: "Moro no Brasil, funciona para mim?",
      answer: "Sim! O método é especificamente para quem mora no Brasil e quer trabalhar remotamente para fora, recebendo em dólar e gastando em real."
    },
    {
      question: "Tenho garantia?",
      answer: "Absolutamente. Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas."
    },
    {
      question: "Serve para qualquer área?",
      answer: "O foco principal são áreas digitais ou administrativas (Marketing, Design, TI, Assistência Virtual, Suporte, Vendas, RH). Se você usa um computador para trabalhar, este Bundle é para você."
    }
  ]
};