const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white py-10 shadow-[0_0_30px_rgba(0,0,0,0.6)] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Logo or Title */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Pass<span className="text-white drop-shadow-md">Op</span>
        </div>

        {/* Center - Links */}
        <div className="flex space-x-8 text-sm">
          {["Home", "Features", "About"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-white font-medium transition duration-300
                before:content-[''] before:absolute before:-bottom-1 before:left-0
                before:h-[2px] before:w-0
                before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500
                before:transition-all before:duration-500 hover:before:w-full
                before:shadow-[0_0_10px_rgba(99,102,241,0.7)] hover:scale-105"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right - Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold tracking-wide hover:text-blue-400 transition duration-300">
            Bimalesh Yadav
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
