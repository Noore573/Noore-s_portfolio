// src/sections/Projects.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import mouseIcon from "../assets/mouse.png";
import interactivesurfac from "../assets/int.png";
import ELM from "../assets/ELM.png";
import ArabicDialect from "../assets/NLP.png";
import Smileybag from "../assets/flut.png";
import Skydiving_sim from "../assets/sky.png";
import MovieRev from "../assets/mov.png";
import Bikeshare from "../assets/bikeshare.png";
import Syrianconf from "../assets/syria.png";
import Customerseg from "../assets/customer-segment.png";
import Score from "../assets/score.png";
import Cruds from "../assets/cruds.png";
import Facerec from "../assets/facereec.png";
import { motion } from "framer-motion";

// Framer Motion Variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // delay between children
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Projects = () => {
    const GAP = "gap-2";
    const INNER_GAP = GAP;

    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col justify-center items-center text-white px-6 relative"
        >
            {/* Scrollable on mobile, centered on desktop */}
            <div className="w-full overflow-x-auto">
                {/* Animated container */}
                <motion.div
                    className="flex md:justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className={`grid grid-flow-col auto-cols-max ${GAP} min-w-max`}>
                        {/* ---------------- Section 1 ---------------- */}
                        <motion.div className={`grid ${INNER_GAP}`} variants={itemVariants}>
                            <ProjectCard
                                text={`Interactive Surface<br />I developed an AI-powered interactive surface that transforms any projected display into a smart touchscreen, using computer vision and gesture detection to create real-time, touchless interaction. This project strengthened my expertise in OpenCV, TensorFlow, and hardware integration, showcasing my ability to combine AI with practical user experiences.`}
                                slide="left"
                                bgColor="#00D2A1"
                                textClassName="text-black text-xl font-light leading-relaxed whitespace-pre-line"
                                className="h-[390px] w-[400px]"
                            >
                                <img src={interactivesurfac} alt="" className="w-56 h-56" />
                            </ProjectCard>

                            <div className={`grid grid-cols-2 ${INNER_GAP}`}>
                                <motion.div variants={itemVariants}>
                                    <ProjectCard
                                        text={`English Assistant LLM<br />By fine-tuning Llama-3.2-3B with Unsloth and QLoRA, I built a lightweight grammar correction and tutoring model.`}
                                        slide="right"
                                        bgColor="#12EAEA"
                                        textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                        link="https://github.com/Noore573/English-assistant-LLM"
                                        className="h-[220px]"
                                    >
                                        <img src={ELM} alt="" className="w-36 h-36" />
                                    </ProjectCard>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <ProjectCard
                                        text={`Arabic Dialect Identification<br />I developed NLP models to classify Arabic dialects, experimenting with multiple algorithms and approaches.`}
                                        slide="down"
                                        bgColor="#FF0015"
                                        textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                        link={"https://github.com/Noore573/Arabic-Aialect-identification"}
                                        className="h-[220px]"
                                    >
                                        <img src={ArabicDialect} alt="" className="w-32 h-32" />
                                    </ProjectCard>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* ---------------- Section 2 ---------------- */}
                        <motion.div className={`grid ${INNER_GAP}`} variants={itemVariants}>
                            <ProjectCard
                                text={`E-Commerce App<br />I built a mobile e-commerce app with Flutter and Laravel, featuring authentication, browsing, and checkout. This project demonstrated my capacity to merge mobile development, backend integration, and UX-focused design into a complete product.`}
                                slide="up"
                                bgColor="#F7FF00"
                                textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                link={"https://github.com/Noore573/E-commerce"}
                                className="h-[305px] w-[180px]"
                            >
                                <img src={Smileybag} alt="" className="w-28 h-40" />
                            </ProjectCard>
                            <ProjectCard
                                text={`Skydiving Simulator<br />With Three.js, I designed an interactive skydiving simulator that brings realistic physics and graphics to the browser. This project strengthened my knowledge of 3D rendering, physics simulation, and creative use of JavaScript frameworks.`}
                                slide="down"
                                bgColor="#AE00FF"
                                textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                link={"https://github.com/Noore573/SkyDiving-simulator"}
                                className="h-[305px] w-[180px]"
                            >
                                <img src={Skydiving_sim} alt="" className="w-28 h-32" />
                            </ProjectCard>
                        </motion.div>

                        {/* ---------------- Section 3 ---------------- */}
                        <motion.div className={`grid ${INNER_GAP}`} variants={itemVariants}>
                            <div className={`grid grid-cols-2 ${INNER_GAP}`}>
                                <motion.div variants={itemVariants}>
                                    <ProjectCard
                                        text={`Movie Revenue Prediction<br />I designed machine learning models to forecast box office revenue and classify profitability, integrating diverse datasets and addressing financial data challenges. `}
                                        slide="up"
                                        bgColor="#F85E00"
                                        textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                        link={"https://github.com/Noore573/MovieRevenue"}
                                        className="h-[190px] w-[300px]"
                                    >
                                        <img src={MovieRev} alt="" className="w-28 h-28" />
                                    </ProjectCard>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <ProjectCard
                                        text={`BikeShare<br />This project analyzed Washington, D.C. bike-sharing data to uncover patterns in daily usage, weather impacts, and high-activity zones. `}
                                        slide="right"
                                        bgColor="#2A00FF"
                                        textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                        link={"https://github.com/Noore573/BikeShareChallenge"}
                                        className="h-[190px] w-[300px]"
                                    >
                                        <img src={Bikeshare} alt="" className="w-32 h-28" />
                                    </ProjectCard>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <ProjectCard
                                        text={`Syrian Conflict Data Analysis<br /> I conducted a comprehensive temporal and spatial analysis of the Syrian Revolution, using ACLED data to reveal escalation phases, fatalities, and regional impacts. `}
                                        slide="left"
                                        bgColor="#118300"
                                        textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                        link={"https://github.com/Noore573/Syrian_conflic_Data_analysis"}
                                        className="h-[190px] w-[300px]"
                                    >
                                        <img src={Syrianconf} alt="" className="w-28 h-28" />
                                    </ProjectCard>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <ProjectCard
                                        text={`Customer Segmentation<br />Using the Mall Customers dataset, I applied clustering techniques to group shoppers based on income and spending. `}
                                        slide="down"
                                        bgColor="#00FFF2"
                                        textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                        link={"https://github.com/Noore573/Customer-_segmentation"}
                                        className="h-[190px] w-[300px]"
                                    >
                                        <img src={Customerseg} alt="" className="w-24 h-24" />
                                    </ProjectCard>
                                </motion.div>
                            </div>

                            <div className={`grid grid-cols-3 ${INNER_GAP}`}>
                                <motion.div variants={itemVariants}>
                                    <ProjectCard
                                        text={`Employee Management System<br />I created a management platform using React for the frontend and Laravel for the backend, focusing on CRUD operations and streamlined workflows.`}
                                        slide="right"
                                        bgColor="#0059FF"
                                        textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                        link={"https://github.com/Noore573/score-react"}
                                        className="h-[210px]"
                                    >
                                        <img src={Score} alt="" className="w-36 h-36" />
                                    </ProjectCard>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <ProjectCard
                                        text={`CRUDS<br />A lightweight app built with vanilla JavaScript, HTML, and CSS to practice CRUD operations. This project solidified my core frontend development fundamentals.`}
                                        slide="down"
                                        bgColor="#FF7700"
                                        textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                        link={"https://github.com/Noore573/CRUDS"}
                                        className="h-[210px]"
                                    >
                                        <img src={Cruds} alt="" className="w-36 h-36" />
                                    </ProjectCard>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <ProjectCard
                                        text={`Face Recognition<br />Using DeepFace, I developed a real-time face recognition system capable of identifying individuals with high accuracy.`}
                                        slide="left"
                                        bgColor="#F7FF00"
                                        textClassName="text-black text-sm font-light leading-relaxed whitespace-pre-line"
                                        link={"https://github.com/Noore573/FaceRecognation"}
                                        className="h-[210px]"
                                    >
                                        <img src={Facerec} alt="" className="w-36 h-36" />
                                    </ProjectCard>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
