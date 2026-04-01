import logo from "../../assets/logo2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const FooterAnimated = () => {
  const devs = [
    {
      name: "David Batista",
      github: "https://github.com/david93dev",
      linkedin: "https://www.linkedin.com/in/david-f-batista-0929552a3/",
    },
  ];

  return (
    <footer className="bg-secondary/50 text-foreground mt-16 w-full rounded-t-2xl py-5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Topo */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-1 text-primary font-bold text-lg">
            <img src={logo} alt="logo" className="w-5 h-auto" />
            Aquaverde
          </div>

          {/* Devs */}
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            {devs.map((dev) => (
              <div
                key={dev.name}
                className="flex flex-col items-center md:items-start"
              >
                <span className="font-medium text-gray-700">{dev.name}</span>

                <div className="flex gap-4 mt-1">
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Linha */}
        <div className="h-px bg-gray-300 mb-6"></div>

        <div className="text-center text-sm text-gray-500 space-y-1">
          <p>
            © {new Date().getFullYear()} Aquaverde — Todos os direitos
            reservados.
          </p>

          <p className="text-gray-600">
            Desenvolvido por{" "}
            <span className="font-semibold text-primary">David Batista</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
