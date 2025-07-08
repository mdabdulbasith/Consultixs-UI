// src/pages/AIConsulting.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";

const AIConsulting = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/", { replace: true });
        setTimeout(() => {
            const section = document.querySelector("#contact");
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] via-[#09090f] to-[#0f0f1b] text-white px-6 py-28 relative overflow-hidden">
            {/* Hero Section */}
            <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400 drop-shadow-md">
                    AI Strategy & Consulting
                </h1>
                <div className="w-24 h-1 mx-auto bg-indigo-500 rounded-full mb-6 animate-pulse" />
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Unlock the power of Artificial Intelligence to transform your business operations, customer experience, and decision-making.
                </p>
            </div>

            {/* Offerings Section */}
            <div className="relative z-10 max-w-4xl mx-auto mt-20">
                <div className="bg-gradient-to-br from-white/5 via-black/30 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl p-10 md:p-14 transition duration-300 hover:shadow-indigo-500/40">
                    <h2 className="text-3xl font-semibold text-indigo-300 mb-8 text-center">What We Offer</h2>
                    <ul className="space-y-5 text-gray-300 text-lg leading-relaxed list-none">
                        <li className="flex items-start gap-3">
                            <i className="fas fa-search text-indigo-400 text-xl mt-1" />
                            <span><strong className="text-white">AI Readiness Assessment:</strong> Evaluate infrastructure and AI potential.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-bullseye text-indigo-400 text-xl mt-1" />
                            <span><strong className="text-white">Strategic AI Roadmapping:</strong> Tailored plans aligned with your KPIs.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-robot text-indigo-400 text-xl mt-1" />
                            <span><strong className="text-white">ML Model Prototyping:</strong> Build and deploy powerful machine learning systems.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-shield-alt text-indigo-400 text-xl mt-1" />
                            <span><strong className="text-white">Ethical AI Advisory:</strong> Ensure your AI practices are responsible and compliant.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-database text-indigo-400 text-xl mt-1" />
                            <span><strong className="text-white">Data Pipeline Design:</strong> Automate and optimize data flow for AI efficiency.</span>
                        </li>
                    </ul>
                </div>
            </div>


            {/* CTA Section */}
            <div className="relative z-10 mt-24 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Let’s Build the Future Together</h3>
                <p className="text-gray-300 mb-6">
                    Our experts will guide you from idea to implementation — transforming AI from buzzword to business advantage.
                </p>
                <button
                    onClick={handleContactClick}
                    className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-full shadow-lg hover:shadow-indigo-700/50 transition-all"
                >
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default AIConsulting;
