import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-transparent text-white z-50">
      {/* Left Side - Nav Links */}
      <ul className="flex gap-6 font-semibold text-sm">
        <li><a href="#hero" className="hover:text-cyan-400">Home</a></li>
        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
        <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
      </ul>

      {/* Right Side - Buttons */}
      <div className="flex gap-3">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-white transition"
        >
          View GitHub
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-white transition"
        >
          View CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
