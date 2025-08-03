const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left - Logo or Title */}
        <div className="text-xl font-semibold">
          Pass<span className="text-blue-400">Op</span>
        </div>

        {/* Center - Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#features" className="hover:text-blue-400 transition">
            Features
          </a>
         
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Bimalesh Yadav</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
