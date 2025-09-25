// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({
    className = "",
    children,
    text = "Project details",
    slide = "left",   // "left" | "right" | "up" | "down"
    bgColor = "#0ea5e9", // default cyan-500
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

    return (
        <div
            className={`relative bg-glass-gradient backdrop-blur-lg rounded-xl shadow-lg overflow-hidden group ${className}`}
        >
            {/* Icon (slides out + fades) */}
            <div
                className={`
          absolute inset-0 flex items-center justify-center p-4
          ${slideOutAnim}
        `}
            >
                {children}
            </div>

            {/* Slide-in background + text */}
            <div
                style={{ backgroundColor: bgColor }}
                className={`
          absolute inset-0 flex items-center justify-center 
          text-white text-center font-semibold text-lg 
          opacity-0
          ${slideInAnim}
        `}
            >
                {text}
            </div>
        </div>
    );
};

export default ProjectCard;
