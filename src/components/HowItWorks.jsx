import React from 'react';
// Certifique-se de que a biblioteca está instalada: npm install akar-icons
import { ChatApprove, ChatQuestion, LockOn } from "akar-icons";

// Dados dos passos (seu código aqui está perfeito)
const steps = [
  {
    icon: ChatQuestion,
    title: 'Faça sua pergunta',
    description: 'Digite sua dúvida legal no JuriBot.',
  },
  {
    icon: ChatApprove,
    title: 'Receba orientação',
    description: 'O JuriBot analisa sua pergunta e fornece uma resposta clara com base em informações jurídicas confiáveis.',
  },
  {
    icon: LockOn,
    title: 'Aja com segurança',
    description: 'Siga as orientações recebidas e saiba quais são seus direitos e os próximos passos a tomar.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-6">
        
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#544b47] mb-16">
          Como funciona
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => {
            // 1. Crie uma variável com letra maiúscula para o componente do ícone
            const IconComponent = step.icon;

            return (
              <div key={index} className="flex flex-col items-center text-center">
                
                {/* 2. Renderize a variável como uma tag JSX */}
                {/* Também podemos passar props como className, size, etc. */}
                <IconComponent 
                  className="text-[#544b47] mb-6" 
                  size={100} // A maioria das libs aceita size como prop
                  strokeWidth={1.5}
                />
                
                <h3 className="text-2xl font-bold text-[#544b47] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-base text-gray-700 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;