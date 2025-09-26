import React from "react";
import GlassPanel from "../components/GlassPanel";
import mouseIcon from "../assets/mouse.png";

const Skills = () => {
    return (
        <section
            id="skills"
            className="h-screen font-robotoFlex tracking-normal flex flex-col justify-center items-center text-white  px-6 relative"
        >
            {/* <h2 className="text-4xl font-bold mb-12">Skills</h2> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
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

                <GlassPanel
                    title="AI"
                    subtitle="Skills"
                    details={[
                        "Natural Language Processing (text classification, sentiment analysis, embeddings)",
                        "Computer Vision (image classification, detection, tracking)",
                        "Machine Learning (scikit-learn: regression, clustering, ensemble models)",
                        "Deep Learning (TensorFlow & PyTorch frameworks)",
                        "Data Analysis & Visualization (pandas, seaborn, matplotlib)",
                        "Model Deployment (basic API integration with Python/Flask or Firebase)",
                        "OpenCV (real-time image processing, gesture detection)",
                    ]}
                />

                <GlassPanel
                    title="UI/UX"
                    subtitle="Skills"
                    details={[
                        "UI/UX design in Figma (wireframes, prototypes, component libraries)",
                        "User-centered design principles (accessibility, intuitive flows)",
                        "Creating responsive, mobile-first interfaces",
                        "Information architecture & layout planning",
                        "Designing for performance and usability",
                        "Conducting Stakeholders meeting & gathering feedback",
                        "Translating designs into working React/Flutter components",
                    ]}
                />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 animate-bounce">
                <img
                    src={mouseIcon}
                    alt="Scroll Indicator"
                    className="w-8 h-8 opacity-80"
                />
            </div>
        </section>
    );
};

export default Skills;
