// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({
    className = "",
    children,
    text = "Project details",
    slide = "left",   // "left" | "right" | "up" | "down"
    bgColor = "#0ea5e9", // default cyan-500
    textClassName = "text-white text-sm",
    link = null, // ✅ new prop for external/internal link
}) => {
    const slideOutAnim = {
        left: "group-hover:animate-slideOutLeft",
        right: "group-hover:animate-slideOutRight",
        up: "group-hover:animate-slideOutUp",
        down: "group-hover:animate-slideOutDown",
    }[slide];

    const slideInAnim = {
        left: "group-hover:animate-slideInLeft",
        right: "group-hover:animate-slideInRight",
        up: "group-hover:animate-slideInUp",
        down: "group-hover:animate-slideInDown",
    }[slide];

    const cardContent = (
        <div
            className={`relative bg-glass-gradient backdrop-blur-lg rounded-xl shadow-lg overflow-hidden group cursor-pointer ${className}`}
        >
            {/* Icon (slides out + fades) */}
            <div
                className={`absolute inset-0 flex items-center justify-center p-4 ${slideOutAnim}`}
            >
                {children}
            </div>

            {/* Slide-in background + centered text */}
            <div
                style={{ backgroundColor: bgColor }}
                className={`
                    absolute inset-0 flex items-center justify-center font-robotoFlex
                    opacity-0 ${slideInAnim}
                `}
            >
                <div
                    className={`text-center font-robotoFlex font-bold tracking-wide ${textClassName}`}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
        </div>
    );

    // ✅ If link is provided, wrap card in <a>
    return link ? (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            {cardContent}
        </a>
    ) : (
        cardContent
    );
};

export default ProjectCard;
