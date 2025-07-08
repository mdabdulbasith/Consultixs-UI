// src/pages/services/ITSolutions.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";

const ITSolutions = () => {
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
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-indigo-400 drop-shadow-lg">IT Solutions</h1>
          <p className="text-lg text-gray-300">
            Empower your business with reliable IT infrastructure, integration, and technical support solutions.
          </p>
        </div>

        {/* Services List Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-8 md:p-12 space-y-6 hover:shadow-indigo-500/30 transition duration-300">
          <h2 className="text-3xl font-semibold text-indigo-300 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Cloud infrastructure setup and management</li>
            <li>Enterprise networking and systems integration</li>
            <li>IT consulting and infrastructure planning</li>
            <li>Helpdesk support and maintenance</li>
            <li>Security audits and data protection solutions</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Your Trusted IT Partner</h3>
          <p className="text-gray-300 mb-6">
            Our tech experts ensure your systems run smoothly, securely, and without downtime.
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

export default ITSolutions;
