// src/sections/Projects.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import mouseIcon from "../assets/mouse.png"; // placeholder for all tiles

const Projects = () => {
    // one place to control all gaps
    const GAP = "gap-2";         // change to "gap-2" or "gap-6" to taste
    const INNER_GAP = GAP;       // keep inner sub-grids consistent

    return (
        <section
            id="projects"
            className="h-screen flex flex-col justify-center items-center text-white bg-hero-gradient px-6 relative"
        >
            {/* <h2 className="text-4xl font-bold mb-12">Projects</h2> */}

            {/* Three column layout on md+, stacked on mobile */}
            <div className={`grid md:grid-flow-col auto-cols-max ${GAP} w-full max-w-6xl`}>


                {/* ---------------- Section 1 ---------------- */}
                <div className={`grid ${INNER_GAP}`}>
                    {/* Large box (fills column width; control height only) */}
                    <ProjectCard
                        text=""
                        slide="left"
                        bgColor="#1e293b"
                        className="h-[400px] w-[400px]"
                    >
                        <img src={mouseIcon} alt="" className="w-24 h-24" />
                    </ProjectCard>

                    {/* Two small boxes below */}
                    <div className={`grid grid-cols-2 ${INNER_GAP}`}>
                        <ProjectCard className="h-[230px]">
                            <img src={mouseIcon} alt="" className="w-10 h-10" />
                        </ProjectCard>
                        <ProjectCard className="h-[230px]">
                            <img src={mouseIcon} alt="" className="w-10 h-10" />
                        </ProjectCard>
                    </div>
                </div>

                {/* ---------------- Section 2 ---------------- */}
                <div className={`grid ${INNER_GAP}`}>
                    {/* Remove fixed widths so the column can use all available space */}
                    <ProjectCard className="h-[315px] w-[180px]" >
                        <img src={mouseIcon} alt="" className="w-12 h-12" />
                    </ProjectCard>
                    <ProjectCard className="h-[315px]  w-[180px] ">
                        <img src={mouseIcon} alt="" className="w-12 h-12" />
                    </ProjectCard>
                </div>

                {/* ---------------- Section 3 ---------------- */}
                <div className={`grid ${INNER_GAP}`}>
                    {/* Top: 2x2 square of tiles */}
                    <div className={`grid grid-cols-2 ${INNER_GAP}`}>
                        {/* Let the cells define width; just give them a uniform height or aspect */}
                        <ProjectCard className="h-[200px] w-[300px]">
                            <img src={mouseIcon} alt="" className="w-10 h-10" />
                        </ProjectCard>
                        <ProjectCard className="h-[200px] w-[300px]">
                            <img src={mouseIcon} alt="" className="w-10 h-10" />
                        </ProjectCard>
                        <ProjectCard className="h-[200px] w-[300px]">
                            <img src={mouseIcon} alt="" className="w-10 h-10" />
                        </ProjectCard>
                        <ProjectCard className="h-[200px] w-[300px]">
                            <img src={mouseIcon} alt="" className="w-10 h-10" />
                        </ProjectCard>
                    </div>

                    {/* Bottom: 3 slightly taller panels */}
                    <div className={`grid grid-cols-3 ${INNER_GAP}`}>
                        <ProjectCard className="h-[220px]">
                            <img src={mouseIcon} alt="" className="w-10 h-10" />
                        </ProjectCard>
                        <ProjectCard className="h-[220px]">
                            <img src={mouseIcon} alt="" className="w-10 h-10" />
                        </ProjectCard>
                        <ProjectCard className="h-[220px]">
                            <img src={mouseIcon} alt="" className="w-10 h-10" />
                        </ProjectCard>
                    </div>
                </div>
            </div>

            {/* Return Home button */}
            <div className="absolute bottom-6">
                <a
                    href="#hero"
                    className="px-6 py-2 rounded-full bg-cyan-400 text-blue-900 font-semibold hover:bg-cyan-300 transition"
                >
                    Return Home
                </a>
            </div>
        </section>
    );
};

export default Projects;
