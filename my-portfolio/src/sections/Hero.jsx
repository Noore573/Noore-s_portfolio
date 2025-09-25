import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFigma } from "react-icons/fa";
import mouseIcon from "../assets/mouse.png";


const Hero = () => {
    return (
        <section
            id="hero"
            className="h-screen flex flex-col justify-center items-center text-center text-white bg-hero-gradient px-4"
        >
            {/* Name & Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4">NOORE SABAH</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
                SOFTWARE ENGINEER & AI SPECIALIST
            </h2>
            <p className="max-w-2xl text-gray-300 italic mb-8">
                Bridging AI, Data, And Design To Craft Intelligent, User-Focused Web And
                Mobile Experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 text-3xl mb-8">
                <a href="mailto:your@email.com" className="hover:text-cyan-400">
                    <FaEnvelope />
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                    <FaGithub />
                </a>
                <a href="https://figma.com/@yourfigma" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                    <FaFigma />
                </a>
            </div>

            {/* About Me Button */}
            <a
                href="#about"
                className="px-6 py-2 rounded-full bg-cyan-400 text-blue-900 font-semibold hover:bg-cyan-300 transition"
            >
                About Me
            </a>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 animate-bounce">
                <img
                    src={mouseIcon} // ✅ if in src/assets
                    alt="Scroll Indicator"
                    className="w-8 h-8 opacity-80"
                />
            </div>
        </section>
    );
};

export default Hero;
