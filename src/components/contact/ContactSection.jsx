import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

export const ContactSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 bg-primary rounded-2xl">
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        
        {/* Card principal */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl overflow-hidden">
          
          <div className="p-8 md:p-12 flex flex-col justify-center">
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Entre em contato
            </h2>

            <p className="text-white/80 mb-6 leading-relaxed">
              Quer saber mais sobre o Aquaverde ou levar essa solução para sua
              comunidade? Estamos abertos a parcerias, dúvidas e novas ideias.
            </p>

            {/* Infos */}
            <div className="space-y-4 text-white/80">
              
              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-white text-xl" />
                <span>aquaverde@email.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-white text-xl" />
                <span>(83) 99999-9999</span>
              </div>

              <div className="flex items-center gap-3">
                <MdOutlineLocationOn className="text-white text-xl" />
                <span>Paraíba, Brasil</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};