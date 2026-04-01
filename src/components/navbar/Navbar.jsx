import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Nossa Equipe", href: "#equipe" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="flex justify-center fixed w-full z-50">
      <div className="w-full md:mx-5 bg-primary h-16 rounded-b-2xl px-6 md:px-8 flex justify-between items-center shadow-md border-b border-[#006386]">
        
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-6" />
          <span className="text-lg md:text-xl uppercase font-bold text-secondary tracking-wide">
            Aquaverde
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-secondary font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden p-2 rounded-md hover:bg-primary-dark transition"
        >
          <RxHamburgerMenu className="text-secondary" size={24} />
        </button>

        <div
          className={`md:hidden absolute top-16 right-4 py-2 bg-primary text-secondary rounded-b-xl min-w-56 shadow-lg overflow-hidden transform transition-all duration-300 ${
            showMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col text-right">
            {links.map((link) => (
              <li
                key={link.name}
                className="px-4 py-2 hover:bg-primary-dark cursor-pointer transition"
              >
                <a href={link.href} onClick={() => setShowMenu(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </header>
  );
};