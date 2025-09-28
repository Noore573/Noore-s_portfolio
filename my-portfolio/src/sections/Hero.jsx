// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFigma } from "react-icons/fa";
import mouseIcon from "../assets/mouse.png";

const roles = [
    "AI Engineer",
    "Software Engineer",
    "Mobile Developer",
    "Web Developer",
    "Data Scientist",
    "UI/UX Designer",
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="h-screen flex flex-col justify-center items-center text-center text-white px-4 relative"
        >
            {/* Name */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-righteous mb-4 leading-tight">
                NOORE SABAH
            </h1>

            {/* Animated Titles */}
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold font-robotoFlex mb-6 h-9 overflow-hidden">
                <span
                    key={currentIndex}
                    className="block animate-slideUp"
                >
                    {roles[currentIndex]}
                </span>
            </h2>

            {/* Subtitle */}
            <p className="max-w-md sm:max-w-xl md:max-w-2xl text-gray-300 italic font-robotoFlex mb-8 px-2">
                Bridging AI, Data, And Design To Craft Intelligent, User-Focused Web And
                Mobile Experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6 text-2xl sm:text-3xl mb-8">
                <a href="mailto:nooresabah10@gmail.com" className="hover:text-cyan-400">
                    <FaEnvelope />
                </a>
                <a
                    href="https://www.linkedin.com/in/noore-sabah-7a6292279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Noore573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.figma.com/@NooreSabah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400"
                >
                    <FaFigma />
                </a>
            </div>

            {/* About Me Button */}
            <a
                href="#about"
                className="px-5 sm:px-6 py-2 rounded-full bg-cyan-400 text-blue-900 font-semibold font-robotoFlex hover:bg-cyan-300 transition delay-75"
            >
                About Me
            </a>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 sm:bottom-6 animate-bounce">
                <img
                    src={mouseIcon}
                    alt="Scroll Indicator"
                    className="w-6 h-6 sm:w-8 sm:h-8 opacity-80"
                />
            </div>
        </section>
    );
};

export default Hero;
