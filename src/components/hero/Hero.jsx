import imgHero from "@/assets/imgHero.jpg";
import { PiPlant } from "react-icons/pi";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden  py-24">
     

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-12">
    
        <div className="flex-1 text-center md:text-left space-y-6">

          {/* Título */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-primary">
            Transformando água poluída em{" "}
            <span className="text-teal-400">vida</span>
          </h1>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-primary/70 max-w-xl">
            Ilhas flutuantes que utilizam a força da natureza para purificar
            rios e restaurar o equilíbrio ambiental de forma acessível e
            sustentável.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
              Conheça o projeto
            </button>

          </div>
        </div>

        {/* IMAGEM */}
        <div className="flex-1 flex justify-center relative">
          {/* Glow atrás */}
          <div className="absolute w-80 h-80 bg-green-300 opacity-20 blur-3xl rounded-full"></div>

          {/* Card principal */}
          <div className="relative rounded-3xl p-2 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <img
              src={imgHero}
              alt="Projeto de purificação de água"
              className="w-full max-w-md md:max-w-lg rounded-2xl object-cover"
            />
 
          </div>

        </div>
      </div>
    </section>
  );
};
