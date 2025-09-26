import React from "react";
import resume from "../assets/NewnewCV.pdf"; 


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-transparent text-white z-[9999]">

      {/* Left Side - Nav Links */}
      <ul className="flex gap-6 font-semibold text-sm">
        <li><a href="#hero" className="hover:text-cyan-400     font-medium font-robotoFlex">Home</a></li>
        <li><a href="#about" className="hover:text-cyan-400    font-medium font-robotoFlex">About</a></li>
        <li><a href="#skills" className="hover:text-cyan-400   font-medium font-robotoFlex">Skills</a></li>
        <li><a href="#projects" className="hover:text-cyan-400 font-medium font-robotoFlex">Projects</a></li>
      </ul>

      {/* Right Side - Buttons */}
      <div className="flex gap-3">
        <a
          href="https://github.com/Noore573"
          // target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 border font-medium font-robotoFlex border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-white transition"
        >
          View GitHub
        </a>
        <a
          href={resume} // ✅ imported file

          download="Noore_Sabah_CV.pdf"  
          rel="noopener noreferrer"
          className="px-4 py-1 border font-medium font-robotoFlex border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-white transition"
        >
          View CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
