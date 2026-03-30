import imgHero from "@/assets/imgHero.jpg";

export const Hero = () => {
  return (
    <section className="w-full bg-secondary py-19 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Texto */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-primary">
            Transformando água poluída em vida
          </h1>

          <p className="text-lg md:text-xl text-gray-600">
            Ilhas sustentáveis que purificam rios e restauram o equilíbrio ambiental.
          </p>

          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition shadow-md">
            Conheça o projeto
          </button>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <img
            src={imgHero}
            alt="Projeto de purificação de água"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};