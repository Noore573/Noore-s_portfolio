import React from "react";

const GlassPanel = ({ title, subtitle, details }) => {
    return (
        <div className="relative bg-glass-gradient backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden h-[500px] flex items-center justify-center group cursor-pointer">
            {/* Default Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-transform duration-500 group-hover:-translate-y-full">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-lg">{subtitle}</p>
            </div>

            {/* Hidden Content (bullet points) */}
            <div className="absolute inset-0 flex items-center justify-center px-6 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <ul className="list-disc text-left space-y-2 text-sm md:text-base">
                    {details.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GlassPanel;
