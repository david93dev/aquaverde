export const HowWorks = () => {
  const etapas = [
    {
      titulo: "Pesquisa e Planejamento",
      descricao:
        "Estudos sobre poluição hídrica e definição da solução."
    },
    {
      titulo: "Prototipação",
      descricao:
        "Criação do modelo inicial da ilha flutuante."
    },
    {
      titulo: "Construção da Base",
      descricao:
        "Uso de PVC e materiais recicláveis para flutuação."
    },
    {
      titulo: "Substrato Natural",
      descricao:
        "Fibra de bananeira para suporte e nutrição das plantas."
    },
    {
      titulo: "Inserção da Planta",
      descricao:
        "Uso do aguapé para absorção de poluentes."
    },
    {
      titulo: "Materiais utilizados",
      descricao:
        "Cano PVC, Boias reutilizadas, Fibra de bananeira, Planta Aguapé."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-6 bg-primary rounded-2xl">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2 className="leading-tight text-3xl md:text-4xl font-bold text-center text-secondary mb-6">
          Como o Aquaverde Funciona
        </h2>

        {/* Texto */}
        <p className="text-secondary/70 text-center max-w-3xl mx-auto mb-12">
          O projeto combina pesquisa científica com soluções naturais para desenvolver
          um sistema sustentável de purificação da água.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {etapas.map((etapa, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              
              {/* Número */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold mb-4 group-hover:scale-110 transition">
                {index + 1}
              </div>

              {/* Título */}
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {etapa.titulo}
              </h3>

              {/* Descrição */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {etapa.descricao}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};