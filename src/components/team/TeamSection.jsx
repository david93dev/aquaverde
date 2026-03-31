// import img1 from "@/assets/user1.jpg";
// import img2 from "@/assets/user2.jpg";
// import img3 from "@/assets/user3.jpg";

const img1 = "https://i.pinimg.com/736x/f4/51/e4/f451e40d0c7762ef3b6c7bbe404cebda.jpg" 
const img2 = "https://i.pinimg.com/736x/9c/97/2c/9c972cbb905de102b0e5d043605c37a6.jpg"
const img3 = "https://i.pinimg.com/736x/b3/d7/a0/b3d7a009a7abebceea1809fc939796f9.jpg"

export const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Bruno Sousa",
      role: "Desenvolvedor do Projeto",
      image: img1,
    },
    {
      id: 2,
      name: "Danyevillyn Leite",
      role: "Pesquisadora",
      image: img2,
    },
    {
      id: 3,
      name: "Sebastiana Lima",
      role: "Pesquisadora",
      image: img3,
    },
  ];

  return (
    <section className="w-full bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          
          <div className="flex justify-center gap-2 mb-4 text-primary font-medium">
            <span className="bg-primary/10 px-3 py-1 rounded-full">
              Nossa Equipe
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Quem está por trás do Aquaverde
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Um time comprometido com inovação, sustentabilidade e soluções reais
            para a purificação da água.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              
              {/* Imagem */}
              <div className="relative mb-4 h-56 w-full overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Nome */}
              <h3 className="text-lg font-semibold text-primary">
                {member.name}
              </h3>

              {/* Cargo */}
              <p className="text-gray-600 text-sm mt-1">
                {member.role}
              </p>

              {/* Linha decorativa */}
              <div className="mt-4 h-1 w-10 bg-primary rounded-full"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};