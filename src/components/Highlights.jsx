import mascotImage from '../assets/juribot-mascot.png';
import TestimonialsCarousel from './TestmonialsCarousel';

const Highlights = () => {
  return (
    <section className="py-20 sm:py-24 font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

          {/* Coluna do Mascote (Esquerda) */}
          <div className="relative w-full lg:w-1/3 flex justify-center">
            <img 
              src={mascotImage} 
              alt="Mascote Juribot"
              className="w-auto h-64 z-10"
            />
            {/* Base marrom sob o mascote */}
            <div className="absolute bottom-4 h-8 w-64 bg-[#544b47] rounded-full"></div>
          </div>

          {/* Coluna do Texto (Direita) */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#4a423f] mb-8 text-center lg:text-left">
              Destaques do Juribot
            </h2>
            {/* Balão de Fala */}
            <div className="relative bg-[#7f736e] p-6 rounded-xl text-white shadow-lg">
              {/* Triângulo do balão (feito com bordas) */}
              <div className="absolute left-4 lg:-left-4 top-1/2 -translate-y-1/2 w-0 h-0
                border-t-[15px] border-t-transparent
                border-b-[15px] border-b-transparent
                border-r-[15px] border-r-[#7f736e]
                lg:border-r-[15px] lg:border-r-transparent
                lg:border-l-[15px] lg:border-l-[#7f736e]">
              </div>
              <p className="text-base sm:text-lg italic">
                "Desde 1990, o Estatuto da Criança e do Adolescente (ECA) garante que toda criança tem
                direito à vida, saúde, lazer, cultura e educação. É uma lei feita para proteger a infância".
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <TestimonialsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;