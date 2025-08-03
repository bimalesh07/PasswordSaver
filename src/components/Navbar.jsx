import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({theme, setTheme}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Contact"];
  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/70 backdrop-blur-xl shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Pass<span className="text-white drop-shadow-md">Op</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Nav Links */}
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={`#${link.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white font-medium transition-all duration-300
                before:content-[''] before:absolute before:-bottom-1 before:left-0
                before:h-[2px] before:w-0
                before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500
                before:transition-all before:duration-500 hover:before:w-full
                before:shadow-[0_0_10px_rgba(147,51,234,0.5)] hover:scale-105"
              >
                {link}
              </a>
            ))}

            {/* Search Box */}
            <input
              type="text"
              placeholder="Search..."
              className="hidden lg:block px-4 py-1.5 text-sm text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full focus:outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-blue-500 transition"
            />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-2xl hover:scale-110 transition-all"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* GitHub Button */}
            <a
              href="https://github.com/"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-inner flex items-center gap-2 transition-all duration-300"
            >
              <img src="icons/github.svg" alt="GitHub" className="invert w-5" />
              <span className="text-sm font-bold">GitHub</span>
            </a>

            {/* Login / Sign Up */}
            <button className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-all duration-300">
              Login
            </button>
            <button className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-all duration-300">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#121212] px-4 py-4 space-y-4 shadow-md backdrop-blur-lg">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-300 hover:text-blue-400 text-lg font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
