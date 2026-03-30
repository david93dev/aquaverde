import { PiPlant } from "react-icons/pi";
import { IoWaterSharp } from "react-icons/io5";
import { FaFaucetDrip } from "react-icons/fa6";
import { RiRecycleFill } from "react-icons/ri";

export const ObjectivesSection = () => {
  const items = [
    {
      icon: <PiPlant />,
      title: "Ilhas Sustentáveis",
      text: "Desenvolver plataformas de ilhas flutuantes com plantas capazes de purificar águas poluídas.",
    },
    {
      icon: <IoWaterSharp />,
      title: "Purificação da Água",
      text: "Transformar corpos d’água poluídos em recursos seguros, livres de contaminação.",
    },
    {
      icon: <FaFaucetDrip />,
      title: "Acesso à Água Potável",
      text: "Levar água limpa para comunidades por meio da purificação de منابع hídricos locais.",
    },
    {
      icon: <RiRecycleFill />,
      title: "Sustentabilidade",
      text: "Utilizar materiais recicláveis para reduzir impactos ambientais e promover sustentabilidade.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-5 my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Objetivos Especificos
      </h2>

      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100"
            >
              {/* Ícone */}
              <div className="w-12 h-12 flex items-center text-primary justify-center bg-primary/10 rounded-xl mb-4 text-xl">
                {item.icon}
              </div>

              {/* Título */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Texto */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
