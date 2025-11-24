import TeamMemberCard from "../components/TeamMemberCard";
import leo from "../assets/leo.jpeg";
import gabriel from "../assets/gabriel.jpeg";
import enzo from "../assets/enzo.jpeg";
import gui from "../assets/gui.jpeg";
import Header from "../components/Header";

const Members = () => {
  return (
    <>
    <Header />
      <section className="h-[90vh] bg-[#FFF9E9] font-sans py-24 px-12 text-center">
        <h2 className="text-3xl font-bold text-[#483121] mb-4">
          Conheça a equipe JuriTech
        </h2>
        <p className="text-lg text-[#483121] mb-12 max-w-2xl mx-auto">
          Os membros que estão por trás do JuriBot – comprometidos com a justiça
          acessível e o ODS 16.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMemberCard
            name="Leonardo Ribas"
            role="Back-end / DevOps"
            description="Responsável pela arquitetura e operações."
            imageUrl={leo}
          />
          <TeamMemberCard
            name="Gabriel Akira"
            role="Produto / QA"
            description="Garantia de qualidade e boas práticas."
            imageUrl={gabriel}
          />
          <TeamMemberCard
            name="Enzo Cavalcante"
            role="UX / UI Designer"
            description="Design de interfaces e experiência do usuário."
            imageUrl={enzo}
          />
          <TeamMemberCard
            name="Guilherme Luis"
            role="Desenvolvedor Back-end"
            description="Trabalha com Node.js, bancos de dados e APIs."
            imageUrl={gui}
          />
        </div>
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-[#483121] mb-4">
            Nosso comprometimento
          </h2>
          <p className="text-lg ttext-[#483121] max-w-3xl mx-auto">
            A Juritech acredita que todos têm direito à informação jurídica
            clara, independente de seu contexto. Nosso trabalho com o JuriBot
            busca aproximar a tecnologia da justiça.
          </p>
        </section>
      </section>
    </>
  );
};

export default Members;
