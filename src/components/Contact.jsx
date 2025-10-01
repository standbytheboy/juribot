import { Envelope, Location } from 'akar-icons';
import mascotContact from '../assets/juribot-mascot.png';

const Contact = () => {
  return (
    <section className="bg-[#fdf5ec] py-20 sm:py-24 font-sans">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#544b47] text-center mb-8">
          Contate-nos
        </h2>

        {/* Card Principal */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16">

            {/* Coluna do Formulário (Esquerda) */}
            <div className="w-full md:w-1/2">
              <p className="font-bold text-lg text-[#544b47] mb-6">
                Fale com a nossa equipe da JuriTech ou envie sua dúvida diretamente ao JuriBot.
              </p>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#544b47] font-bold mb-2">Nome</label>
                  <input type="text" id="name" className="w-full p-3 bg-white border-2 border-[#a9998e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#544b47] transition" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#544b47] font-bold mb-2">E-mail</label>
                  <input type="email" id="email" className="w-full p-3 bg-white border-2 border-[#a9998e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#544b47] transition" />
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-[#544b47] font-bold mb-2">Seu comentário</label>
                  <textarea id="comment" rows="4" className="w-full p-3 bg-white border-2 border-[#a9998e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#544b47] transition"></textarea>
                </div>
                <button type="submit" className="w-full mt-2 bg-[#544b47] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#433b37] transition-colors duration-300">
                  Enviar seu comentário
                </button>
              </form>
            </div>

            {/* Coluna de Informações (Direita) */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left">
              <img src={mascotContact} alt="Mascote Juribot" className="w-48 h-48 mb-8" />
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Envelope className="w-6 h-6 text-[#544b47]" />
                  <span className="text-gray-700">juritechtcc@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Location className="w-6 h-6 text-[#544b47]" />
                  <span className="text-gray-700">Rua do Direito, 123 - São Paulo</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;