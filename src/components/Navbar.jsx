import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Experience", "Technologies", "Projects", "Contact Us", "Download Resume"];

  const handleLinkClick = (item) => {
    if (item !== "Download Resume") {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="sticky top-0 z-50 py-4 px-6 md:px-8 flex justify-between items-center shadow-lg"
      style={{ backgroundColor: "#03045E", color: "#CAF0F8" }}
    >
      {/* Left side: Portfolio Title */}
      <div
        className="text-2xl font-bold tracking-wide"
        style={{ color: "#90E0EF" }}
      >
        Portfolio
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-3xl text-[#CAF0F8]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Nav Links */}
      <div
        className={`${isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-[#03045E] md:static md:flex md:space-x-6 md:w-auto z-50`}
      >
        {navItems.map((item) => (
          item === "Download Resume" ? (
            <a
              key={item}
              href="SIDRA_AKHTAR_MERN_DEVELOPER_CV.pdf"
              download
              className="relative block md:inline-block px-6 py-3 text-sm group"
              style={{ color: "#CAF0F8" }}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00B4D8] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ) : (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative block md:inline-block px-6 py-3 text-sm group"
              style={{ color: "#CAF0F8" }}
              onClick={() => handleLinkClick(item)}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00B4D8] transition-all duration-300 group-hover:w-full"></span>
            </a>
          )
        ))}
      </div>
    </nav>
  );
};

export default Navbar;