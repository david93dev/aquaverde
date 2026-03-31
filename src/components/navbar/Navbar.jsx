import { useState } from "react";
import { PiFlowerLotusLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex justify-center fixed w-full z-50">
      <div className="w-full md:mx-5 bg-primary h-16 rounded-b-2xl px-6 md:px-8 flex justify-between items-center shadow-md border-b border-[#006386]">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <PiFlowerLotusLight className="text-secondary" size={30} />
          <span className="text-lg md:text-xl uppercase font-bold text-secondary tracking-wide">
            Aquaverde
          </span>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-secondary font-medium">
          <a href="#" className="hover:text-white transition">
            Saiba mais
          </a>
          <a href="#" className="hover:text-white transition">
            Contato
          </a>
          <a href="#" className="hover:text-white transition">
            Sobre Nós
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden p-2 rounded-md hover:bg-primary-dark transition"
        >
          <RxHamburgerMenu className="text-secondary" size={24} />
        </button>

        {/* MENU MOBILE */}
        <div
          className={`md:hidden absolute top-16 right-4 py-2 bg-primary text-secondary rounded-b-xl min-w-56 shadow-lg overflow-hidden transform transition-all duration-300 ${
            showMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col text-right">
            <li className="px-4 py-2 hover:bg-primary-dark cursor-pointer transition">
              Saiba mais
            </li>
            <li className="px-4 py-2 hover:bg-primary-dark cursor-pointer transition">
              Contato
            </li>
            <li className="px-4 py-2 hover:bg-primary-dark cursor-pointer transition">
              Sobre Nós
            </li>
          </ul>
        </div>

      </div>
    </header>
  );
};