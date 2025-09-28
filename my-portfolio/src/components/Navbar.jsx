import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import resume from "../assets/NewnewCV.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 sm:px-10 py-4 bg-transparent text-white z-[9999]">
      {/* Left Side - Nav Links */}
      <ul className="hidden md:flex gap-6 font-semibold text-sm">
        <li>
          <a href="#hero" className="hover:text-cyan-400 font-medium font-robotoFlex">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-cyan-400 font-medium font-robotoFlex">About</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-cyan-400 font-medium font-robotoFlex">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-cyan-400 font-medium font-robotoFlex">Projects</a>
        </li>
      </ul>

      {/* Right Side - Buttons */}
      <div className="hidden md:flex gap-3">
        <a
          href="https://github.com/Noore573"
          rel="noopener noreferrer"
          className="px-4 py-1 border font-medium font-robotoFlex border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-white transition"
        >
          View GitHub
        </a>
        <a
          href={resume}
          download="Noore_Sabah_CV.pdf"
          rel="noopener noreferrer"
          className="px-4 py-1 border font-medium font-robotoFlex border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-white transition"
        >
          View CV
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`md:hidden text-2xl text-cyan-400 focus:outline-none transform transition-transform duration-500 ${menuOpen ? "rotate-x-180" : "rotate-x-0"
          }`}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-cyan-100/95 text-blue-900 flex flex-col items-center gap-6 py-6 md:hidden transform transition-all duration-500 ease-in-out ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          } origin-top`}
      >
        <a
          href="#hero"
          onClick={() => setMenuOpen(false)}
          className="hover:text-cyan-600 font-medium font-robotoFlex"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-cyan-600 font-medium font-robotoFlex"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
          className="hover:text-cyan-600 font-medium font-robotoFlex"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="hover:text-cyan-600 font-medium font-robotoFlex"
        >
          Projects
        </a>

        {/* Mobile Buttons */}
        <a
          href="https://github.com/Noore573"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-cyan-600 rounded-full text-cyan-600 hover:bg-cyan-600 hover:text-white transition"
        >
          View GitHub
        </a>
        <a
          href={resume}
          download="Noore_Sabah_CV.pdf"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-cyan-600 rounded-full text-cyan-600 hover:bg-cyan-600 hover:text-white transition"
        >
          View CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
