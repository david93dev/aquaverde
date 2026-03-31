import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { images } from "@/assets/img/img";
import { PiPlant } from "react-icons/pi";

export const AboutProject = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    }),
  );
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <section className="py-20 px-6 bg-primary rounded-2xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Conheça o Aquaverde
          </h2>

          <p className="text-secondary/70 mb-4 text-justify md:text-left leading-relaxed">
            A poluição da água e a falta de saneamento básico ainda impactam
            milhões de pessoas no Brasil. Pensando nisso, o Aquaverde surge como
            uma solução sustentável que utiliza ilhas flutuantes com plantas
            naturais para purificar a água.
          </p>

          <p className="text-secondary/70 text-justify md:text-left leading-relaxed">
            Com o uso do aguapé{" "}
            <span className="italic">(Eichhornia crassipes)</span>, o projeto
            atua na remoção de poluentes de forma eficiente, acessível e
            alinhada à preservação ambiental.
          </p>

          {/* Destaque */}
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-600 rounded">
            <p className="text-green-800 font-medium flex items-center gap-2">
              <PiPlant/> Solução sustentável baseada na natureza
            </p>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="min-w-full flex justify-center items-center"
                >
                  <img
                    src={img.src}
                    alt={`Imagem ${img.id}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
