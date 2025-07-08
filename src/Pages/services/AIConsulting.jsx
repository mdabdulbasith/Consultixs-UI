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
    <div className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-indigo-400 drop-shadow-lg">AI Strategy & Consulting</h1>
          <p className="text-lg text-gray-300">
            Unlock the power of Artificial Intelligence to transform your business operations, customer experience, and decision-making.
          </p>
        </div>

        {/* Highlight Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-8 md:p-12 space-y-6 hover:shadow-indigo-500/30 transition duration-300">
          <h2 className="text-3xl font-semibold text-indigo-300 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
            <li>AI readiness assessment & roadmapping</li>
            <li>Custom AI strategy aligned with business KPIs</li>
            <li>ML model prototyping and implementation</li>
            <li>Ethical AI advisory and compliance</li>
            <li>Data pipeline design and automation</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Let's Build the Future Together</h3>
          <p className="text-gray-300 mb-6">
            Our experts will guide you from idea to implementation — transforming AI from buzzword to business advantage.
          </p>
          <button
            onClick={handleContactClick}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIConsulting;
