import React from "react";
import GlassPanel from "../components/GlassPanel";
import mouseIcon from "../assets/mouse.png";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // delay between cards
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen font-robotoFlex tracking-normal flex flex-col justify-center items-center text-white px-6 py-12 relative"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">Skills</h2>

            {/* Animated container */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Card 1 */}
                <motion.div variants={itemVariants}>
                    <GlassPanel
                        title="FRONT-END"
                        subtitle="Skills"
                        details={[
                            "React (hooks, state management, component-based architecture)",
                            "Flutter (cross-platform mobile apps, GetX state management)",
                            "JavaScript / TypeScript (modern ES6+, async programming)",
                            "HTML5 / CSS3 (responsive layouts, semantic design)",
                            "TailwindCSS & Bootstrap (rapid UI development)",
                            "Firebase (authentication, real-time database, hosting)",
                            "REST API integration (Postman for testing/debugging)",
                        ]}
                    />
                </motion.div>

                {/* Card 2 */}
                <motion.div variants={itemVariants}>
                    <GlassPanel
                        title="AI"
                        subtitle="Skills"
                        details={[
                            "Natural Language Processing (text classification, sentiment analysis, embeddings)",
                            "Computer Vision (image classification, detection, tracking)",
                            "Machine Learning (scikit-learn: regression, clustering, ensemble models)",
                            "Deep Learning (TensorFlow & PyTorch frameworks)",
                            "Data Analysis & Visualization (pandas, matplotlib)",
                            "Model Deployment (basic API integration with Python/Flask or Firebase)",
                            "OpenCV (real-time image processing, gesture detection)",
                        ]}
                    />
                </motion.div>

                {/* Card 3 */}
                <motion.div variants={itemVariants}>
                    <GlassPanel
                        title="UI/UX"
                        subtitle="Skills"
                        details={[
                            "UI/UX design in Figma (wireframes, prototypes, component libraries)",
                            "User-centered design principles (accessibility, intuitive flows)",
                            "Creating responsive, mobile-first interfaces",
                            "Information architecture & layout planning",
                            "Designing for performance and usability",
                            "Conducting stakeholder meetings & gathering feedback",
                            "Translating designs into working React/Flutter components",
                        ]}
                    />
                </motion.div>
            </motion.div>

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

export default Skills;
