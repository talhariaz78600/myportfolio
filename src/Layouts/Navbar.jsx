import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      {/* Mobile menu button */}
      <div
        className="sm:cursor-pointer fixed top-4 left-4 sm:top-10 sm:left-10 z-[999] rounded-lg bg-white/40 p-2 sm:p-3 shadow-md sm:shadow-lg"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={28} className="sm:size-8" />
      </div>
      {/* Navigation bar */}
      <nav
        className={`fixed z-[999] flex items-center gap-3 sm:gap-5 bg-slate-200/60 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        } left-1/2 -translate-x-1/2 max-w-[95vw]`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-lg sm:text-xl p-2 sm:p-2.5 rounded-full sm:cursor-pointer transition-colors duration-200 ${
              i === active ? "bg-[#3B3835] text-white" : "hover:bg-[#BFAF92]/30"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
