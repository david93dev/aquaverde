import { PiFlowerLotusLight } from "react-icons/pi";

export const FooterAnimated = () => {
  const links = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#" },
    { name: "Como funciona", href: "#" },
    { name: "Contato", href: "#" },
  ];

  return (
    <footer className="bg-secondary/50 text-foreground mt-16 w-full rounded-t-2xl py-10">
      
      <div className="max-w-6xl mx-auto px-6">

        {/* Topo */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">

          {/* Logo */}
          <div className="flex items-center gap-2 text-primary font-bold text-lg">
            <PiFlowerLotusLight size={26} />
            Aquaverde
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-gray-700 hover:text-primary transition"
              >
                {link.name}
                <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

        </div>

        {/* Linha */}
        <div className="h-px bg-gray-300 mb-6"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aquaverde — Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};