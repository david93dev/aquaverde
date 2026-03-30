import results from "@/assets/results.jpg"

export const Results = () => {
  return (
    <section className="relative py-20 px-6 text-primary overflow-hidden">

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Mais do que um projeto...  
          <span className="block">
            uma transformação ambiental
          </span>
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
            <h3 className="font-semibold text-primary mb-2">
              🌱 Solução Natural
            </h3>
            <p className="text-sm text-primary/80">
              Uso da planta Eichhornia crassipes para absorção de metais pesados e purificação da água.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10">
            <h3 className="font-semibold text-primary mb-2">
              ♻️ Estrutura Sustentável
            </h3>
            <p className="text-sm text-primary/80">
              Construção com materiais recicláveis e fibras naturais, promovendo baixo impacto ambiental.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10">
            <h3 className="font-semibold text-priamry mb-2">
              💧 Impacto Social
            </h3>
            <p className="text-sm text-primary/80">
              Possibilidade de levar água limpa para comunidades e incentivar a preservação ambiental.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-primary/30">
          <p className="text-priamry/90">
            🚧 Atualmente em desenvolvimento — com a estrutura da ilha em fase final,
            o próximo passo será a realização de testes comparativos da qualidade da água,
            comprovando sua eficácia na redução de poluentes.
          </p>
        </div>

        <div >
            <img src={results} alt="imagem natureza" className="rounded-2xl"/>
        </div>
      </div>
    </section>
  );
};