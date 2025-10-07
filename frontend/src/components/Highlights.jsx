import mascotImage from '../assets/mascot-highlight.png';
import TestimonialsCarousel from './TestmonialsCarousel';

const Highlights = () => {
  return (
    <section id='depoimentos' className="py-20 sm:py-24 font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

          {/* Coluna do Mascote (Esquerda) */}
          <div className="relative w-full lg:w-1/3 flex justify-center">
            <img 
              src={mascotImage} 
              alt="Mascote Juribot"
              className="w-auto h-100 z-10"
            />
          </div>

          {/* Coluna do Texto (Direita) */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#483121] mb-8 text-center lg:text-left">
              Destaques do Juribot
            </h2>
            {/* Balão de Fala */}
            <div className="relative bg-[#483121] p-6 rounded-xl text-white shadow-lg">
              {/* Triângulo do balão (feito com bordas) */}
              <div className="absolute left-4 lg:-left-4 top-1/2 -translate-y-1/2 w-0 h-0
                border-t-[15px] border-t-transparent
                border-b-[15px] border-b-transparent
                border-r-[15px] border-r-[#483121]
                lg:border-r-[15px] lg:border-r-transparent
                lg:border-l-[15px] lg:border-l-[#483121]">
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