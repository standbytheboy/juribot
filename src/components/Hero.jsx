import juribotMascot from '../assets/juribot-mascot.png'; 

const Hero = () => {
  return (
    <section className="bg-[#fdf5ec] font-sans">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12 sm:py-24">
        
        {/* Coluna de Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#544b47] leading-tight">
            Justiça gratuita com tecnologia inteligente
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#544b47] max-w-xl mx-auto md:mx-0">
            Orientações jurídicas acessíveis com o poder da IA.
          </p>
          
          {/* Botões de Ação */}
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <button className="px-8 py-3 bg-[#544b47] text-white font-bold rounded-lg shadow-md hover:bg-[#433b37] transition-colors duration-300">
              Experimente o JuriBot
            </button>
            <button className="px-8 py-3 border-2 border-[#544b47] text-[#544b47] font-bold rounded-lg hover:bg-[#544b47] hover:text-white transition-colors duration-300">
              Saiba mais
            </button>
          </div>
        </div>
        
        {/* Coluna da Imagem */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img 
            src={juribotMascot} 
            alt="Mascote JuriBot" 
            className="w-auto h-64 sm:h-80 lg:h-96" 
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;