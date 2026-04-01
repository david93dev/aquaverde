import results from "@/assets/results.jpg";
import { PiPlant } from "react-icons/pi";
import { IoWaterSharp } from "react-icons/io5";
import { RiRecycleFill } from "react-icons/ri";

export const Results = () => {
  return (
    <section
      id="resultado"
      className="relative py-20 px-6 text-primary overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Mais do que um projeto...
          <span className="block">uma transformação ambiental</span>
        </h2>

        {/* Texto principal */}
        <p className="text-lg md:text-xl text-primary/70 leading-relaxed">
          O AquaVerde nasce como uma solução simples, acessível e sustentável
          para um dos maiores desafios atuais: a poluição da água. Utilizando
          biorremediação com o aguapé, o projeto demonstra que a própria
          natureza pode ser a chave para restaurar o equilíbrio ambiental.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10">
            <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <PiPlant className="text-green-700" /> Solução Natural
            </h3>
            <p className="text-sm text-primary/80">
              Uso da planta Eichhornia crassipes para absorção de metais pesados
              e purificação da água.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10">
            <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <RiRecycleFill className="text-purple-700" /> Estrutura
              Sustentável
            </h3>
            <p className="text-sm text-primary/80">
              Construção com materiais recicláveis e fibras naturais, promovendo
              baixo impacto ambiental.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10">
            <h3 className="font-semibold text-priamry mb-2 flex items-center gap-2">
              <IoWaterSharp className="text-sky-700" /> Impacto Social
            </h3>
            <p className="text-sm text-primary/80">
              Possibilidade de levar água limpa para comunidades e incentivar a
              preservação ambiental.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/30">
          <p className="text-primary/80 font-semibold">
            Atualmente, o projeto está em andamento, porém com alguns testes que
            comprovam que a ilha flutuante atuou de forma eficaz no processo
            natural de biofiltração, promovendo melhorias relevantes na
            qualidade da água em apenas uma semana de funcionamento
          </p>
        </div>

        <div>
          <img
            src={results}
            alt="imagem natureza"
            className="rounded-2xl border border-primary/30"
          />
        </div>
      </div>
    </section>
  );
};
