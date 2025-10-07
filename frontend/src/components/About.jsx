import globeIllustration from '../assets/globe-illustration.svg';

const About = () => {
  return (
    // Container principal da seção
    <section id='sobre' className="bg-[#fdf5ec] py-20 sm:py-24 font-sans">
      <div className="container mx-auto px-6">
        
        {/* Wrapper flexível para as duas colunas */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

          {/* Coluna de Texto (Esquerda) */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#483121] mb-6">
              Sobre a JuriTech
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              A JuriTech nasceu com a missão de democratizar o acesso à justiça por meio
              da tecnologia. Nosso objetivo é garantir que todos, independentemente de sua
              condição social, tenham acesso a informações jurídicas confiáveis.
              Atuamos em alinhamento com a ODS 16 da ONU – "Paz, Justiça e Instituições Eficazes".
            </p>
          </div>

          {/* Coluna da Imagem e Estatística (Direita) */}
          <div className="w-full md:w-2/5 flex flex-col items-center">
            <img 
              src={globeIllustration} 
              alt="Ilustração de um globo terrestre com folhas"
              className="w-56 h-56 sm:w-64 sm:h-64 object-contain mb-6"
            />
            <p className="text-xl font-bold text-[#483121]">
              +999999 pessoas atendidas
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;