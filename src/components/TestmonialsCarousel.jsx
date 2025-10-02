import { Person } from "akar-icons";

const testimonials = [
  {
    name: 'Fulano de Tal',
    quote: 'O JuriBot me ajudou a entender meus direitos.',
    active: true,
  },
  {
    name: 'Tal D. Fulano',
    quote: 'Recebi orientações claras sobre meus direitos trabalhistas. O atendimento foi rápido e direto ao ponto.',
    active: true,
  },
  {
    name: 'Tal D. Fulano',
    quote: 'Recebi orientações claras sobre meus direitos trabalhistas. O atendimento foi rápido e direto ao ponto.',
    active: true,
  },
  {
    name: 'Tal D. Fulano',
    quote: 'Recebi orientações claras sobre meus direitos trabalhistas. O atendimento foi rápido e direto ao ponto.',
    active: true,
  },
  {
    name: 'Fulano de Tal',
    quote: 'Ferramenta incrível para tirar dúvidas rápidas.',
    active: false,
  }
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-20 sm:py-24 font-sans">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#544b47] text-center mb-12">
          Depoimentos
        </h2>

        {/* Container rolável */}
        <div className="max-w-lg mx-auto bg-[#7f736e] p-4 sm:p-6 rounded-2xl h-[28rem] overflow-y-auto space-y-4">
          {testimonials.map((testimonial, index) => (
            // Card de Depoimento
            <div 
              key={index} 
              className={`p-5 rounded-xl flex items-start gap-4 bg-[#948782]`}
            >
              {/* Avatar */}
              <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-white`}>
                <Person className={`w-8 h-8 sm:w-10 sm:h-10 text-black`} />
              </div>
              {/* Conteúdo do Texto */}
              <div>
                <p className={`font-bold text-lg text-white`}>
                  {testimonial.name}
                </p>
                <p className={`text-sm mt-1 text-gray-200`}>
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;