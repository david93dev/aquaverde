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
        "Cano PVC, Boias reutilizadas, Fibra de bananeira, Planta Aguapé. "
    }
  ];



  return (
    <section className="py-20 px-6 bg-primary rounded-2xl">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-6">
          Como o Aquaverde Funciona
        </h2>

        <p className="text-secondary/70 text-center max-w-3xl mx-auto mb-12">
          O projeto combina pesquisa científica com soluções naturais para desenvolver
          um sistema sustentável de purificação da água.
        </p>

        <div className="grid md:grid-cols-3 gap-6 ">
          {etapas.map((etapa, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {etapa.titulo}
              </h3>
              <p className="text-gray-600">{etapa.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}