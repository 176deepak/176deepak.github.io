import { useState, useEffect } from "react";

function NavSection() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <nav
        id="nav-section"
        className={`flex items-center justify-between h-[50px] px-4 fixed top-0 w-full z-10 transition-colors duration-300 ${
          scrolled ? "bg-white text-black shadow-md" : "bg-white/15 text-[#1E2225]"
        }`}
      >
        {/* Mobile menu toggle */}
        <input id="menu-toggle" type="checkbox" className="hidden peer" />

        <label
          htmlFor="menu-toggle"
          className="flex flex-col justify-center items-center w-[30px] h-[30px] cursor-pointer md:hidden"
        >
          <span
            className="relative block w-[30px] h-1 bg-current rounded transition-all duration-300
            before:content-[''] before:absolute before:top-[-8px] before:w-[30px] before:h-1 before:bg-current before:rounded
            after:content-[''] after:absolute after:top-[8px] after:w-[30px] after:h-1 after:bg-current after:rounded"
          ></span>
        </label>

        {/* Menu items */}
        <ul
          className="
            hidden peer-checked:flex flex-col items-center justify-center
            absolute top-[50px] left-1/2 -translate-x-1/2 w-full bg-white/50
            md:flex md:static md:flex-row md:translate-x-0 md:justify-end md:bg-transparent
          "
        >
          {["Home", "About", "Work Area", "Contact"].map((item, index) => (
            <li
              key={index}
              className={`px-5 py-4 w-full text-center md:w-auto md:text-left hover:bg-[rgba(204,204,204,0.7)] hover:font-bold transition-colors duration-300`}
            >
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={scrolled ? "text-black" : "text-[#1E2225] md:text-[#1E2225]"}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
}

export default NavSection;
