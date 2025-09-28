// src/components/About.jsx
import React from "react";
import profileImg from "../assets/profile.png";
import { FaEnvelope, FaLinkedin, FaGithub, FaFigma } from "react-icons/fa";
import mouseIcon from "../assets/mouse.png";
import resume from "../assets/NewnewCV.pdf";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-12 text-white relative"
        >
            {/* LEFT SIDE */}
            <div className="flex flex-col items-center text-center md:w-1/3">
                <img
                    src={profileImg}
                    alt="Profile"
                    className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto object-cover rounded-full mb-4  hover:scale-105 transition-transform duration-300"
                />
                <h2 className="text-base sm:text-lg font-semibold font-robotoFlex">
                    @NooreAlsadoon
                </h2>
                <a
                    href={resume}
                    download="Noore_Sabah_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-5 sm:px-6 py-2 rounded-full bg-cyan-400 text-blue-900 font-semibold font-robotoFlex hover:bg-cyan-300 transition delay-75"
                >
                    View CV
                </a>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-6 md:w-2/3 w-full">
                {/* Panel 1 - Bio */}
                <div className="bg-glass-gradient animate-glass-diagonal tracking-wide font-robotoFlex backdrop-blur-lg p-5 sm:p-6 md:p-8 min-h-[320px] rounded-xl shadow-lg hover:scale-[1.02] transition duration-300">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-righteous">
                        HELLO I’M <span className="text-orange-600">NOORE SABAH</span>
                    </h3>
                    <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                        I’m a Software Engineer and AI Specialist from Basra, Iraq,
                        passionate about turning ideas into impactful digital products.
                        With 5 years of experience, I focus on building fast, responsive web
                        and mobile apps using React and Flutter. I specialize in AI
                        technologies like NLP and computer vision, creating intelligent
                        solutions for real-world problems.
                    </p>
                    <p className="text-gray-100 text-sm sm:text-base leading-relaxed mt-3">
                        As a UI/UX designer, I bring a human-centered approach, ensuring my
                        software is as intuitive as it is powerful. I also explore data
                        science and analysis, uncovering insights that drive smarter
                        decision-making. Always learning, I’m eager to collaborate on
                        projects that blend AI, design, and development to shape the future.
                    </p>
                </div>

                {/* Panel 2 - Contact */}
                <div className="bg-glass-gradient animate-glass-diagonal tracking-wide font-robotoFlex backdrop-blur-lg p-5 sm:p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-[1.02] transition duration-300">
                    <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Me</h3>
                    <div className="flex gap-5 sm:gap-6 text-2xl sm:text-3xl">
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
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 animate-bounce">
                <img
                    src={mouseIcon}
                    alt="Scroll Indicator"
                    className="w-6 sm:w-8 h-6 sm:h-8 opacity-80"
                />
            </div>
        </section>
    );
};

export default About;
